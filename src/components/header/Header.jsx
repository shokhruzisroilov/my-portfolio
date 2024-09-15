import './Header.scss'
import { NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { useState } from 'react'
import ExampleDoc from '../../public/MyCV.pdf'

function Header() {
	const [burger, setBurger] = useState(true)

	let clazz = 'nav-link'
	let activeClazz = 'nav-link-active'

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
							{/* <a href={ExampleDoc} download='MyExampleDoc' target='_blank'>
								<Button>My Example Doc</Button>
							</a> */}
							<a href={ExampleDoc} download='Shohruz Isroilov' target='_blank'>
								<button className='link-button'>Download CV</button>
							</a>
						</li>
					</ul>
					{burger ? (
						<FaBars className='burger' onClick={() => setBurger(!burger)} />
					) : (
						<IoMdClose className='close' onClick={() => setBurger(!burger)} />
					)}
				</nav>
			</div>
		</header>
	)
}

export default Header
