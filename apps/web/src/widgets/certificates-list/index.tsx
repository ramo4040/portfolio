'use client'

import { type ComponentProps, type FC, useState } from 'react'
import './style.css'
import { Button } from '@/components'
import type { certificates } from '@/data/certificates'
import { ArrowDown, ArrowUp, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type Props = ComponentProps<'div'> & { data: certificates }

export const CertificatesList: FC<Props> = ({ data, ...props }) => {
	const step = 6
	const [maxCertificates, setMaxCertificates] = useState(step)
	const isMaxReached = maxCertificates >= data.length

	return (
		<div id='certifications-container' {...props}>
			{data
				.sort((a, b) => {
					return new Date(b.date).getTime() - new Date(a.date).getTime()
				})
				.slice(0, maxCertificates)
				.map((e) => {
					return (
						<Link href={e.url} key={e.title} target='_blank'>
							<div className='__image'>
								<Image
									src={e.image}
									alt={e.title}
									fill
									style={{ objectFit: 'cover' }}
								/>
							</div>
							<div className='__details'>
								<h4>{e.title}</h4>
								<div>
									<small className='issuer'>@{e.issuer}</small>
									<hr />
									<small className='date'>{e.date}</small>
								</div>
							</div>
							<ArrowUpRight size={20} />
						</Link>
					)
				})}
			<div className='actions'>
				<Button
					size='sm'
					variant='primary'
					onClick={() =>
						setMaxCertificates((prev) =>
							isMaxReached ? prev - step : prev + step,
						)
					}
				>
					{isMaxReached ? (
						<>
							Show less <ArrowUp size={14} />
						</>
					) : (
						<>
							Show more <ArrowDown size={14} />
						</>
					)}
				</Button>
			</div>
		</div>
	)
}
