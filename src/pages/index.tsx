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
				<LetterZ className="letter" />
				<LetterA className="letter" />
				<LetterR className="letter" />
				<LetterYA className="letter" />
				<LetterD className="letter" />
			</section>
		</>
	)
}
