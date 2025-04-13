import gsap from 'gsap'

export const AnimateNav = () => {
	animateHeader()
	animateAsideContacts()
	animateAsideCompany()
	animateFooter()
}

const duration = 2.7
const animateHeader = () => {
	gsap.to('.header', {
		top: 0,
		duration,
		ease: 'power2.inOut',
	})
}

const animateAsideContacts = () => {
	gsap.to('.aside-contacts', {
		right: 0,
		duration,
		ease: 'power2.inOut',
	})

    document.querySelector('.aside-contacts')?.addEventListener('click', () => {
        const logo = document.querySelector('.logo')
        gsap.to(logo, {
            scaleY: window.innerHeight / 100,
            duration: 1,
            width: '50%',
            position: 'relative',
            ease: "power2.out",
        })

        const content = document.querySelector('.company-contacts')
        gsap.to(content, {
            display: 'flex',
            duration: 1,
            ease: "power2.out",
        })
    })
}

const animateAsideCompany = () => {
	gsap.to('.aside-company', {
		left: 0,
		duration,
		ease: 'power2.inOut',
	})

    document.querySelector('.aside-company')?.addEventListener('click', () => {
        const logo = document.querySelector('.logo')
        gsap.to(logo, {
            scaleY: window.innerHeight / 100,
            duration: 1,
            width: '50%',
            position: 'relative',
            ease: "power2.out",
        })
        
        const content = document.querySelector('.company-content')
        gsap.to(content, {
            display: 'flex',
            duration: 1,
            ease: "power2.out",
        })
    })
}

const animateFooter = () => {
	gsap.to('.footer', {
		bottom: 0,
		duration,
		ease: 'power2.inOut',
	})
}