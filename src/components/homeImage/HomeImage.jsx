import React from 'react'
import './HomeImage.scss'
import PortfolioImage from "../../assets/portfolio-imges.jpg"
import htmlIcon from "../../assets/html-icon.svg"
import cssIcon from "../../assets/css-icon.svg"
import javaScritpIcon from '../../assets/javascript-programming-language-icon.svg'
import reactIcon from "../../assets/react-js-icon.svg"

function HomeImage() {
	return (
		<div className='home__image'>
			<div className='home__icons'>
				<div className='icons icon1'>
					<img src={htmlIcon} alt='html' />
				</div>
				<div className='icons icon2'>
					<img src={cssIcon} alt='html' />
				</div>
			</div>
			<div className='portflio__imges'>
				<img src={PortfolioImage} alt='portfolio image' />
			</div>
			<div className='home__icons'>
				<div className='icons icon3'>
					<img src={javaScritpIcon} alt='html' />
				</div>
				<div className='icons icon4'>
					<img src={reactIcon} alt='html' />
				</div>
			</div>
		</div>
	)
}

export default HomeImage