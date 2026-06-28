'use client'

import {
	BubbleChatIcon,
	Cancel01Icon,
	PauseIcon,
	PlayIcon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
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
						<HugeiconsIcon icon={PauseIcon} size={18} />
					</SideButtonHOC>

					<button
						type='button'
						className='play-button'
						data-chat-open={isChatOpen}
						data-playing={isPlaying}
						onClick={isPlaying || isChatOpen ? () => false : handlePlayAudio}
					>
						<div className='details' aria-hidden={isChatOpen}>
							{!isPlaying && <HugeiconsIcon icon={PlayIcon} size={18} />}
							<span>
								{isPlaying ? 'Ask the host now...' : 'Start Listening'}
							</span>
							{!isPlaying && (
								<>
									<span>・</span>
									<span>2 mins</span>
								</>
							)}
						</div>

						<div className='chat-input' aria-hidden={!isChatOpen}>
							<AiConversationInput />
						</div>
					</button>

					<SideButtonHOC
						isLeft
						isVisible={isPlaying}
						onClick={handleChatClick}
						className='circle-btn'
					>
						{!isChatOpen ? (
							<HugeiconsIcon icon={BubbleChatIcon} size={18} />
						) : (
							<HugeiconsIcon icon={Cancel01Icon} size={18} />
						)}
					</SideButtonHOC>
				</div>
			</section>
		</AIConversationProvider>
	)
}
