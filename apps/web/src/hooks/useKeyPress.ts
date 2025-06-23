import { useCallback, useEffect } from 'react'

interface UseKeyPressOptions {
	preventDefault?: boolean
	stopPropagation?: boolean
	target?: HTMLElement | Document | Window
}

export const useKeyPress = (
	key: string,
	handler: () => void,
	options: UseKeyPressOptions = {},
) => {
	const {
		preventDefault = false,
		stopPropagation = false,
		target = globalThis.document,
	} = options

	const handleKeyPress = useCallback(
		(event: Event) => {
			const keyboardEvent = event as KeyboardEvent

			if (keyboardEvent.key === key) {
				if (preventDefault) {
					keyboardEvent.preventDefault()
				}
				if (stopPropagation) {
					keyboardEvent.stopPropagation()
				}
				handler()
			}
		},
		[key],
	)

	useEffect(() => {
		target.addEventListener('keydown', handleKeyPress)

		return () => {
			target.removeEventListener('keydown', handleKeyPress)
		}
	}, [handleKeyPress])
}
