import React from 'react'
import './Social.scss'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaTelegram } from 'react-icons/fa'

function Social() {
	return (
		<div className='social'>
			<div className='icons'>
				<Link
					to='https://www.linkedin.com/in/shokhruzisroilov/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FaLinkedin />
				</Link>
			</div>
			<div className='icons'>
				<Link
					to='https://github.com/shokhruzisroilov'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FaGithub />
				</Link>
			</div>
			<div className='icons'>
				<Link
					to='https://t.me/shohruz_isroilov'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FaTelegram />
				</Link>
			</div>
		</div>
	)
}

export default Social
