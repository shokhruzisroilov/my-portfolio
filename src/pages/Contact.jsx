import React from 'react'
import './Contact.scss'

import { FaPhone, FaEnvelope, FaMapPin } from 'react-icons/fa'

function Contact() {
	return (
		<section className='contact__section'>
			<div className='contact__container'>
				<div className='contact'>Contact</div>
				<div className='contact__forma'>
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
								<p>shokhruzisroilov@gmail.com</p>
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
					<form className='form__message'>
						<label>Send Message</label> <br />
						<input type='text' placeholder='Your Name' />
						<input type='email' className='email' placeholder='Your Email' />
						<br />
						<textarea placeholder='Your Message'></textarea> <br />
						<button>Submit message</button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Contact