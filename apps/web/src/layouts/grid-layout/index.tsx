import { cn } from '@sglara/cn'
import './style.css'
import type { ComponentProps } from 'react'

type GridLayoutProps = ComponentProps<'div'>
export const GridLayout = ({
	children,
	className,
	...props
}: GridLayoutProps) => {
	return (
		<section className={cn('grid-layout container', className)} {...props}>
			{children}
		</section>
	)
}
