import { createContext, useState } from 'react'

type Message = {
	id: number
	content: string
	sender: 'user' | 'ai'
}

type AIConversationContextType = {
	messages: Message[]
	isLoading?: boolean
	setIsLoading?: (loading: boolean) => void
	addMessage: (message: Message) => void
}

export const aiConversationContext = createContext(
	{} as AIConversationContextType,
)

export const AIConversationProvider = ({
	children,
}: { children: React.ReactNode }) => {
	const [messages, setMessages] = useState<Message[]>([])
	const [isLoading, setIsLoading] = useState(false)

	const addMessage = (message: Message) => {
		setMessages((prev) => [...prev, message])
	}

	return (
		<aiConversationContext.Provider
			value={{ messages, addMessage, isLoading, setIsLoading }}
		>
			{children}
		</aiConversationContext.Provider>
	)
}
