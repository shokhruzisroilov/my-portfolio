import { v4 as uuidv4 } from 'uuid'
import eCommerse from './assets/images/e-commerse-image.jpg'
import countryInfo from './assets/images/country-info-image.jpg'
import todoApp from './assets/images/todo-app-image.jpg'
import owaBooks from './assets/images/owa-books-image.jpg'
import excellanceTeam from './assets/images/exellance-team.jpg'
import zummaPharma from './assets/images/zumma-pharma.jpg'

const ProjectCardData = [
	{
		id: uuidv4(),
		imgsrc: excellanceTeam,
		title: 'ExcelLanceTeam Website',
		text: 'ExcelLanceTeam my team website',
		view: 'https://excellance-team.vercel.app/',
		source: 'https://github.com/shokhruzisroilov/excellance-team.git',
	},
	{
		id: uuidv4(),
		imgsrc: eCommerse,
		title: 'OrginalUz',
		text: 'OrginalUz E-commerse website',
		view: 'https://orginal-uz-e-commerse.vercel.app/',
		source: 'https://github.com/shokhruzisroilov/OrginalUz_E-commerse.git',
	},
	{
		id: uuidv4(),
		imgsrc: countryInfo,
		title: 'Country Info',
		text: 'Information about countries and a site that works with api.',
		view: 'https://2-country-info.vercel.app/',
		source: 'https://github.com/shokhruzisroilov/CountryInfo.git',
	},
	{
		id: uuidv4(),
		imgsrc: todoApp,
		title: 'React Todo App',
		text: 'Beautiful and functional todo app',
		view: 'https://todo-app-project1.vercel.app/',
		source: 'https://github.com/shokhruzisroilov/TodoApp.git',
	},
	{
		id: uuidv4(),
		imgsrc: owaBooks,
		title: 'Open Web Academy Books Website',
		text: 'EmailAddress:eve.holt@reqres.in, Password: cityslicka',
		view: 'https://owa-books-react.vercel.app/',
		source: 'https://github.com/shokhruzisroilov/OwaBooks-react',
	},
	{
		id: uuidv4(),
		imgsrc: zummaPharma,
		title: 'Zumma Pharma dorixona websayti',
		text: 'Zumma  Pharma sayitining Frontend qismi.',
		view: 'https://zumma-pharma-site.netlify.app/',
		source: 'https://github.com/shokhruzisroilov/OwaBooks-react',
	},
]

export default ProjectCardData
