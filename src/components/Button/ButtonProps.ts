export interface ButtonProps {
	className?: string
	href?: string
	type?: 'button' | 'submit'
	target?: string
	mode?: string
	label?: string
	isLabelHidden?: boolean
	extraAttrs?: { [key: string]: string }
}
