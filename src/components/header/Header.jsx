import "./Header.scss"
import { Link, NavLink } from 'react-router-dom'

function Header() {
	let clazz = 'nav-link'
	let activeClazz = 'nav-link-active'


	return (
		<header>
			<div className='header__container'>
				<div className='header__logo'>
					<h1>Shokhruz.</h1>
				</div>
				<nav>
					<ul>
						<li>
							<NavLink
								to='/'
								className={({ isActive }) => (isActive ? activeClazz : clazz)}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/about'
								className={({ isActive }) => (isActive ? activeClazz : clazz)}
							>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/portfolio'
								className={({ isActive }) => (isActive ? activeClazz : clazz)}
							>
								Portfolio
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/services'
								className={({ isActive }) => (isActive ? activeClazz : clazz)}
							>
								Services
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/resume'
								className={({ isActive }) => (isActive ? activeClazz : clazz)}
							>
								Resume
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/client'
								className={({ isActive }) => (isActive ? activeClazz : clazz)}
							>
								Client
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/blog'
								className={({ isActive }) => (isActive ? activeClazz : clazz)}
							>
								Blog
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/contact'
								className={({ isActive }) => (isActive ? activeClazz : clazz)}
							>
								Contact
							</NavLink>
						</li>
						<li>
							<Link to='/#' className='link-button'>
								<button>Downlood CV</button>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header