import { promises as fs } from 'node:fs'
import path from 'node:path'
import {
	Project2ColsText,
	ProjectHeadline,
	ProjectImages,
} from '@/widgets/projects-page-details'
import { compileMDX } from 'next-mdx-remote/rsc'

const projectsDirectory = path.join(process.cwd(), 'src/content/projects')

export type ProjectMeta = {
	slug: string
	headerPreview: string
	headline: string
}

export async function getProjectBySlug(slug: string) {
	try {
		const filePath = path.join(projectsDirectory, `${slug}.mdx`)
		const fileContent = await fs.readFile(filePath, 'utf8')

		const { content, frontmatter } = await compileMDX<ProjectMeta>({
			source: fileContent,
			components: {
				ProjectHeadline,
				Project2ColsText,
				ProjectImages,
			},
			options: {
				parseFrontmatter: true,
			},
		})

		return {
			content,
			meta: frontmatter,
		}
	} catch (error) {
		console.error(`Error loading project ${slug}:`, error)
		return null
	}
}

export async function getAllProjectSlugs() {
	const files = await fs.readdir(projectsDirectory)

	return files
		.filter((file) => file.endsWith('.mdx'))
		.map((file) => file.split('.mdx')[0])
}
