import React from 'react'
import './HomeTexts.scss'

function HomeTexts() {
	return (
		<div className='home__text'>
			{/* <div className='background__round'></div> */}
			<h2>welcome My Portfolio</h2>
			<div className='heading'>
				Hello, i‘m Shokhruz <span>Frontend</span> Developer.
			</div>
			<h3>
				Conveniently customize proactive web services for leveraged without
				continualliery aggregate fricctionle ou wellies richard.
			</h3>
			<div className='buttons'>
				<button className='btn btn-left'>Hire Me</button>
				<button className='btn btn-right'>Download CV</button>
			</div>
		</div>
	)
}

export default HomeTexts