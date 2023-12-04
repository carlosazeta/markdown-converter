import { Link } from 'react-router-dom'

function Header() {
	return (
		<nav className='header-nav'>
			<ul>
				<li>
					<Link to='/'>Markdown to text </Link>
				</li>
				<li>
					<Link to='/htmltomd'>HTML to Markdown </Link>
				</li>
			</ul>
		</nav>
	)
}

export default Header
