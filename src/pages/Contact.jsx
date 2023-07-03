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
						<span>
							<input type='text' placeholder='Your Name' />
							<input type='email' className='email' placeholder='Your Email' />
						</span>
						<textarea placeholder='Your Message'></textarea>
						<button>Submit message</button>
					</form>
				</div>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d143785.82281391387!2d66.42634024874242!3d39.98110681319496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDU0JzA3LjQiTiA2NsKwMzInMzAuNCJF!5e0!3m2!1suz!2s!4v1687692688186!5m2!1suz!2s'
					allowfullscreen=''
					loading='lazy'
					referrerpolicy='no-referrer-when-downgrade'
				></iframe>
			</div>
		</section>
	)
}

export default Contact
