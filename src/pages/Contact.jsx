import './Contact.scss'

import { FaPhone, FaEnvelope, FaMapPin } from 'react-icons/fa'
import { useForm, ValidationError } from '@formspree/react'
import { useState } from 'react'

function Modal({ message, onClose }) {
	return (
		<div className='modal'>
			<div className='modal-content'>
				<p>{message}</p>
				<button onClick={onClose}>Close</button>
			</div>
		</div>
	)
}

function Contact() {
	const [state, handleSubmit] = useForm('xkgwapre')
	const [showModal, setShowModal] = useState(false)
	if (state.succeeded) {
		return (
			<Modal
				message='Your message has been sent successfully!'
				onClose={() => {
					setShowModal(false)
					window.location.reload()
				}}
			/>
		)
	}
	return (
		<section className='contact__section'>
			<div className='contact__container'>
				<div className='contact'>Contact</div>
				<div className='contact__form'>
					<div className='contact__info'>
						<article>
							<div className='icons'>
								<FaPhone />
							</div>
							<span>
								<h4>Phone number</h4>
								<p>+998940080473</p>
							</span>
						</article>
						<article>
							<div className='icons'>
								<FaEnvelope />
							</div>
							<span>
								<h4>Email Address</h4>
								<p>isroilovshokhruz@gmail.com</p>
							</span>
						</article>
						<article>
							<div className='icons'>
								<FaMapPin />
							</div>
							<span>
								<h4>Home address</h4>
								<p>Ishikhan, Samarkand</p>
							</span>
						</article>
					</div>
					<form className='form__message' onSubmit={handleSubmit}>
						<label htmlFor='email'>Send Message</label>
						<input id='name' type='text' name='name' placeholder='Your Name' />
						<ValidationError prefix='Name' field='name' errors={state.errors} />
						<input
							id='email'
							type='email'
							name='email'
							placeholder='Your Email'
						/>
						<ValidationError
							prefix='Email'
							field='email'
							errors={state.errors}
						/>
						<textarea id='message' name='message' placeholder='Your Message' />
						<ValidationError
							prefix='Message'
							field='message'
							errors={state.errors}
						/>
						<button type='submit' disabled={state.submitting}>
							Submit
						</button>
					</form>
				</div>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d143785.82281391387!2d66.42634024874242!3d39.98110681319496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDU0JzA3LjQiTiA2NsKwMzInMzAuNCJF!5e0!3m2!1suz!2s!4v1687692688186!5m2!1suz!2s'
					allowFullScreen
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'
				></iframe>
			</div>
		</section>
	)
}

export default Contact
