import type { ComponentProps, FC } from 'react'

type SideButtonProps = ComponentProps<'button'> & {
	isVisible: boolean
	isLeft?: boolean
}
export const SideButtonHOC: FC<SideButtonProps> = ({
	children,
	isVisible,
	isLeft = false,
	...props
}) => {
	return (
		<button
			{...props}
			aria-hidden={!isVisible}
			data-side={isLeft ? 'left' : 'right'}
			data-visible={isVisible}
			tabIndex={isVisible ? props.tabIndex : -1}
			type='button'
		>
			{children}
		</button>
	)
}
