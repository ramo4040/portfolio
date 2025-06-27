import { cn } from '@sglara/cn'
import './style.css'
import type { ComponentProps } from 'react'

type GridLayoutProps = ComponentProps<'div'> & {
	rows: number
	cols: number
}

export const GridLayout = ({
	children,
	rows,
	cols,
	className,
	...props
}: GridLayoutProps) => {
	return (
		<section
			className={cn('grid-layout container', className)}
			style={
				{
					'--grid-rows': rows,
					'--grid-cols': cols,
				} as React.CSSProperties
			}
			{...props}
		>
			{children}
		</section>
	)
}
