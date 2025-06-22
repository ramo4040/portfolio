import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/tooltip/tooltip'
import { DefaultCard } from '../default/default-card'
import './style.css'
import { list } from './list'

export const SkillsCard = () => {
	return (
		<DefaultCard className='col-span-1 row-span-1'>
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
