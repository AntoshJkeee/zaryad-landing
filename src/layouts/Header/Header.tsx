import './Header.scss'

export const Header = () => {
	return (
		<header className="header">
			<nav className="header__nav">
				<ul className="header__nav-list">
					<li>
						<a href="#">Zaryad</a>
					</li>
					<li>
						<a href="#">Menu</a>
					</li>
					<li>
						<a href="#">Contact Us</a>
					</li>
				</ul>
			</nav>
			<div className="loader"></div>
		</header>
	)
}
