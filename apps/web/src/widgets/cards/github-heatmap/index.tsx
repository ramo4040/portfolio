'use client'

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components'
import './style.css'
import GitHubCalendar from 'react-github-calendar'

export const GithubHeatmap = () => {
	return (
		<div id='github-heatmap'>
			<GitHubCalendar
				username='ramo4040'
				hideColorLegend
				hideTotalCount
				theme={{
					dark: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
				}}
			/>
		</div>
	)
}
