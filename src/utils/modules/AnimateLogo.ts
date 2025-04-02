import gsap from 'gsap'

export const AnimateLogo = () => {
	const letters = document.querySelectorAll('.letter')

	gsap.from(letters, {
		scaleY: 13,
		scaleX: 13,
		stagger: 0.3,
		duration: 2.5,
		ease: 'power2.inOut',
		onComplete: () => {
			letters.forEach((letter) => {
				letter.classList.add('glitch-class')
			})
		},
	})
}
