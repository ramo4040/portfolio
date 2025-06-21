'use client'

import { useEffect, useRef } from 'react'

export const Clock = () => {
	const clockRef = useRef<null | HTMLDivElement>(null)

	useEffect(() => {
		if (clockRef.current) {
			const deg = 360
			const now = new Date()
			const hours = now.getHours()
			const minutes = now.getMinutes()

			const minuteDeg = minutes * (deg / 60)
			const hourDeg = (hours % 12) * (deg / 12) //We use % 12 to convert 24-hour time to 12-hour format.

			clockRef.current.style.setProperty('--minute-rotation', `${minuteDeg}deg`)
			clockRef.current.style.setProperty('--hour-rotation', `${hourDeg}deg`)
		}
	}, [clockRef.current])

	return (
		<div className='clock' ref={clockRef}>
			<div className='clock_center' />
			<div className='clock_minute' />
			<div className='clock_hour' />
		</div>
	)
}
