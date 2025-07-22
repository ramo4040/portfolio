import { cn } from '@sglara/cn'
import type { ComponentProps, FC, ReactNode } from 'react'
import './style.css'

export type ButtonVariant = 'primary'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ComponentProps<'button'> {
	variant?: ButtonVariant
	size?: ButtonSize
	isLoading?: boolean
	children: ReactNode
}

export const Button: FC<ButtonProps> = ({
	variant = 'primary',
	size = 'md',
	isLoading = false,
	className,
	disabled,
	children,
	...props
}) => {
	const isDisabled = disabled || isLoading

	return (
		<button
			className={cn(
				'btn',
				`btn-${variant}`,
				`btn-${size}`,
				{
					'btn-loading': isLoading,
					'btn-disabled': isDisabled,
				},
				className,
			)}
			disabled={isDisabled}
			{...props}
		>
			{isLoading ? (
				<>
					<span className='btn-spinner' />
					{children}
				</>
			) : (
				children
			)}
		</button>
	)
}
