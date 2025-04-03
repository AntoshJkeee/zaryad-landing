import { getStaticHeight } from '@/utils/helpers'
import { AnimateLogo } from '@/utils/modules/AnimateLogo'

document.addEventListener('DOMContentLoaded', () => {
	getStaticHeight()
	AnimateLogo()

	// if (document.querySelector('[data-js-overlay-menu]')) {
	// 	import('@/utils/modules/OverlayMenu').then(({ OverlayMenu }) => {
	// 		new OverlayMenu()
	// 	})
	// }
})
