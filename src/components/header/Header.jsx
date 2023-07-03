import './Header.scss'
import { NavLink } from 'react-router-dom'
import { FaBars, FaWindowClose } from 'react-icons/fa'
import { useState } from 'react'

function Header() {
	const [burger, setBurger] = useState(true)

	let clazz = 'nav-link'
	let activeClazz = 'nav-link-active'

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
		<header>
			<div className='header__container'>
				<div className='header__logo'>
					<h1>Shokhruz.</h1>
				</div>
				<nav>
					<ul className={burger ? 'ul' : 'ul active'}>
						<li>
							<NavLink
								to='/'
								className={({ isActive }) => (isActive ? activeClazz : clazz)}
								onClick={() => setBurger(!burger)}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/about'
								className={({ isActive }) => (isActive ? activeClazz : clazz)}
								onClick={() => setBurger(!burger)}
							>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/portfolio'
								className={({ isActive }) => (isActive ? activeClazz : clazz)}
								onClick={() => setBurger(!burger)}
							>
								Portfolio
							</NavLink>
						</li>
						{/* <li>
							<NavLink
								to='/resume'
								className={({ isActive }) => (isActive ? activeClazz : clazz)}
								onClick={() => setBurger(!burger)}
							>
								Resume
							</NavLink>
						</li> */}
						<li>
							<NavLink
								to='/blog'
								className={({ isActive }) => (isActive ? activeClazz : clazz)}
								onClick={() => setBurger(!burger)}
							>
								Blog
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/contact'
								className={({ isActive }) => (isActive ? activeClazz : clazz)}
								onClick={() => setBurger(!burger)}
							>
								Contact
							</NavLink>
						</li>
						<li>
							<button className='link-button' onClick={onButtonClick}>
								Download CV
							</button>
						</li>
					</ul>
					{burger ? (
						<FaBars className='burger' onClick={() => setBurger(!burger)} />
					) : (
						<FaWindowClose
							className='close'
							onClick={() => setBurger(!burger)}
						/>
					)}
				</nav>
			</div>
		</header>
	)
}

export default Header
