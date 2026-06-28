'use client'

import { Download01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import Image from 'next/image'
import './style.css'

export function Resume() {
	const handleDownload = () => {
		// Download English resume
		const linkEn = document.createElement('a')
		linkEn.href = '/pdfs/resume-english.pdf'
		linkEn.download = 'yassir-rouane-resume-english.pdf'
		linkEn.click()

		// Download French resume with a slight delay
		setTimeout(() => {
			const linkFr = document.createElement('a')
			linkFr.href = '/pdfs/resume-french.pdf'
			linkFr.download = 'yassir-rouane-resume-french.pdf'
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
				<HugeiconsIcon icon={Download01Icon} />
			</button>
		</div>
	)
}
