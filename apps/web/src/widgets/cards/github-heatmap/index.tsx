'use client'

import './style.css'
import type { GitHubApiResponse, HeatmapDataPoint } from '@/types'
import { ReactGithubHeatmap } from '@ahmaddzidnii/react-github-heatmap'
import { useEffect, useState } from 'react'

export const GithubHeatmap = () => {
	const [data, setData] = useState<HeatmapDataPoint[]>([])
	const [loading, setLoading] = useState<boolean>(true)

	const endDate = new Date()
	const startDate = new Date(endDate)
	startDate.setDate(endDate.getDate() - 52 * 7)

	useEffect(() => {
		const fetchContributions = async () => {
			const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN
			const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME

			if (!token || !username) {
				console.error('Missing GitHub credentials in environment variables')
				setLoading(false)
				return
			}

			// Calculate date range for the last 52 weeks
			const endDate = new Date()
			const startDate = new Date(endDate)
			startDate.setDate(endDate.getDate() - 52 * 7)

			// Ensure proper date handling
			const fromDate = startDate
			const toDate = endDate

			const query = `
        query($username: String!, $from: DateTime!, $to: DateTime!) {
          user(login: $username) {
            contributionsCollection(from: $from, to: $to) {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    contributionCount
                    date
                    contributionLevel
                  }
                }
              }
            }
          }
        }
      `

			const variables = {
				username: username,
				from: fromDate.toISOString(),
				to: toDate.toISOString(),
			}

			try {
				const response = await fetch('https://api.github.com/graphql', {
					method: 'POST',
					headers: {
						Authorization: `Bearer ${token}`,
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						query,
						variables,
					}),
				})

				const result: GitHubApiResponse = await response.json()

				if (result.errors) {
					console.error('GraphQL Errors:', result.errors)
					setLoading(false)
					return
				}

				// Transform GitHub data to the format expected by ReactGithubHeatmap
				const contributionData: HeatmapDataPoint[] = []
				const weeks =
					result.data.user.contributionsCollection.contributionCalendar.weeks

				// Extract actual start and end dates from the GitHub response
				let actualStartDate = ''
				let actualEndDate = ''

				if (weeks.length > 0) {
					// Get the first date from the first week
					const firstWeek = weeks[0]
					if (firstWeek.contributionDays.length > 0) {
						actualStartDate = firstWeek.contributionDays[0].date
					}

					// Get the last date from the last week
					const lastWeek = weeks[weeks.length - 1]
					if (lastWeek.contributionDays.length > 0) {
						actualEndDate =
							lastWeek.contributionDays[lastWeek.contributionDays.length - 1]
								.date
					}
				}

				for (const week of weeks) {
					for (const day of week.contributionDays) {
						contributionData.push({
							date: day.date,
							contributions: day.contributionCount,
						})
					}
				}

				setData(contributionData)
				setLoading(false)
			} catch (error) {
				console.error('Error fetching contributions:', error)
				setLoading(false)
			}
		}

		fetchContributions()
	}, [])

	if (loading) {
		return <div>Loading contributions...</div>
	}

	return (
		<div id='github-heatmap'>
			<ReactGithubHeatmap data={data} />
		</div>
	)
}
