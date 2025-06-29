import { v4 as uuidv4 } from 'uuid'
import dreamsShop from './assets/images/dreams-shop.jpg'
import countryInfo from './assets/images/country-info-image.jpg'
import todoApp from './assets/images/todo-app-image.jpg'
import owaBooks from './assets/images/owa-books-image.jpg'
import excellanceTeam from './assets/images/exellance-team.jpg'
import zummaPharma from './assets/images/zumma-pharma.jpg'
import invest from './assets/images/invest.jpg'
import bahorMenu from './assets/images/bahor-menu.jpg'
import kamronbekPortfolio from './assets/images/kamronbek-portfolio.jpg'

const ProjectCardData = [
	{
		id: uuidv4(),
		imgsrc: kamronbekPortfolio,
		title: "Kamronbek's Portfolio Website",
		text: 'A clean, responsive portfolio website for a UI/UX designer, built from a Figma design',
		view: 'https://kamronbek.design',
		source: 'Private',
		filter: 'react',
	},
	{
		id: uuidv4(),
		imgsrc: invest,
		title: 'InvestIQ',
		text: 'InvestIQ – A project that helps to improve your economic knowledge!',
		view: 'https://investiq.uz',
		source:
			'https://github.com/shokhruzisroilov/farrukhbeks-article-website.git',
		filter: 'fullstack',
	},
	{
		id: uuidv4(),
		imgsrc: dreamsShop,
		title: 'Dreams Shop',
		text: 'An online market for Dreams Shop',
		view: 'https://dreams-shop.vercel.app/',
		source: 'https://github.com/shokhruzisroilov/dream-shop-e-commerse.git',
		filter: 'react',
	},
	{
		id: uuidv4(),
		imgsrc: bahorMenu,
		title: 'Bahor Restaurant Menu Website',
		text: 'A beautiful menu website for Bahor Restaurant',
		view: 'https://bahor-foods-menu-site.vercel.app/',
		source: 'https://github.com/shokhruzisroilov/bahor-foods-menu-site.git',
		filter: 'fullstack',
	},
	{
		id: uuidv4(),
		imgsrc: excellanceTeam,
		title: 'ExcelLance Team Website',
		text: 'A team website for ExcelLance, showcasing the team and their work',
		view: 'https://excellance-team.vercel.app/',
		source: 'https://github.com/shokhruzisroilov/excellance-team.git',
		filter: 'landing',
	},
	{
		id: uuidv4(),
		imgsrc: owaBooks,
		title: 'Owa Books Website',
		text: 'A CRUD application for Owa Books with user authentication',
		view: 'https://owa-books-eta.vercel.app/sign-in',
		source: 'https://github.com/shokhruzisroilov/owa-books.git',
		filter: 'react',
	},
	{
		id: uuidv4(),
		imgsrc: countryInfo,
		title: 'Country Info',
		text: 'A website that provides information about countries, with API integration',
		view: 'https://2-country-info.vercel.app/',
		source: 'https://github.com/shokhruzisroilov/CountryInfo.git',
		filter: 'react',
	},
	{
		id: uuidv4(),
		imgsrc: todoApp,
		title: 'React Todo App',
		text: 'A beautiful and functional todo application built with React',
		view: 'https://todo-app-project1.vercel.app/',
		source: 'https://github.com/shokhruzisroilov/TodoApp.git',
		filter: 'react',
	},
	{
		id: uuidv4(),
		imgsrc: zummaPharma,
		title: 'Zumma Pharma Website',
		text: 'A professional website for Zumma Pharma',
		view: 'https://zumma-pharma-site.netlify.app/',
		source: 'https://github.com/shokhruzisroilov/OwaBooks-react',
		filter: 'landing',
	},
]

export default ProjectCardData
