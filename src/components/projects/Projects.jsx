import "./Projects.scss"
import { useState } from "react"

import { Link } from 'react-router-dom'

function Projects({imgsrc, title, text, view, sourse}) {
	const [views, setView] = useState(false)

	const titleStr = () => {
		if (text.length >= 32) {
			return text.slice(0, 32) + '...'
		} else {
			return text
		}
	}
	return (
		<div className='projects' onMouseEnter={() => setView(true)}>
			<img src={imgsrc} alt='portfolio image' />
			<div className='span'>
				<h4>{title}</h4>
				<h5>{titleStr()}</h5>
			</div>
			<div className='view__sourse'>
				<Link to={view} className={!views ? 'btn btn-view' : 'btn btn-view-active'}>
					view
				</Link>
				<Link to={sourse} className={!views ? 'btn btn-view' : 'btn btn-view-active'}>
					sourse
				</Link>
			</div>
		</div>
	)
}

export default Projects