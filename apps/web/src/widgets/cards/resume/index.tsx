'use client'
import Image from 'next/image'
import './style.css'
import { DefaultCard } from '../default/default-card'

const files = [
	{
		href: '/pdfs/resume-french.pdf',
		download: 'Resume-French.pdf',
	},
	{
		href: '/pdfs/resume-english.pdf',
		download: 'Resume-English.pdf',
	},
]

export const ResumeCard = () => {
	const handleDownloadResume = () => {
		for (const file of files) {
			const link = document.createElement('a')
			link.href = file.href
			link.download = file.download
			link.click()
		}
	}

	return (
		<DefaultCard
			className='resume-card col-span-1 row-span-1 '
			onClick={handleDownloadResume}
		>
			<DefaultCard.Badge>Resume</DefaultCard.Badge>

			<Image
				src={'/images/me/cv-image.png'}
				fill
				sizes='100%'
				alt='My Resume'
			/>
		</DefaultCard>
	)
}
