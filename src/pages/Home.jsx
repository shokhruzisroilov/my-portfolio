import React from 'react'
import "./Home.scss"

import HomeTexts from '../components/homeTexts/HomeTexts'
import HomeImage from '../components/homeImage/HomeImage'
import Social from '../components/social/Social'

function Home() {
	return (
		<div className='home'>
			<div className="home__container">
				<Social />
				<HomeTexts />
				<HomeImage />
			</div>
		</div>
	)
}

export default Home