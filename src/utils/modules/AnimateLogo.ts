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
			duration: 2.5,
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
		.to(["header", "aside-contacts", "aside-company", "footer"], {
			top: 0,
			duration: 1,
      		ease: 'power2.inOut',
      		stagger: 0.3
		});
}
