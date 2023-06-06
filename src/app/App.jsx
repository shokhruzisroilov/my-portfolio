import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layouts from '../layouts/Layouts'
import Home from '../pages/Home'
import About from '../pages/About'
import Portfolio from '../pages/Portfolio'
import Resume from '../pages/Resume'
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
					<Route path='/resume' element={<Resume />} />
					<Route path='/blog' element={<Blog />} />
					<Route path='/contact' element={<Contact />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
