import { Pinecone } from '@pinecone-database/pinecone'
import { type NextRequest, NextResponse } from 'next/server'

const pc = new Pinecone({
	apiKey: process.env.PINECONE_DB || '',
})

export async function POST(request: NextRequest) {
	try {
		const { message } = await request.json()

		if (!message) {
			return NextResponse.json(
				{ error: 'Message is required' },
				{ status: 400 },
			)
		}

		const ragRecords = await pc
			.index('portfolio')
			.namespace('__default__')
			.searchRecords({
				query: {
					topK: 5,
					inputs: { text: message },
				},
			})

		const context = ragRecords.result.hits.map((e) => ({
			id: e._id,
			content: e.fields,
		}))

		const groqResponse = await fetch(
			'https://api.groq.com/openai/v1/chat/completions',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${process.env.AI_API_KEY}`,
				},
				body: JSON.stringify({
					messages: [
						{
							role: 'system',
							content: `You are an AI assistant for a developer's portfolio website. Your role is to help visitors learn about the developer's skills, projects, and experience. Use the provided context from the portfolio to answer questions accurately and professionally.

							Context from portfolio:
							${JSON.stringify(context)}

							Guidelines:
							- Answer based on the portfolio context provided
							- Be professional and friendly
							- Highlight the developer's skills and achievements
							- If asked about projects, provide specific details from the context
							- If the context doesn't contain the answer, politely say you don't have that information
							- Keep responses concise but informative
							
							If the question is unrelated out of context of portfolio, respond with:
							"I'm sorry, I can only provide information about Yassir's (Yassirs's) career and work. Would you like to know more about his skills or projects?"
							`,
						},
						{
							role: 'user',
							content: message,
						},
					],
					model: 'llama3-70b-8192',
					temperature: 0.7,
					max_completion_tokens: 1024,
				}),
			},
		)

		const completion = await groqResponse.json()

		return NextResponse.json({
			responseMessage: completion.choices[0].message.content,
		})
	} catch (error) {
		return NextResponse.json({ error: error }, { status: 500 })
	}
}
