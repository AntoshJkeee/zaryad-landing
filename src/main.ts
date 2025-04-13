import { getStaticHeight } from '@/utils/helpers'
import { AnimateLogo } from '@/utils/modules/AnimateLogo'
import { AnimateLoader } from '@/utils/modules/AnimateLoader'
import { AnimateNav } from '@/utils/modules/AnimateNav'


document.addEventListener('DOMContentLoaded', () => {
	getStaticHeight()
	AnimateLoader()
	// AnimateLogo()
	// AnimateNav()

	// if (document.querySelector('[data-js-overlay-menu]')) {
	// 	import('@/utils/modules/OverlayMenu').then(({ OverlayMenu }) => {
	// 		new OverlayMenu()
	// 	})
	// }
})
