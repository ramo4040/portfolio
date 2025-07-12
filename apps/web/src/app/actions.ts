'use server'

import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const contactFormSchema = z.object({
	name: z
		.string()
		.min(2, 'Name must be at least 2 characters')
		.max(50, 'Name must be less than 50 characters')
		.trim(),
	email: z.string().email('Please enter a valid email address'),
	message: z
		.string()
		.min(10, 'Message must be at least 10 characters')
		.max(5000, 'Message must be less than 5000 characters')
		.trim(),
})

type FormState = {
	success: boolean
	error: string
	errors: Record<string, string[]>
}

export const submitContactForm = async (
	prevState: FormState,
	formData: FormData,
): Promise<FormState> => {
	const rawData = {
		name: formData.get('name') as string,
		email: formData.get('email') as string,
		message: formData.get('message') as string,
	}

	// Validate the data with Zod
	const validationResult = contactFormSchema.safeParse(rawData)

	if (!validationResult.success) {
		return {
			success: false,
			error: 'Validation failed',
			errors: validationResult.error.flatten().fieldErrors,
		}
	}

	const { name, email, message } = validationResult.data

	try {
		await resend.emails.send({
			from: 'onboarding@resend.dev',
			to: 'rouane.yasseer@gmail.com',
			replyTo: email,
			subject: `Portfolio: New contact from ${name}`,
			html: `
                <h2>New Contact Form Submission</h2>
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Message:</b> ${message}</p>
            `,
		})

		return { success: true, error: '', errors: {} }
	} catch (error) {
		return { success: false, error: 'Failed to send email', errors: {} }
	}
}
