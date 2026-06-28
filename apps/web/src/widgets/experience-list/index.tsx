import { ChevronDownIcon, Infinity01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import Image from 'next/image'
import { experiences } from '../../../data/experience'
import './style.css'

const formatType = (type: string) =>
	type
		.split('-')
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join('-')

const formatMonthYear = (date: string) => {
	const parsedDate = new Date(date)

	return `${parsedDate.getMonth() + 1}.${parsedDate.getFullYear()}`
}

const getDurationLabel = (startDate: string, endDate: string | null) => {
	const start = new Date(startDate)
	const end = endDate ? new Date(endDate) : new Date()
	const months =
		(end.getFullYear() - start.getFullYear()) * 12 +
		end.getMonth() -
		start.getMonth() +
		1

	return `${months}m`
}

export const ExperienceList = () => {
	return (
		<section data-ui='experience-list'>
			{experiences.map((experience) => {
				return (
					<div className='item' key={`${experience.company.name}`}>
						<header>
							<div className='company-details'>
								<div className='img'>
									<Image
										src={experience.company.logo}
										alt={`${experience.company.name} logo`}
										fill
									/>
								</div>

								<h4 className='name'>{experience.company.name}</h4>
							</div>

							<div className='at-details'>
								<p>
									{experience.at.city}, {experience.at.country} (
									{formatType(experience.mode)})
								</p>
							</div>
						</header>

						<div className='positions-container'>
							{experience.positions.map((e) => {
								return (
									<div className='experience-details' key={e.role.title}>
										<div className='left-side'>
											<div className='icon-container'>
												<HugeiconsIcon
													icon={e.role.icon}
													size={24}
													className='icon'
												/>
											</div>
										</div>

										<div className='details'>
											<details className='accordion'>
												<summary className='trigger'>
													<div>
														<h5>{e.role.title}</h5>
														<p>
															{formatType(e.role.type)} <span>|</span>{' '}
															{formatMonthYear(e.period.startDate)} –
															{e.period.endDate ? (
																formatMonthYear(e.period.endDate)
															) : (
																<HugeiconsIcon
																	icon={Infinity01Icon}
																	className='infinity-icon'
																	size={14}
																/>
															)}{' '}
															<span>|</span>{' '}
															{getDurationLabel(
																e.period.startDate,
																e.period.endDate,
															)}
														</p>
													</div>

													<HugeiconsIcon
														icon={ChevronDownIcon}
														size={18}
														className='trigger-icon'
													/>
												</summary>

												<div className='accordion-body'>
													<div className='accordion-body-inner'>
														<ul>
															{e.achievements.map((achievement) => (
																<li key={achievement}>{achievement}</li>
															))}
														</ul>
													</div>
												</div>
											</details>

											<div className='tech-tags'>
												{e.techTags.map((tag) => (
													<div data-ui='tag' key={tag}>
														{tag}
													</div>
												))}
											</div>
										</div>
									</div>
								)
							})}
						</div>
					</div>
				)
			})}
		</section>
	)
}
