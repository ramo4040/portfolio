'use client'

import React, {
	useEffect,
	type ComponentProps,
	type FC,
	type PropsWithChildren,
} from 'react'
import './style.css'
import { useHover } from '@uidotdev/usehooks'
import { ToolTipProvider, useTooltip } from './context'

type TooltipProps = ComponentProps<'div'> & {
	direction?: 'top' | 'bottom' | 'left' | 'right'
}

const Tooltip: FC<TooltipProps> = ({ children, direction = 'top' }) => {
	return (
		<ToolTipProvider>
			<div y-tooltip='' data-side={direction}>
				{children}
			</div>
		</ToolTipProvider>
	)
}

const TooltipTrigger: FC<PropsWithChildren> = ({ children }) => {
	const [ref, hovering] = useHover()
	const { handleToggleTooltip } = useTooltip()

	useEffect(() => {
		handleToggleTooltip()
	}, [hovering])

	return (
		<div ref={ref} y-tooltip-trigger='' aria-describedby='t-description'>
			{children}
		</div>
	)
}

const TooltipContent: FC<PropsWithChildren> = ({ children }) => {
	const { isOpen } = useTooltip()

	return (
		<div role='tooltip' aria-hidden={isOpen} id='t-description'>
			{children}
		</div>
	)
}

export { Tooltip, TooltipTrigger, TooltipContent }
