import type { Color } from './utils/colors';

export enum Platform {
	GitHub = 'github',
	StackOverflow = 'stackoverflow',
	Twitter = 'twitter',
	Linkedin = 'linkedin',
	Email = 'email',
	Facebook = 'facebook',
	Youtube = 'youtube',
	Whatsapp = 'whatsapp'
}

export type Icon = `i-${string}-${string}`;

export enum ContractType {
	FullTime = 'Tiempo Completo',
	PartTime = 'Part-time',
	SelfEmployed = 'Self-employed',
	Freelance = 'Freelance',
	Contract = 'Contrato',
	Internship = 'Internship'
}

export type Asset = string | { light: string; dark: string };

export interface Item<S extends string = string> {
	slug: S;
	name: string;
	logo: Asset;
	shortDescription: string;
	description: string;
	screenshots?: Array<{ src: string; label: string }>;
}

export interface ItemLight {
	name: string;
	logo: Asset;
	description: string;
}

export interface Link {
	to: string;
	label: string;
	newTab?: boolean;
}

export interface IconLink extends Link {
	icon: Asset;
}

export interface SkillCategory<S extends string = string> {
	slug: S;
	name: string;
}

export interface Skill<S extends string = string> extends Omit<Item<S>, 'shortDescription'> {
	color: string;
	progress: number;
	category?: SkillCategory;
}

export interface Project<S extends string = string> extends Item<S> {
	links: Array<Link>;
	color: Color;
	period: {
		from: Date;
		to?: Date;
	};
	type: string;
	skills: Array<Skill<S>>;
}

export interface Service<S extends string = string> extends ItemLight{
	links: Array<Link>;
	title: string;
	description: string;
	type: string;
	skills: Array<Skill<S>>;
}



export interface Experience<S extends string = string> extends Project<S> {
	company: string;
	location: string;
	contract: ContractType;
}

export interface Education<S extends string = string> extends Item<S> {
	organization: string;
	location: string;
	period: {
		from?: Date;
		to?: Date;
	};
	subjects: Array<string>;
	degree: string;
}
