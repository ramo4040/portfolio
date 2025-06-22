import type { ComponentProps, FC } from 'react'
import './style.css'
import { Badge } from '@/components/badge/badge'
import { cn } from '@sglara/cn'

type DefaultCardProps = ComponentProps<'div'> & {
	withBadge?: boolean
}

const DefaultCard: FC<DefaultCardProps> & { Badge: FC<ComponentProps<'div'>> } =
	({ className, children, withBadge, ...props }) => {
		return (
			<div id='default-card' className={cn(className, 'card')} {...props}>
				{children}
			</div>
		)
	}

DefaultCard.Badge = ({ children, ...props }: ComponentProps<'div'>) => {
	return (
		<div id='card-badge' {...props}>
			<Badge>{children}</Badge>
		</div>
	)
}

export { DefaultCard }
