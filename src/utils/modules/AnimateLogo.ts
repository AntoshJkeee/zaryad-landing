import gsap from 'gsap'
import { ShowNavs } from './ShowNavs'

export const AnimateLogo = () => {
	const letters = document.querySelectorAll('.letter')
	const section = document.querySelector('section')

	const tl = gsap.timeline();
	tl
		.from(letters, {
			scaleY: window.innerHeight / 100,  // Динамическое растяжение
			// yPercent: 100,
			stagger: 0.3,
			duration: 1.0, // was 2.5
			ease: 'power2.inOut',
			onComplete: () => {
				letters.forEach((letter) => {
					letter.classList.add('glitch-class')
				})
			},
		})
		.from(section, {
			marginBlock: 40,
			duration: 1,
			ease: 'power2.inOut',
		})
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
}

const animateAsideCompany = () => {
	gsap.to('.aside-company', {
		left: 0,
		duration,
		ease: 'power2.inOut',
	})
}

const animateFooter = () => {
	gsap.to('.footer', {
		bottom: 0,
		duration,
		ease: 'power2.inOut',
	})
}