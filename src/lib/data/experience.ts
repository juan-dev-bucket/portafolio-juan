import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'software-developer',
		company: 'Habla Creativo S. A.',
		description: 'Desarrollar y mantener aplicaciones web usando el patron MVC. Hacer e integrar aplicaciones con Facebook y Google APIs integrate applications with Facebook and Google APIs.',
		contract: ContractType.FullTime,
		type: 'Desarrollador de Software',
		location: 'Medellin Antioquia',
		period: { from: new Date(2017, 4, 1), to: new Date(2018, 11, 1) },
		skills: getSkills('ts', 'js', 'css', 'html', 'reactjs'),
		name: 'Desarrollador de Software',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Aumentar la productividad del área de marketing usando aplicaciones web'
	},
	{
		slug: 'fullstack-developer',
		company: 'Softlutions S. A',
		description: 'Crear estrategias digitales que ayuden a mejorar el rendimiento de las compañias que contraten',
		contract: ContractType.FullTime,
		type: 'Fullstack Developer',
		location: 'Tarazá Antioquia',
		period: { from: new Date(2018, 0, 1), to: new Date(2018, 5, 1) },
		skills: getSkills('svelte', 'ts', 'sass', 'css', 'html', 'js', 'nodejs', 'laravel', 'python', 'fastify', 'expressjs', 'rabbitmq'),
		name: 'Fullstack Developer',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Despliegue de microservicios using kafka o rabbitmq para la comunicacion entre servicios'
	},
	{
		slug: 'manager',
		company: ' ESE Hospital San Antonio de Tarazá',
		description: 'Manejar, actualizar y mantener el sistema del hospital, mejorar la infraestructura de red y manejar la base de datos.',
		contract: ContractType.Contract,
		type: 'Administrador de Area de sistemas',
		location: 'Tarazá Antioquia',
		period: { from: new Date(2022, 8, 1), to: new Date(2022, 11, 1) },
		skills: getSkills('mysql', 'html', 'java', 'js', 'windows server'),
		name: 'Administrador',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Proveer mantemiento a sistemas de computo.'
	},
	{
		slug: 'system-engineer',
		company: 'Rotorr - Ministerio del interior',
		description: 'Crear modelos para conmutar y guardar informacion en los modelos para relaciones entre tablas.',
		contract: ContractType.Contract,
		type: 'Desarrollador de software, Ingeniero de sistemas',
		location: 'Tarazá Antioquia',
		period: { from: new Date(2022, 8, 1), to: new Date(2022, 11, 1) },
		skills: getSkills('powerbi', 'aws', 'js', 'postgresql'),
		name: 'Ingeniero de Sistemas',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Manejar equipos para ejecutar actividades previamentes dispuestas por el objeto contractual.'
	}
];

export const title = 'Experiencia';
