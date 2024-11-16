import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Inicio';

export const name = 'Juan Fernando';

export const lastName = 'Moreno';

export const description =
	'El código es una solución que transforma un reto en oportunidad.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/jumo04' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/juan-fernando-moreno/'
	},
	{
		platform: Platform.Email,
		link: 'juanfernandomoreno777@gmail.com'
	},
	{
		platform: Platform.Youtube,
		link: 'https://www.youtube.com'
	},
	{
		platform: Platform.Facebook,
		link: 'https://www.facebook.com/profile.php?id=61567854842701'
	}
];

export const skills = getSkills('shopify','kubernetes','docker','rabbitmq','js', 'css', 'html', 'reactjs', 'nodejs', 'svelte', 'ts', 'kafka', 'java', 'angular', 'express');
