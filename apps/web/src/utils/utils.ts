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
