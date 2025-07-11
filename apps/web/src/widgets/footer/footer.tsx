import { Badge } from '@/components/badge/badge'
import './style.css'
import type { FC } from 'react'

type FooterProps = {
	hSize: string
	aSize: string
}

export const Footer: FC<FooterProps> = ({ aSize, hSize }) => {
	return (
		<>
			<footer
				className='page-footer'
				style={{ '--aSize': aSize, '--hSize': hSize } as React.CSSProperties}
			>
				<Badge>
					<span className='pulse' />
					Available for work
				</Badge>
				<h1>Let's build something incredible together!</h1>

				<a
					href='mailto:rouane.yasseer@gmail.com'
					rel='noreferrer'
					target='_blank'
				>
					rouane.yasseer@gmail.com
				</a>

				<p className='coptyright'>
					Copyright {new Date().getFullYear()} · Made by{' '}
					<a
						href='mailto:rouane.yasseer@gmail.com'
						rel='noreferrer'
						target='_blank'
					>
						Yassir
					</a>
				</p>
			</footer>
			<div className='footer-gradient-bg' />
		</>
	)
}
