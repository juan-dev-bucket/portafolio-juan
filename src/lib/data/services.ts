import Assets from './assets';
import { getSkills } from './skills';
import type { Service } from '../types';

export const items: Array<Service> = [
	{
        name: 'Webdesign',
		description:
			'Ya sea que necesites un sitio web corporativo, una tienda online o una página personal, este servicio se encarga de construir una plataforma atractiva, funcional y optimizada para tus necesidades específicas..',
		logo: Assets.WebDevelopment,
        links: [{ to: '', label: 'GitHub' }],
		title: 'Web design',
		skills: getSkills('angular', 'ts', 'tailwind'),
		type: 'Website Template'
	},
	{
        name: 'Web Development',
		description:
			'Creamos sitios web personalizados que se adaptan a las necesidades específicas de tu negocio, asegurando una experiencia única tanto para ti como para tus usuarios.',
		links: [{ to: '', label: 'GitHub' }],
		logo: Assets.WebDevelopment,
		title: 'Web development',
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Website Template'
	},
	{
        name: 'Backend - Frontend Development',
		description:
			'Integramos APIs y herramientas de terceros para enriquecer la funcionalidad de tu sitio web, como sistemas de pago, CRM, marketing automatizado, entre otros.',
		links: [{ to: '', label: 'GitHub' }],
		logo: Assets.Unknown,
		title: 'Slick Portfolio',
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Website Template'
	},
	{
        name: 'Ecommerce Store',
		description:
			'Desarrollamos soluciones completas para el comercio electrónico, con integración de pasarelas de pago, gestión de inventarios, seguridad y optimización para aumentar tus ventas.',
		links: [{ to: '', label: 'GitHub' }],
		logo: Assets.Ecommerce,
		title: 'Ecommerce Store',
		skills: getSkills('nodejs', 'rabbitmq', 'css', 'js'),
		type: 'Website Template'
	},
	{
        name: 'Automatizacion de procesos',
		description:
			'Optimizamos los procesos empresariales mediante la automatización, mejorando la productividad y reduciendo errores.',
		links: [{ to: '', label: 'GitHub' }],
		logo: Assets.Unknown,
		title: 'Automatizacion de procesos',
		skills: getSkills('java', 'javascript', 'python', 'kafka'),
		type: 'Website Template'
	}
];

export const title = 'Servicios';
