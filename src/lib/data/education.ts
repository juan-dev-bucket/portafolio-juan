import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Learn Node — Master Package',
		description: '',
		location: 'Online',
		logo: Assets.Unknown,
		name: '',
		organization: 'Wes Bos',
		period: { from: new Date(2018, 0, 1), to: new Date(2018, 5, 1) },
		shortDescription: '',
		slug: 'education-item',
		subjects: ['Nodejs', 'Algorithm', 'Clean Code', 'Javascript', 'English']
	},
	{
		degree: 'Ingeniero de Sistemas',
		description: '',
		location: 'Colombia',
		logo: Assets.Unknown,
		name: '',
		organization: 'Universidad de Antioquia',
		period: { to: new Date(2019, 11, 1) },
		shortDescription: '',
		slug: 'education-item-2',
		subjects: ['C', 'Java', 'C++' , 'Angular', 'Computer Architecture', 'Aplicaciones empresariales', 'Matematicas', 'Seguridad de la informacion', 'Algorithms and Data structures']
	},
	{
		degree: 'Máster en JavaScript, ECMAScript, Angular 9+, React, NodeJS',
		description: '',
		location: 'Colombia',
		logo: Assets.Unknown,
		name: '',
		organization: 'Udemy',
		period: { from: new Date(2023, 10, 1), to: new Date(2024, 1, 1) },
		shortDescription: '',
		slug: 'education-item-3',
		subjects: ['C', 'Java', 'C++' , 'Angular', 'Computer Architecture', 'Aplicaciones empresariales', 'Matematicas', 'Seguridad de la informacion', 'Algorithms and Data structures']
	}
];

export const title = 'Educación';
