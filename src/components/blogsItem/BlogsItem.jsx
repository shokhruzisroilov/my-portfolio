import React from 'react'
import './BlogsItem.scss'

import telegram from '../../assets/blog-telegram.jpg'
import { FaComment, FaEye, FaUser } from 'react-icons/fa'

function BlogsItem() {
	return (
		<article>
			<img src={telegram} alt='blogs icons' className='blog__img' />
			<div className='view'>
				<div>
					<FaUser className='icons' />
					<p>Admin</p>
				</div>
				<div>
					<FaComment className='icons' />
					<p>20</p>
				</div>
				<div>
					<FaEye className='icons' />
					<p>230+ view</p>
				</div>
			</div>
			<h3>Bankruptcy law the federal law</h3>
		</article>
	)
}

export default BlogsItem