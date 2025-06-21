import './style.css'
import type { ComponentProps, FC } from 'react'

type BadgeProps = ComponentProps<'div'> & {}

export const Badge: FC<BadgeProps> = ({ children }) => {
	return <div id='badge'>{children}</div>
}
