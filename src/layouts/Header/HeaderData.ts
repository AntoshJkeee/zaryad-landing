export interface HeaderNavigation {
	link: string
	hasMenu: boolean
	href?: string
	subMenu?: string[]
}

export const headerData: HeaderNavigation[] = [
	{
		link: 'Подбор масла',
		hasMenu: false,
		href: '/',
	},
	{
		link: 'Продукты',
		hasMenu: false,
		href: '/products',
	},
	{
		link: 'Наш опыт',
		hasMenu: true,
		subMenu: [
			'Лабораторные тесты',
			'Технологии',
			'Обучающие видео',
			'Допуски и рекомендации',
			'Информационные материалы',
			'Материалы для скачивания',
		],
	},
	{
		link: 'Статьи',
		hasMenu: false,
		href: '/articles',
	},
	{
		link: 'О компании',
		hasMenu: true,
		subMenu: ['Контроль качества', 'Мероприятия', 'Контакты', 'Защита от подделок', 'Сотрудничество'],
	},
	{
		link: 'Автоспорт',
		hasMenu: false,
		href: '/autosport',
	},
]
