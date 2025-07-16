import './style.css'
import { Badge } from '@/components/badge/badge'
import { cn } from '@sglara/cn'
import type { FC } from 'react'

type FooterProps = {
	hSize?: string
	aSize?: string
	isContactPage?: boolean
}

export const Footer: FC<FooterProps> = ({
	aSize,
	hSize,
	isContactPage = false,
}) => {
	return (
		<>
			<footer
				className='page-footer'
				style={{ '--aSize': aSize, '--hSize': hSize } as React.CSSProperties}
			>
				{!isContactPage && (
					<>
						<Badge>
							<span className='pulse' />
							Available for work
						</Badge>
						<h1>Let's build something incredible together!</h1>
						<a
							href={`mailto:${process.env.NEXT_PUBLIC_MY_EMAIL}`}
							rel='noreferrer'
							target='_blank'
						>
							{process.env.NEXT_PUBLIC_MY_EMAIL}
						</a>
					</>
				)}

				<p className={cn('copyright', { 'is-contact-page': isContactPage })}>
					Copyright {new Date().getFullYear()} · Made by{' '}
					<a
						href={`mailto:${process.env.NEXT_PUBLIC_MY_EMAIL}`}
						rel='noreferrer'
						target='_blank'
					>
						Yassir
					</a>{' '}
					· <a href='./llm.txt'>llm.txt</a>
				</p>
			</footer>
			{!isContactPage && <div className='footer-gradient-bg' />}
		</>
	)
}
