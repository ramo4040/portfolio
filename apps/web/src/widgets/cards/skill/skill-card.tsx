import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/tooltip/tooltip'
import { DefaultCard } from '../default/default-card'
import './style.css'
import type { ComponentProps, FC } from 'react'
import { list } from './list'

type Props = ComponentProps<'div'>

export const SkillsCard: FC<Props> = () => {
	return (
		<DefaultCard className='skills-grid col-span-1 row-span-1'>
			<DefaultCard.Badge>Stack</DefaultCard.Badge>
			<div id='skills-container'>
				{list.map((e) => {
					return (
						<Tooltip key={e.title} direction='top'>
							<TooltipTrigger>
								<div className='icon'>
									<e.icon />
								</div>
							</TooltipTrigger>
							<TooltipContent>{e.title}</TooltipContent>
						</Tooltip>
					)
				})}
			</div>
		</DefaultCard>
	)
}
