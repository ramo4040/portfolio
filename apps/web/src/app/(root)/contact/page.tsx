import { Logo } from '@/widgets/logo/logo'
import './style.css'
import { Footer } from '@/widgets/footer/footer'

const ContactPage = () => {
	return (
		<main id='contact-page' className='mobile-first-container'>
			<Logo />

			<section className='sections-container'>
				<header>
					<h1 className='headline'>Let's start a project together 🤝🏻</h1>
				</header>

				<form className='contact-form'>
					<div>
						<label htmlFor='name'>Name</label>
						<input type='text' id='name' name='name' className='input' />
					</div>
					<div>
						<label htmlFor='email'>Email</label>
						<input type='email' id='email' name='email' className='input' />
					</div>
					<div>
						<label htmlFor='message'>Message</label>
						<textarea
							id='message'
							name='message'
							maxLength={5000}
							placeholder='Example Text'
							className='input full-h'
						/>
					</div>
					<input type='submit' className='submit-button' value='Submit' />
				</form>

				<Footer isContactPage />
			</section>
		</main>
	)
}

export default ContactPage
