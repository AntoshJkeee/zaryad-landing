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
				setTimeout(() => {
					letters.forEach(letter => {
						letter.classList.remove('glitch-police')
					})
				}, 1000)
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
		animateGlitch()
}

const animateGlitch = () => {
	var tl = gsap.timeline({repeat: 1, repeatDelay: 2});

	tl.to('.glitch', {
		duration: 0.1,
		skewX: 70,
		ease: 'power4.inOut'
	})
	.to('.glitch', {
		duration: 0.04,
		skewX: 0,
		ease: 'power4.inOut'
	})
	.to('.glitch', {
		duration: 0.04,
		opacity: 0
	})
	.to('.glitch', {
		duration: 0.04,
		opacity: 1
	})
	.to('.glitch', {
		duration: 0.04,
		x: -20
	})
	.to('.glitch', {
		duration: 0.04,
		x: 0
	})
	.add("split", 0)
	.to('.glitch-top', {
		duration: 0.5,
		x: -60,
		ease: 'power4.inOut'
	}, 'split')
	.to('.glitch-bottom', {
		duration: 0.5,
		x: 60,
		ease: 'power4.inOut'
	}, 'split')
	.to('.glitch', {
		duration: 0.08,
	}, 'split')
	
	.to('#txt', {
		duration: 0,
		scale: 1.1
	}, 'split')
	.to('#txt', {
		duration: 0,
		scale: 1
	}, "+=0.02")
	
	.to('.glitch', {
		duration: 0.08,
		textShadow: 0,
	}, "+=0.09")
	.to('.glitch', {
		duration: 0.03,
	}, 'split')
	.to('.glitch', {
		duration: 0.03,
		textShadow: 0,
	}, "+=0.01")
	
	.to('.glitch-top', {
		duration: 0.2,
		x: 0,
		ease: 'power4.inOut'
	})
	.to('.glitch-bottom', {
		duration: 0.2,
		x: 0,
		ease: 'power4.inOut'
	})
	.to('.glitch', {
		duration: 0.02,
		scaleY: 1.1,
		ease: 'power4.inOut'
	})
	.to('.glitch', {
		duration: 0.04,
		scaleY: 1,
		ease: 'power4.inOut'
	})
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