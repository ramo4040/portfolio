'use client'

import { Download } from 'lucide-react'
import Image from 'next/image'
import './style.css'

export function Resume() {
	const handleDownload = () => {
		// Download English resume
		const linkEn = document.createElement('a')
		linkEn.href = '/pdfs/resume-english.pdf'
		linkEn.download = 'resume-english.pdf'
		linkEn.click()

		// Download French resume with a slight delay
		setTimeout(() => {
			const linkFr = document.createElement('a')
			linkFr.href = '/pdfs/resume-french.pdf'
			linkFr.download = 'resume-french.pdf'
			linkFr.click()
		}, 100)
	}

	return (
		<div className='resume-container'>
			<button
				className='resume-image'
				onClick={handleDownload}
				aria-label='Download resume PDFs'
				type='button'
			>
				<Image
					src='/images/me/cv-image.png'
					alt='Resume'
					fill
					style={{ objectFit: 'cover' }}
				/>
				<Download />
			</button>
		</div>
	)
}
