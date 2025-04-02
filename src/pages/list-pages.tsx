import { Metadata } from 'minista'

export const metadata: Metadata = {
	title: 'List Pages',
	draft: false,
	listPages: true,
}

const PAGE_NAMES: { url: string; name: string }[] = [{ url: '', name: 'Главная' }]

export default () => {
	return (
		<>
			<ul>
				{PAGE_NAMES.map(({ url, name }, idx) => (
					<li key={idx}>
						<a href={`/${url}`} style={{ fontSize: '20px' }}>
							{name}
						</a>
					</li>
				))}
			</ul>
		</>
	)
}
