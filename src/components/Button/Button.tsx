import type { ButtonProps } from './ButtonProps'
import cn from 'classnames'
import './Button.scss'

export const Button = (props: ButtonProps) => {
	const { className, href, type = 'button', target, mode = '', label, isLabelHidden = false, extraAttrs } = props

	const isLink = href !== undefined
	const Component = isLink ? 'a' : 'button'
	const linkProps = { href, target }
	const buttonProps = { type }
	const specificProps = isLink ? linkProps : buttonProps
	const title = isLabelHidden ? label : undefined

	return (
		<Component
			className={cn(className, 'button', {
				[`button__${mode}`]: mode,
			})}
			{...specificProps}
			{...extraAttrs}
			title={title}
			aria-label={title}
		>
			{!isLabelHidden && <span className="button__label">{label}</span>}
		</Component>
	)
}
