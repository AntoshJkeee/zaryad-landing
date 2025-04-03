import gsap from 'gsap'

export const ShowNavs = () => {
	const header = document.querySelector('header')

	gsap.fromTo(header, {
		opacity: 0,
		y: -100,
	}, {
		opacity: 1,
		y: 0,
		duration: 1,
		ease: 'power2.inOut',
	})
}
