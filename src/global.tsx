import '@/styles'
import { Head } from 'minista'
import type { PageProps } from 'minista'
import { Header, Footer } from '@/layouts'
import { AsideCompany } from '@/layouts/AsideCompany/AsideCompany'
import { AsideContacts } from '@/layouts/AsideContacts/AsideContacts'

export default (props: PageProps) => {
	const { children, title, listPages } = props

	return (
		<>
			<Head
				htmlAttributes={{
					lang: 'ru',
				}}
			>
				<title>Zaryad | {title}</title>
				<script src="/src/main.ts" type="module" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
			</Head>

			{!listPages ? (
				<>
					<Header />
					<main>
						<AsideCompany />
						{children}
						<AsideContacts />
					</main>
					<Footer />
				</>
			) : (
				<>{children}</>
			)}
		</>
	)
}
