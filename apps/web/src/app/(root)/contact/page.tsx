'use client'

import { Logo } from '@/widgets/logo/logo'
import './style.css'
import { submitContactForm } from '@/app/actions'
import { Button } from '@/components'
import { Footer } from '@/widgets/footer/footer'
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'

const SubmitButton = () => {
	const { pending } = useFormStatus()

	return (
		<Button isLoading={pending}>
			{pending ? 'Sending...' : 'Send Message'}
		</Button>
	)
}

const ContactPage = () => {
	const [state, formAction] = useActionState(submitContactForm, {
		success: false,
		error: '',
		errors: {},
	})

	return (
		<main id='contact-page' className='mobile-first-container'>
			<Logo />

			<section className='sections-container'>
				<header>
					<h1 className='headline'>Let's start a project together 🤝🏻</h1>
				</header>

				{state.success && (
					<div className='status-message success'>
						Your message has been sent successfully! I'll get back to you soon.
					</div>
				)}

				{state.error && !state.success && (
					<div className='status-message error'>{state.error}</div>
				)}

				<form className='contact-form' action={formAction}>
					<div>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							id='name'
							name='name'
							className='input'
							required
						/>
						{state.errors?.name && (
							<span className='error-text'>{state.errors.name[0]}</span>
						)}
					</div>

					<div>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							id='email'
							name='email'
							className='input'
							required
						/>
						{state.errors?.email && (
							<span className='error-text'>{state.errors.email[0]}</span>
						)}
					</div>

					<div>
						<label htmlFor='message'>Message</label>
						<textarea
							id='message'
							name='message'
							maxLength={5000}
							placeholder='Text Message...'
							className='input full-h'
							required
						/>
						{state.errors?.message && (
							<span className='error-text'>{state.errors.message[0]}</span>
						)}
					</div>
					<SubmitButton />
				</form>

				<Footer isContactPage />
			</section>
		</main>
	)
}

export default ContactPage
