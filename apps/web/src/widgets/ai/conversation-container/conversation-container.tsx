'use client'
import { AnimatePresence, motion } from 'motion/react'
import './style.css'
import { cn } from '@sglara/cn'
import { type FC, use, useEffect, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import { aiConversationContext } from '../ai-conversation-context'

type ConversationContainerProps = { isVisible: boolean }

export const ConversationContainer: FC<ConversationContainerProps> = ({
	isVisible,
}) => {
	const { messages } = use(aiConversationContext)
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (containerRef.current) {
			containerRef.current.scrollTop = containerRef.current.scrollHeight
		}
	}, [messages])

	return (
		<AnimatePresence mode='wait'>
			<motion.div
				ref={containerRef}
				id='conversation-container'
				initial={{ filter: 'blur(4px)', opacity: 0, y: 100, height: 0 }}
				animate={{
					filter: isVisible ? 'blur(0px)' : 'blur(4px)',
					opacity: isVisible ? 1 : 0,
					y: isVisible ? 0 : 100,
					height: isVisible ? 'auto' : 0,
				}}
				transition={{ duration: 0.3 }}
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
			</motion.div>
		</AnimatePresence>
	)
}
