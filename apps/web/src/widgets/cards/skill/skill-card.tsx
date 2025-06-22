import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/tooltip/tooltip'
import { DefaultCard } from '../default/default-card'
import './style.css'

export const SkillsCard = () => {
	return (
		<DefaultCard className='col-span-1 row-span-1'>
			<DefaultCard.Badge>Stack</DefaultCard.Badge>
			<Tooltip direction='top'>
				<TooltipTrigger>hiiii</TooltipTrigger>
				<TooltipContent>content</TooltipContent>
			</Tooltip>
		</DefaultCard>
	)
}
