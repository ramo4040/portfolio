'use client'

import { MessageCircle, Pause, PlayIcon, Send, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import './style.css'
import { AIConversationProvider } from '../ai-conversation-context'
import { ConversationContainer } from '../conversation-container/conversation-container'
import { AiConversationInput } from './ai-conversation-input'
import { SideButtonHOC } from './side-btn-hoc'

export const AudioConversation = () => {
	const [isPlaying, setIsPlaying] = useState(false)
	const [isChatOpen, setIsChatOpen] = useState(false)
	const audioRef = useRef<HTMLAudioElement | null>(null)

	// Get responsive widths based on screen size
	const getResponsiveWidths = () => {
		if (typeof window === 'undefined') {
			// Return default values for SSR
			return { initial: 240, playing: 320, chat: 500 }
		}

		const width = window.innerWidth

		if (width <= 480) {
			return { initial: 180, playing: 240, chat: 300 }
		}
		if (width <= 640) {
			return { initial: 200, playing: 280, chat: 400 }
		}

		return { initial: 240, playing: 320, chat: 500 }
	}

	const [widths, setWidths] = useState(() => getResponsiveWidths())

	// Update widths on resize
	useEffect(() => {
		if (typeof window === 'undefined') return

		const handleResize = () => {
			setWidths(getResponsiveWidths())
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	// Initialize audio only once
	useEffect(() => {
		if (!audioRef.current) {
			audioRef.current = new Audio('/audios/about-audio.mp3')
		}
	}, [])

	const handlePlayAudio = () => {
		if (!isPlaying) {
			audioRef.current?.play()
			setIsPlaying(true)
		}
	}

	const handleStopAudio = () => {
		audioRef.current?.pause()
		setIsPlaying(false)
		if (isChatOpen) {
			setIsChatOpen(false)
		}
	}

	const handleChatClick = () => {
		setIsChatOpen(!isChatOpen)
	}

	// stop audio when component unmounts
	useEffect(() => {
		return () => {
			if (audioRef.current) {
				audioRef.current.pause()
				audioRef.current = null
			}
		}
	}, [])

	return (
		<AIConversationProvider>
			<section id='ai-wrapper'>
				<ConversationContainer isVisible={isChatOpen} />

				<div id='audio-chat-input-wrapper'>
					<SideButtonHOC
						isVisible={isPlaying}
						onClick={handleStopAudio}
						className='circle-btn'
					>
						<Pause size={14} fill='black' />
					</SideButtonHOC>

					<motion.button
						type='button'
						className='play-button'
						onClick={isPlaying || isChatOpen ? () => false : handlePlayAudio}
						initial={{ width: widths.initial }}
						animate={{
							width:
								isPlaying && isChatOpen
									? widths.chat
									: isPlaying
										? widths.playing
										: widths.initial,
							cursor: isPlaying || isChatOpen ? 'default' : 'pointer',
						}}
						transition={{
							delay: !isChatOpen ? 0.2 : 0,
							type: 'spring',
							stiffness: 100,
							damping: 10,
							mass: 0.8,
						}}
					>
						<AnimatePresence mode='wait'>
							{!isChatOpen && (
								<motion.div
									initial={{ filter: 'blur(4px)', opacity: 0 }}
									animate={{ filter: 'blur(0px)', opacity: 1 }}
									exit={{ filter: 'blur(4px)', opacity: 0 }}
									transition={{ duration: 0.2 }}
									className='details'
								>
									{!isPlaying && <PlayIcon size={14} fill='black' />}
									<span>
										{isPlaying ? 'Ask the host now...' : 'Start Listening'}
									</span>
									{!isPlaying && (
										<>
											<span>・</span>
											<span>2 mins</span>
										</>
									)}
								</motion.div>
							)}

							{isChatOpen && (
								<motion.div className='chat-input'>
									<AiConversationInput />
								</motion.div>
							)}
						</AnimatePresence>
					</motion.button>

					<SideButtonHOC
						isLeft
						isVisible={isPlaying}
						onClick={handleChatClick}
						className='circle-btn'
					>
						{!isChatOpen ? (
							<MessageCircle size={14} fill='black' />
						) : (
							<X size={18} />
						)}
					</SideButtonHOC>
				</div>
			</section>
		</AIConversationProvider>
	)
}
