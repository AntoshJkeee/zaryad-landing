import gsap from 'gsap'

export const AnimateLogo = () => {
	animateLetters()
	animateGlitch()
}

const animateLetters = () => {
	const letters = document.querySelectorAll('.letter')
	const section = document.querySelector('section')

	const tl = gsap.timeline();
	tl
		.from(letters, {
			scaleY: window.innerHeight / 20,  // Динамическое растяжение
			// yPercent: 100,
			stagger: 0.3,
			duration: 1.0, // was 2.5
			ease: 'power2.inOut',
			onComplete: () => {
				setTimeout(() => {
					clearGlitch()
				}, 2000)
			},
		})
		.from(section, {
			marginBlock: 40,
			duration: 1,
			ease: 'power2.inOut',
		})
}

const clearGlitch = () => {
	const glitchBlocks = document.querySelectorAll('.glitch')
	const letters = document.querySelectorAll('.letter')

	glitchBlocks.forEach(block => {
		if (block.classList.contains('glitch-bottom')) {
			block.remove()
		}
		block.classList.remove('glitch')
		block.classList.remove('glitch-top')
	})

	letters.forEach(letter => {
		letter.classList.remove('glitch-police')
	})
}

const animateGlitch = () => {
	const glitchBlock = document.querySelector('.glitch')
	if (glitchBlock) {
		const glitchBlockClone = glitchBlock.cloneNode(true) as HTMLElement
		glitchBlock.classList.add('glitch-top')
		glitchBlockClone.classList.add('glitch-bottom')
		glitchBlock?.parentNode?.appendChild(glitchBlockClone)
	}

	const letters = document.querySelectorAll('.letter')
	letters.forEach(letter => {
		letter.classList.add('glitch-police')
	})

	var tl = gsap.timeline({repeat: 1, repeatDelay: 2});

	tl.to('.glitch', {
		opacity: 1,
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
