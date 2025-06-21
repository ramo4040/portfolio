import type { ComponentProps, FC } from 'react'
import './style.css'
import { Badge } from '@/components/badge/badge'

type DefaultCardProps = ComponentProps<'div'> & {}

const DefaultCard: FC<DefaultCardProps> & { Badge: FC<ComponentProps<'div'>> } =
	({ className, children, ...props }) => {
		return (
			<div id='default-card' className={`${className} card`} {...props}>
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
