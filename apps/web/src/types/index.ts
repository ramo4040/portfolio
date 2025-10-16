import type { ComponentType } from 'react'

export type Project = {
	id: string
	theme: string
	color?: string
	title?: string
	description?: string
	imageSrc: string
	imageBannerSrc: string
	imageAlt: string
	href: string
}

// --------------------------------

export type ProjectDetailsTechStackType = {
	title: string
	icon: ComponentType
}[]

export type ProjectDetailsMediaType = {
	type: 'images'
	direction: 'col' | 'row'
	content: {
		isVideo?: boolean
		alt: string
		src: string
	}[]
}

export type ProjectDetails2ColsTextType = {
	type: '2-cols-text'
	hasTitle?: boolean
	content: string[]
}

// --------------------------------
// GitHub API Types

export type GitHubContributionLevel =
	| 'NONE'
	| 'FIRST_QUARTILE'
	| 'SECOND_QUARTILE'
	| 'THIRD_QUARTILE'
	| 'FOURTH_QUARTILE'

export type GitHubContributionDay = {
	contributionCount: number
	date: string
	contributionLevel: GitHubContributionLevel
}

export type GitHubWeek = {
	contributionDays: GitHubContributionDay[]
}

export type GitHubContributionCalendar = {
	totalContributions: number
	weeks: GitHubWeek[]
}

export type GitHubContributionsCollection = {
	contributionCalendar: GitHubContributionCalendar
}

export type GitHubUser = {
	contributionsCollection: GitHubContributionsCollection
}

export type GitHubApiResponse = {
	data: {
		user: GitHubUser
	}
	errors?: Array<{ message: string }>
}

// React GitHub Heatmap Types
export type HeatmapDataPoint = {
	date: string
	contributions: number
}
