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
	let weatherData: WeatherData | null = null

	const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY

	if (!API_KEY) {
		throw new Error('Weather API key is not configured')
	}

	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=Casablanca&appid=${API_KEY}&units=metric`,
		{
			next: { revalidate: 600 },
		},
	)

	if (!response.ok) {
		throw new Error(`Weather API error: ${response.status}`)
	}

	weatherData = await response.json()

	return (
		<div id='location-container' {...props}>
			<Image
				src='/images/me/my-location.png'
				fill
				alt='My location'
				style={{ objectFit: 'cover' }}
			/>

			<Image
				src='/images/me/cloud.png'
				width={150}
				height={150}
				alt='Location cloud'
				className='cloud'
			/>

			<div className='details'>
				<div>
					<Clock />
					<div className='today'>
						{response.ok && <p>{weatherData?.name}</p>}
						<small>{getDay()}</small>
					</div>
				</div>
				{response.ok && (
					<p className='weather-temp'>
						{Math.floor(weatherData?.main?.temp || 0)}°
					</p>
				)}
			</div>
		</div>
	)
}
