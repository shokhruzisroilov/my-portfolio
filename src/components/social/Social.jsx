import React from 'react'
import './Social.scss'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaTelegram } from 'react-icons/fa'

function Social() {
	return (
		<div className='social'>
			<div className='icons'>
				<Link to='https://www.linkedin.com/in/shohruz-dev/'>
					<FaLinkedin />
				</Link>
			</div>
			<div className='icons'>
				<Link to='https://github.com/shokhruzisroilov'>
					<FaGithub />
				</Link>
			</div>
			<div className='icons'>
				<Link to='https://t.me/shohruz_isroilov'>
					<FaTelegram />
				</Link>
			</div>
		</div>
	)
}

export default Social
