import './Home.scss'

import { Helmet } from 'react-helmet'
import HomeImage from '../components/homeImage/HomeImage'
import HomeTexts from '../components/homeTexts/HomeTexts'
import Social from '../components/social/Social'

function Home() {
	return (
		<>
			<Helmet>
				<title>Shohruz Isroilov | Frontend Developer</title>
				<meta
					name='description'
					content='React, HTML, CSS va JavaScript asosidagi portfolio. Amaliy loyihalar, aloqa va ish tajribasi.'
				/>
				<meta
					name='keywords'
					content='Frontend Developer, React, HTML, CSS, Portfolio, Shohruz Isroilov'
				/>
				<meta
					property='og:image'
					content='https://shokhruzisroilov.vercel.app/cover.jpg'
				/>
				<meta
					property='og:title'
					content='Shohruz Isroilov | Frontend Developer'
				/>
				<meta
					property='og:description'
					content='Portfolio sayt: React, Tailwind, HTML/CSS va JavaScript darslari'
				/>
				<meta property='og:url' content='https://shokhruzisroilov.vercel.app' />
				<meta property='og:type' content='website' />
			</Helmet>
			<div className='home'>
				<div className='home__container'>
					<Social />
					<HomeTexts />
					<HomeImage />
				</div>
			</div>
		</>
	)
}

export default Home
