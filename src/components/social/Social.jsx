import React from 'react'
import './Social.scss'

import { FaLinkedin, FaGithub,FaTelegram } from 'react-icons/fa'

function Social() {
	return (
		<div className='social'>
			<div className='icons'>
				<FaLinkedin />
			</div>
			<div className='icons'>
				<FaGithub />
			</div>
			<div className='icons'>
				<FaTelegram />
			</div>
		</div>
	)
}

export default Social