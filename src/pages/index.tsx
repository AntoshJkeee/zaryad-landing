import { Metadata } from 'minista'
import { ReactComponent as LetterZ } from './letter-z.svg'
import { ReactComponent as LetterA } from './letter-a.svg'
import { ReactComponent as LetterR } from './letter-r.svg'
import { ReactComponent as LetterYA } from './letter-ya.svg'
import { ReactComponent as LetterD } from './letter-d.svg'

export const metadata: Metadata = {
	title: 'Главная',
}

export default () => {
	return (
		<>
			<section>
				<div className="glitch glitch-top">
					<LetterZ className="letter glitch-police" />
					<LetterA className="letter glitch-police" />
					<LetterR className="letter glitch-police" />
					<LetterYA className="letter glitch-police" />
					<LetterD className="letter glitch-police" />
				</div>
				<div className="glitch glitch-bottom">
					<LetterZ className="letter glitch-police" />
					<LetterA className="letter glitch-police" />
					<LetterR className="letter glitch-police" />
					<LetterYA className="letter glitch-police" />
					<LetterD className="letter glitch-police" />
				</div>
			</section>
		</>
	)
}
