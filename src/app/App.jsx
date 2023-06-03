import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layouts from '../layouts/Layouts'
import Home from '../pages/Home'
import About from '../pages/About'
import Portfolio from '../pages/Portfolio'
import Services from '../pages/Services'
import Resume from '../pages/Resume'
import Client from '../pages/Client'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'


function App() {

  return (
		<>
			<Routes>
				<Route path='/' element={<Layouts />}>
					<Route index element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/portfolio' element={<Portfolio />} />
					<Route path='/services' element={<Services />} />
					<Route path='/resume' element={<Resume />} />
					<Route path='/client' element={<Client />} />
					<Route path='/blog' element={<Blog />} />
					<Route path='/contact' element={<Contact />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
