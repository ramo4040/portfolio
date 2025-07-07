'use client'

import { ProjectCard } from '@/widgets/cards'
import './style.css'
import { listProject } from '@/data/projects-list'
import { useEffect, useRef } from 'react'

export default function Home() {
	const carRentalProject = listProject[0]
	const mindsprintProject = listProject[1]

	return (
		<main id='works-page-container'>
			<div className='logo' />

			<div className='headlines'>
				<h1 className='headline'>Building scalable apps with impact.</h1>
				<h1 className='sub-headline'>Code. Creativity. Reliability.</h1>
			</div>

			<div className='description'>
				<p>
					I’m <b>Yassir</b>, a fullstack developer based in <b>Morocco</b>. I
					build modern, scalable web applications <br /> — turning ideas into
					interactive digital experiences.
				</p>
			</div>

			<div className='cta' />

			<div className='projects-container'>
				<ProjectCard project={carRentalProject} />
				<ProjectCard project={mindsprintProject} />
			</div>
		</main>
	)
}
