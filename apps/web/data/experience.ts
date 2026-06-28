import type { ExperienceType } from '@/types'
import { CodeXmlIcon } from '@hugeicons/core-free-icons'

export const experiences: ExperienceType[] = [
	{
		company: {
			name: 'EMSI',
			logo: '/images/company/emsi.jpg',
		},
		at: {
			country: 'Morocco',
			city: 'Casablanca',
		},
		mode: 'hybrid',
		positions: [
			{
				role: {
					icon: CodeXmlIcon,
					title: 'Full-Stack Developer',
					type: 'internship',
				},
				period: {
					startDate: '2026-04-14',
					endDate: '2026-06-27',
				},
				techTags: [
					'TypeScript',
					'Angular',
					'Nest.js',
					'Java',
					'Socket.IO',
					'Postgresql',
					'DSA',
					'Agile',
					'Teamwork',
					'Research',
					'Constraint-programming',
				],
				achievements: [
					'Designed an end-to-end automatic timetable generation workflow, from data preparation to solver execution, diagnostics, history tracking, and validation.',
					'Modeled real institutional constraints covering groups, courses, rooms, teachers, availability, campuses, sessions, and time slots.',
					'Applied constraint programming concepts to understand and solve complex timetable scheduling problems.',
					'Studied and used local search techniques, including Hill Climbing, Great Deluge, neighbor selection, and conflict-based decision logic.',
					'Improved planning reliability through feasibility checks, structured diagnostics, fallback handling, and human-review support.',
				],
			},
		],
	},
]
