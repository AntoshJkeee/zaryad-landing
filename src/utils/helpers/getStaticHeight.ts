export const getStaticHeight = () => {
	const header = document.querySelector('header') as HTMLElement
	const footer = document.querySelector('footer') as HTMLElement
	const asideContacts = document.querySelector('.aside-contacts') as HTMLElement
	const asideCompany = document.querySelector('.aside-company') as HTMLElement
	const headerHeight = header.offsetHeight
	const footerHeight = footer.offsetHeight
	const asideContactsWidth = asideContacts.offsetWidth
	const asideCompanyWidth = asideCompany.offsetWidth
	document.documentElement.style.setProperty('--header-height', `${headerHeight}px`)
	document.documentElement.style.setProperty('--footer-height', `${footerHeight}px`)
	document.documentElement.style.setProperty('--aside-contacts-width', `${asideContactsWidth}px`)
	document.documentElement.style.setProperty('--aside-company-width', `${asideCompanyWidth}px`)
}
