import './style.css'
import { getDay } from '@/utils/utils'
import Image from 'next/image'
import type { ComponentProps, FC } from 'react'
import { Clock } from './clock'

type DefaultCardProps = ComponentProps<'div'> & {}

type WeatherData = {
	main: {
		temp: number
	}
	name: string
}

export const LocationCard: FC<DefaultCardProps> = async ({
	className,
	children,
	...props
}) => {
	const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=Casablanca&appid=${API_KEY}&units=metric`,
	)

	if (!response.ok) {
		throw new Error(`Weather API error: ${response.status}`)
	}

	const data: WeatherData = await response.json()

	return (
		<div
			id='location-container'
			className='card col-span-1 row-span-1'
			{...props}
		>
			<Image src='/images/my-location.png' fill alt='My location' />

			<div className='details'>
				<div>
					<Clock />
					<div className='today'>
						<p>{data.name}</p>
						<small>{getDay()}</small>
					</div>
				</div>
				<p className='weather-temp'>{Math.floor(data.main.temp)}°</p>
			</div>
		</div>
	)
}
