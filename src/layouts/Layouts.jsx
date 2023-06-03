import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'

function Layouts() {
	return (
		<div className='conainet'>
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}

export default Layouts