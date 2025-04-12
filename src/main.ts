import { getStaticHeight } from '@/utils/helpers'
// import { AnimateLogo } from '@/utils/modules/AnimateLogo'
import { AnimateLoader } from '@/utils/modules/AnimateLoader'

document.addEventListener('DOMContentLoaded', () => {
	getStaticHeight()
	AnimateLoader()
	// AnimateLogo()

	// if (document.querySelector('[data-js-overlay-menu]')) {
	// 	import('@/utils/modules/OverlayMenu').then(({ OverlayMenu }) => {
	// 		new OverlayMenu()
	// 	})
	// }
})
