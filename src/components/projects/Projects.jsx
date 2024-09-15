import './Projects.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Projects({ imgsrc, title, text, view, source }) {
	const [isHovered, setIsHovered] = useState(false)

	const titleStr = () => {
		return text.length >= 38 ? text.slice(0, 38) + '...' : text
	}

	return (
		<div
			className='projects'
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<img src={imgsrc} alt='portfolio image' />
			<div className='span'>
				<h4>{title}</h4>
				<h5>{titleStr()}</h5>
			</div>
			<div
				className={`view__sourse ${isHovered ? 'view__sourse--active' : ''}`}
			>
				<Link
					to={view}
					className='btn'
					target='_blank'
					rel='noopener noreferrer'
				>
					View
				</Link>
				<Link
					to={source}
					className='btn'
					target='_blank'
					rel='noopener noreferrer'
				>
					Source
				</Link>
			</div>
		</div>
	)
}

export default Projects
