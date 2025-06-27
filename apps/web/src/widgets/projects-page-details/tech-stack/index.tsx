import type { ComponentProps, FC } from 'react'
import './style.css'
import { ToolTipProvider } from '@/components/tooltip/context'
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/tooltip/tooltip'
import type { ProjectDetailsTechStackType } from '@/types'

type Props = ComponentProps<'div'> & {
	techs: ProjectDetailsTechStackType
}

export const ProjectTechStack: FC<Props> = ({ techs }) => {
	return (
		<div id='project-tech-stack-container'>
			<p>Tech Stack</p>
			<div className='techs'>
				{techs.map((e) => {
					return (
						<div key={e.title} className='tech-badge'>
							<Tooltip>
								<TooltipTrigger>
									<e.icon />
								</TooltipTrigger>
								<TooltipContent>{e.title}</TooltipContent>
							</Tooltip>
						</div>
					)
				})}
			</div>
		</div>
	)
}
