'use client'
import { MessageCircle, Pause, PlayIcon, Send, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import './style.css'
import { SideButtonHOC } from './side-btn-hoc'

export const AudioConversation = () => {
	const [isPlaying, setIsPlaying] = useState(false)
	const [isChatOpen, setIsChatOpen] = useState(false)
	const audioRef = useRef<HTMLAudioElement | null>(null)

	// Initialize audio only once
	useEffect(() => {
		if (!audioRef.current) {
			audioRef.current = new Audio('/audios/about-audio.mp3')
		}
	}, [])

	const handlePlayAudio = () => {
		if (!isPlaying) {
			audioRef.current?.play()
			if (audioRef.current) audioRef.current.onended = () => setIsPlaying(false)
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
		<div id='audio-conversation-wrapper'>
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
				initial={{ width: 240 }}
				animate={{
					width: isPlaying && isChatOpen ? 500 : isPlaying ? 320 : 240,
					cursor: isPlaying || isChatOpen ? 'default' : 'pointer',
				}}
				transition={{
					type: 'spring',
					stiffness: 100,
					damping: 10,
					mass: 0.8,
				}}
			>
				<AnimatePresence mode='wait'>
					{!isChatOpen && (
						<motion.div
							key={isPlaying ? 'playing' : 'stopped'}
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
							<input type='text' />
							<Send size={14} fill='#cecece' stroke='#cecece' />
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
	)
}
