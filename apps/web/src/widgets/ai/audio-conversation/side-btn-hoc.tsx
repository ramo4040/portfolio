import { AnimatePresence, type HTMLMotionProps, motion } from 'motion/react'
import type { FC } from 'react'

type SideButtonProps = HTMLMotionProps<'button'> & {
	isVisible: boolean
	isLeft?: boolean
}
export const SideButtonHOC: FC<SideButtonProps> = ({
	children,
	isVisible,
	isLeft = false,
	...props
}) => {
	const xPosition = isLeft ? -50 : 50

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.button
					initial={{ opacity: 0, x: xPosition }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ scale: 0, x: xPosition }}
					transition={{
						type: 'spring',
						stiffness: 100,
						damping: 10,
						mass: 0.8,
					}}
					{...props}
				>
					{children}
				</motion.button>
			)}
		</AnimatePresence>
	)
}
