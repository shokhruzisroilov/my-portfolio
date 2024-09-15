import './Portfolio.scss'
import { NavLink } from 'react-router-dom'
import Projects from '../components/projects/Projects'
import ProjectCardData from '../data'
import { useState } from 'react'

function Portfolio() {
	const [filter, setFilter] = useState('all')

	const handleFilter = filter => {
		setFilter(filter)
	}

	const filteredDataFunc = (data, filter) => {
		if (filter === 'all') {
			return data
		}
		return data.filter(item => item.filter === filter)
	}

	const filteredData = filteredDataFunc(ProjectCardData, filter)

	return (
		<section className='portfolio__section'>
			<div className='portfolio__container'>
				<div className='portfolio__header'>
					<h3>Portfolio</h3>
				</div>
				<ul className='filter'>
					<li>
						<NavLink
							className={filter === 'all' ? 'active-link' : 'nav-link'}
							onClick={() => handleFilter('all')}
						>
							All
						</NavLink>
					</li>
					<li>
						<NavLink
							className={filter === 'landing' ? 'active-link' : 'nav-link'}
							onClick={() => handleFilter('landing')}
						>
							Landing Pages
						</NavLink>
					</li>
					<li>
						<NavLink
							className={filter === 'react' ? 'active-link' : 'nav-link'}
							onClick={() => handleFilter('react')}
						>
							React Apps
						</NavLink>
					</li>
					<li>
						<NavLink
							className={filter === 'other' ? 'active-link' : 'nav-link'}
							onClick={() => handleFilter('other')}
						>
							Other
						</NavLink>
					</li>
				</ul>
				<div className='projects__content'>
					{filteredData.map(item => (
						<Projects
							key={item.id}
							imgsrc={item.imgsrc}
							title={item.title}
							text={item.text}
							view={item.view}
							source={item.source}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Portfolio
