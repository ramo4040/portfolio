'use client'

import React, { useEffect, useRef, type ComponentProps, type FC } from 'react'
import './style.css'
import { useHover } from 'usehooks-ts'
import { ToolTipProvider, useTooltip } from './context'

type TooltipDirection = 'top' | 'bottom' | 'left' | 'right'

type TooltipProps = ComponentProps<'div'> & {
	direction?: TooltipDirection
}
type TooltipTriggerProps = ComponentProps<'div'>
type TooltipContentProps = ComponentProps<'div'>

const Tooltip: FC<TooltipProps> = ({
	children,
	direction = 'top',
	...props
}) => {
	return (
		<ToolTipProvider>
			<div y-tooltip='' data-side={direction} {...props}>
				{children}
			</div>
		</ToolTipProvider>
	)
}

const TooltipTrigger: FC<TooltipTriggerProps> = ({ children, ...props }) => {
	const containerRef = useRef<HTMLDivElement>({} as HTMLDivElement)
	const isHover = useHover(containerRef)
	const { handleToggleTooltip, idTooltip, isOpen } = useTooltip()

	useEffect(() => {
		if (isOpen && containerRef.current) {
			const trigger = containerRef.current
			const container = trigger.closest('[y-tooltip]')
			// tooltip content
			const tooltip = container?.querySelector(
				"[role='tooltip']",
			) as HTMLElement

			if (!container || !trigger || !tooltip) return

			const containerRect = container.getBoundingClientRect()
			const triggerRect = trigger.getBoundingClientRect()
			const tooltipRect = tooltip.getBoundingClientRect()
			const direction = (container.getAttribute('data-side') ||
				'top') as TooltipDirection
			const offset = 8 // Offset for the tooltip position

			let top = 0
			let left = 0

			switch (direction) {
				case 'top':
					top = -tooltipRect.height - offset
					left = (triggerRect.width - tooltipRect.width) / 2
					break
				case 'bottom':
					top = triggerRect.height + offset
					left = (triggerRect.width - tooltipRect.width) / 2
					break

				case 'left':
					top = (triggerRect.height - tooltipRect.height) / 2
					left = -tooltipRect.width - offset
					break
				case 'right':
					top = (triggerRect.height - tooltipRect.height) / 2
					left = triggerRect.width + offset
					break
				default:
					break
			}

			const viewportWidth = window.innerWidth
			const viewportHeight = window.innerHeight
			const containerLeft = containerRect.left
			const containerTop = containerRect.top

			// Adjust position if tooltip goes out of viewport

			// from the left
			if (containerLeft + left < 0) {
				left = -containerLeft + offset
			}
			// from the right
			if (containerLeft + left + tooltipRect.width > viewportWidth) {
				left = viewportWidth - containerLeft - tooltipRect.width - offset * 3 // *3 for scrollbar
			}

			// from the top
			if (
				containerTop + top < 0 &&
				direction === 'top' &&
				containerTop + triggerRect.height + tooltipRect.height + offset <
					viewportHeight
			) {
				top = triggerRect.height + offset
			}

			tooltip.style.transform = `translate(${left}px, ${top}px)`
		}
	}, [isOpen])

	useEffect(() => {
		handleToggleTooltip()
	}, [isHover])

	return (
		<div
			ref={containerRef}
			tabIndex={0}
			y-tooltip-trigger=''
			aria-describedby={idTooltip}
			{...props}
		>
			{children}
		</div>
	)
}

const TooltipContent: FC<TooltipContentProps> = ({ children, ...props }) => {
	const { isOpen, idTooltip } = useTooltip()

	return (
		<div role='tooltip' aria-hidden={!isOpen} id={idTooltip} {...props}>
			{children}
		</div>
	)
}

export { Tooltip, TooltipTrigger, TooltipContent }
