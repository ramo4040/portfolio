'use client'
import './style.css'
import { cn } from '@sglara/cn'
import { type FC, use, useEffect, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import { aiConversationContext } from '../ai-conversation-context'

type ConversationContainerProps = { isVisible: boolean }

export const ConversationContainer: FC<ConversationContainerProps> = ({
	isVisible,
}) => {
	const { messages, isLoading } = use(aiConversationContext)
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (containerRef.current) {
			containerRef.current.scrollTop = containerRef.current.scrollHeight
		}
	}, [messages])

	return (
		<div
			aria-hidden={!isVisible}
			data-visible={isVisible}
			ref={containerRef}
			id='conversation-container'
		>
			{messages.map(({ content, id, sender }) => {
				return (
					<div
						className={cn(
							'chat-message',
							sender === 'user' ? 'user-message' : 'ai-message',
						)}
						key={id}
					>
						{sender === 'user' ? (
							content
						) : (
							<ReactMarkdown>{content}</ReactMarkdown>
						)}
					</div>
				)
			})}

			{isLoading && <div className='ai-message loader' />}
		</div>
	)
}
