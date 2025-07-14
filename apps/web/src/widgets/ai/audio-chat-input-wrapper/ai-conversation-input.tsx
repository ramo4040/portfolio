'use client'

import { useKeyPress } from '@/hooks/useKeyPress'
import { Send } from 'lucide-react'
import { use, useRef } from 'react'
import { aiConversationContext } from '../ai-conversation-context'

export const AiConversationInput = () => {
	const { addMessage } = use(aiConversationContext)
	const inputRef = useRef<HTMLInputElement>(null)
	useKeyPress('Enter', () => handleSendMessage())

	const handleSendMessage = async () => {
		const message = inputRef.current?.value.trim()
		if (inputRef.current && message) {
			addMessage({
				id: Date.now(),
				content: message,
				sender: 'user',
			})

			inputRef.current.value = ''

			try {
				const response = await fetch('/api/ai', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ message }),
				})

				if (response.ok) {
					const { responseMessage } = await response.json()
					addMessage({
						id: Date.now(),
						content: responseMessage,
						sender: 'ai',
					})
				} else {
					console.error('Search failed:', await response.json())
				}
			} catch (error) {
				console.error('Search error:', error)
			}
		}
	}

	return (
		<>
			<input type='text' ref={inputRef} />
			<Send
				size={14}
				fill='#cecece'
				stroke='#cecece'
				onClick={handleSendMessage}
			/>
		</>
	)
}
