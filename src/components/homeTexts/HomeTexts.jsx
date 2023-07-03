import './HomeTexts.scss'
import { Link } from 'react-router-dom'

function HomeTexts() {
	const onButtonClick = () => {
		fetch('SamplePDF.pdf').then(response => {
			response.blob().then(blob => {
				const fileURL = window.URL.createObjectURL(blob)
				let alink = document.createElement('a')
				alink.href = fileURL
				alink.download = 'Resume.pdf'
				alink.click()
			})
		})
	}

	return (
		<div className='home__text'>
			<h2>welcome My Portfolio</h2>
			<div className='heading'>
				Hello, i‘m Shokhruz <span>Frontend</span> Developer.
			</div>
			<h3>
				I'm a curious frontend developer, eager to learn new things, I can work
				with a backend developer, I'm also interested in design.
			</h3>
			<div className='buttons'>
				<Link to='/contact' className='btn btn-left'>
					Hire Me
				</Link>
				<button className='btn btn-right' onClick={onButtonClick}>
					Download CV
				</button>
			</div>
		</div>
	)
}

export default HomeTexts
