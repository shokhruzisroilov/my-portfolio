import './Portfolio.scss'
import { NavLink } from 'react-router-dom'
import Projects from '../components/projects/Projects'
import ProjectCardData from '../data'

function Portfolio() {
	return (
		<section className='portfolio__section'>
			<div className='portfolio__container'>
				<div className='portfoilo'>
					<h3>Portfolio</h3>
				</div>
				{/* <ul className='filter'>
					<li>
						<NavLink className='nav-link'>All</NavLink>
					</li>
					<li>
						<NavLink className='nav-link'>Website</NavLink>
					</li>
					<li>
						<NavLink className='nav-link'>React app</NavLink>
					</li>
					<li>
						<NavLink className='nav-link'>Project</NavLink>
					</li>
				</ul> */}
				<div className='projects__content'>
					{ProjectCardData &&
						ProjectCardData.map(item => {
							return (
								<Projects
									key={item.id}
									imgsrc={item.imgsrc}
									title={item.title}
									text={item.text}
									view={item.view}
									source={item.source}
								/>
							)
						})}
				</div>
			</div>
		</section>
	)
}

export default Portfolio
