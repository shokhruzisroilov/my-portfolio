import React from 'react'
import './About.scss'
import aboutImage from ".././assets/portfolio-imges.jpg"
import AboutInfo from '../components/aboutInfo/AboutInfo'

function About() {
	return (
		<div className='about'>
			<div className="about__container">
				<div className="about__image">
					<img src={aboutImage} alt="About image" />
				</div>
				<AboutInfo />
			</div>
		</div>
	)
}

export default About