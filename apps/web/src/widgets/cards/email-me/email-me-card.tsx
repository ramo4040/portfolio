'use client'
import './style.css'
import mailAnimation from '@/public/icons/mail/mail.json'
import Lottie from 'lottie-react'
import { type ComponentProps, type FC, useRef } from 'react'
import { DefaultCard } from '../default/default-card'

import type { LottieRefCurrentProps } from 'lottie-react'
import Link from 'next/link'

type Props = ComponentProps<'div'>

const EmailMeCard: FC<Props> = () => {
	const lottieRef = useRef<LottieRefCurrentProps | null>(null)

	const handleMouseEnter = () => {
		lottieRef.current?.play()
	}

	return (
		<DefaultCard
			className='col-span-1 row-span-1'
			onMouseEnter={handleMouseEnter}
		>
			<DefaultCard.Badge>Email Me</DefaultCard.Badge>
			<Link
				href='mailto:someone@example.com'
				id='email-me-container'
				target='_blank'
				rel='noopener noreferrer'
			>
				<Lottie
					lottieRef={lottieRef}
					animationData={mailAnimation}
					autoplay={false}
					loop={false}
				/>
			</Link>
		</DefaultCard>
	)
}

export { EmailMeCard }
