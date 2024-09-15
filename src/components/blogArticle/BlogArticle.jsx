import './BlogArticle.scss'
import { Link } from 'react-router-dom'

function BlogArticle({ id, imgsrc, title, view, name }) {
	return (
		<article>
			<img src={imgsrc} alt='blogs icons' className='blog__img' />
			<h3>{title}</h3>
			<Link
				className='view'
				to={view}
				target='_blank'
				rel='noopener noreferrer'
			>
				{name}
			</Link>
		</article>
	)
}

export default BlogArticle
