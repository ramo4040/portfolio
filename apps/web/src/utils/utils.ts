export const getDay = () => {
	const now = new Date()

	// Get weekday name
	const weekday = now.toLocaleString('en-US', { weekday: 'long' })

	// Get day number
	const day = now.getDate()

	// Get ordinal suffix (st, nd, rd, th)
	function getOrdinal(n: number) {
		if (n > 3 && n < 21) return `${n}th`
		switch (n % 10) {
			case 1:
				return `${n}st`
			case 2:
				return `${n}nd`
			case 3:
				return `${n}rd`
			default:
				return `${n}th`
		}
	}

	const formatted = `${weekday} ${getOrdinal(day)}`
	return formatted
}

export const get52WeeksDateRange = ({ endDate }: { endDate: Date }) => {
	// Go back approximately one year (52 weeks)
	const startDate = new Date(endDate)
	startDate.setDate(endDate.getDate() - 52 * 7)

	// Adjust to the nearest Sunday if not already a Sunday
	while (startDate.getDay() !== 0) {
		startDate.setDate(startDate.getDate() - 1)
	}

	const strStartDate = `${startDate.getFullYear()}-${String(
		startDate.getMonth() + 1,
	).padStart(2, '0')}-${String(startDate.getDate()).padStart(2, '0')}`

	const strEndDate = `${endDate.getFullYear()}-${String(
		endDate.getMonth() + 1,
	).padStart(2, '0')}-${String(endDate.getDate()).padStart(2, '0')}`

	return { startDate: strStartDate, endDate: strEndDate }
}
