export const getStaticHeight = () => {
	const header = document.querySelector('header') as HTMLElement
	const footer = document.querySelector('footer') as HTMLElement
	const headerHeight = header.offsetHeight
	const footerHeight = footer.offsetHeight
	document.documentElement.style.setProperty('--header-height', `${headerHeight}px`)
	document.documentElement.style.setProperty('--footer-height', `${footerHeight}px`)
}
