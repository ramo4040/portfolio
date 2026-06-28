'use client'

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components'
import './style.css'
import { GitHubCalendar } from 'react-github-calendar'

export const GithubHeatmap = () => {
	return (
		<div id='github-heatmap'>
			<GitHubCalendar
				username='ramo4040'
				showTotalCount={false}
				showColorLegend={false}
				theme={{
					dark: [
						'var(--color-surface-variant)',
						'color-mix(in oklch, var(--color-success) 10%, var(--color-success-container))',
						'color-mix(in oklch, var(--color-success) 55%, var(--color-success-container))',
						'color-mix(in oklch, var(--color-success) 75%, var(--color-success-container))',
						'color-mix(in oklch, var(--color-success) 90%, var(--color-success-container))',
					],
				}}
			/>
		</div>
	)
}
