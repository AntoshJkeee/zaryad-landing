export const getHeaderHeight = () => {
	const header = document.querySelector('header') as HTMLElement
	const headerHeight = header.offsetHeight
	document.documentElement.style.setProperty('--header-height', `${headerHeight}px`)
}
