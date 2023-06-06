import React from 'react'
import './Blog.scss'
import BlogsItem from '../components/blogsItem/BlogsItem'

function Blog() {
	return (
		<div className='blog__section'>
			<div className='blog__container'>
				<div className='blog'>Blog Post</div>
				<div className='all__blogs'>
					<BlogsItem />
					<BlogsItem />
					<BlogsItem />
				</div>
				<div className='subscribe__section'>
					<div className='subscribe__container'>
						<div className='text'>
							<h3>Subscribe Now</h3>
							<h2>Get My Newsletter</h2>
							<p>Get latest news, updates, tips and trics in your inbox</p>
						</div>
						<div className='form'>
							<input type='email' placeholder='Enter your Email' />
							<button>Subscribe</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Blog