'use client'

import './style.css'
import { cn } from '@sglara/cn'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { DefaultCard } from '../default/default-card'

export const MyImages = () => {
	const [currentImage, setCurrentImage] = useState(1)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImage((prev) => {
				return prev === 3 ? 1 : prev + 1
			})
		}, 5000)

		return () => clearInterval(interval)
	}, [])

	return (
		<DefaultCard className='relative col-span-1 row-span-2'>
			{[1, 2, 3].map((e) => {
				return (
					<Image
						key={e}
						src={`/images/me/${e}.jpg`}
						fill
						alt='me'
						objectFit='cover'
						className={cn('my-iamge', {
							'hide-my-image': currentImage !== e,
						})}
					/>
				)
			})}
		</DefaultCard>
	)
}
