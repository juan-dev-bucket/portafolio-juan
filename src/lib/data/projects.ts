import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';
import { base } from '$app/paths';

export const items: Array<Project> = [
	{
		slug: 'portfolio-juan',
		color: '#ff3e00',
		description:
			'Una buena implementacion y modificacion de un template hecho en svelte	y typescript. Integrandolo con un backend donde se maneja toda los datos de este proyecto.<br> La página web de portafolio presenta una estructura visual moderna y elegante, inicialmente basada en un template predefinido, pero completamente adaptada para reflejar las necesidades específicas del usuario. A través de modificaciones personalizadas en el diseño y la funcionalidad, se ha logrado una experiencia única que resalta las habilidades, proyectos y logros del propietario del portafolio.<br> Este portafolio es un ejemplo de cómo un template puede ser transformado para adaptarse a las necesidades particulares de un profesional, logrando una página funcional, visualmente atractiva y alineada con los objetivos personales o profesionales del usuario.',
		shortDescription:
			'Este portafolio es un ejemplo de cómo un template puede ser transformado para adaptarse a las necesidades particulares de un profesional, logrando una página funcional, visualmente atractiva y alineada con los objetivos personales o profesionales del usuario.',
		links: [{ to: 'https://github.com/juan-dev-bucket/portafolio-juan', label: 'GitHub' },
			{ to: 'https://juanfernando.site', label: 'Website' }
		],
		logo: Assets.JavaScript,
		name: 'Portafolio Juan Fernando Moreno',
		period: {
			from: new Date(2024, 10, 10), to: new Date(2024, 10, 16) 
		},
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass', 'nodejs'),
		type: 'Website'
	}, 
	{
		slug: 'seta-apparel',
		color: '#5e95e3',
		description:
			'SETA es una marca sofisticada, atemporal y vanguardista. Sus piezas marcan diferencia y son sinónimo de confianza para cada mujer que decide lucirlas. La mujer SETA pertenece a un movimiento de mujeres empoderadas que están dispuestas a detener tráfico, ser el centro de atención y conquistar el mundo. SETA ofrece colecciones atemporales y enfoca sus esfuerzos de diseño y calidad para que sus piezas trasciendan generaciones.',
		shortDescription:
			'SETA es una marca sofisticada, atemporal y vanguardista. Sus piezas marcan diferencia y son sinónimo de confianza para cada mujer que decide lucirlas. La mujer SETA pertenece a un movimiento de mujeres empoderadas que están dispuestas a detener tráfico, ser el centro de atención y conquistar el mundo. SETA ofrece colecciones atemporales y enfoca sus esfuerzos de diseño y calidad para que sus piezas trasciendan generaciones.',
		links: [{ to: 'https://setaapparel.com/', label: 'Seta Apparel' }],
		logo: Assets.Ecommerce,
		name: 'Seta Apparel',
		period: {
			from: new Date(2022, 9, 5), to: new Date(2023, 1, 5) 
		},
		skills: getSkills('shopify'),
		type: 'Ecommerce'
	},
	{
		slug: 'lotan-inc',
		color: '#5e95e3',
		description:
			'En Lotan Inc. Nos especializamos en ofrecer soluciones tecnológicas innovadoras y personalizadas que impulsan el éxito de tu negocio. Con un equipo de expertos en desarrollo de software, trabajamos estrechamente contigo para transformar tus ideas en productos digitales de alto rendimiento y alta calidad. Nuestros Servicios: Desarrollo de Aplicaciones Personalizadas: Creamos software a medida que se adapta perfectamente a tus necesidades específicas, asegurando un rendimiento óptimo y una experiencia de usuario excepcional. Consultoría Tecnológica: Asesoramos a empresas en la toma de decisiones estratégicas sobre tecnología, ayudando a elegir las mejores soluciones para maximizar la eficiencia y reducir costos. Soluciones en la Nube: Implementamos plataformas en la nube escalables y seguras que permiten a tu empresa operar con flexibilidad y eficiencia. Automatización de Procesos: Optimizamos los procesos empresariales mediante la automatización, mejorando la productividad y reduciendo errores. Desarrollo Móvil y Web: Diseñamos y desarrollamos aplicaciones móviles y sitios web funcionales, seguros y fáciles de usar, adaptados a todos los dispositivos. Mantenimiento y Soporte Continuo: Ofrecemos soporte y mantenimiento proactivo para asegurar el correcto funcionamiento y la actualización constante de tus soluciones tecnológicas. Por qué elegirnos: Experiencia y Profesionalismo: Con años de experiencia en la industria, nuestro equipo domina las últimas tecnologías y metodologías ágiles, asegurando soluciones rápidas y efectivas. Enfoque Personalizado: Entendemos que cada negocio es único, por lo que trabajamos de manera colaborativa para crear soluciones que respondan a tus desafíos específicos. Compromiso con la Calidad: Garantizamos resultados de la más alta calidad, con rigurosos controles de calidad en cada etapa del proyecto. Innovación Constante: Nos mantenemos al día con las tendencias tecnológicas emergentes para ofrecerte soluciones innovadoras que mantengan a tu negocio a la vanguardia. Transforma tu negocio con Lotan Inc. Estamos aquí para ayudarte a aprovechar todo el potencial de la tecnología y alcanzar tus metas empresariales. ¡Contáctanos hoy mismo y comienza tu viaje hacia el futuro digital!',
		shortDescription:
			'En Lotan Inc. Nos especializamos en ofrecer soluciones tecnológicas innovadoras y personalizadas que impulsan el éxito de tu negocio. Con un equipo de expertos en desarrollo de software, trabajamos estrechamente contigo para transformar tus ideas en productos digitales de alto rendimiento y alta calidad. <br>Pronto....',
		links: [{ to: 'https://github.com/jumo04/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Lotan,
		name: 'Lotan Inc',
		period: {
			from: new Date(2024, 9, 5)
		},
		skills: getSkills('nodejs', 'ts', 'js','css', 'html', 'docker'),
		type: 'Emprendimiento'
	},
	{
		slug: 'vote-app',
		color: '#5e95e3',
		description:
			' Vote App es una solución digital avanzada diseñada para garantizar la integridad, la precisión y la transparencia en los procesos de votación. Con nuestra plataforma, transformamos la forma en que se gestionan, cuentan y protegen los votos, proporcionando un sistema seguro, fiable y fácil de usar para todo tipo de elecciones, ya sean políticas, corporativas o de cualquier otra índole.',
		shortDescription:
			'Vote App es una solución digital avanzada diseñada para garantizar la integridad, la precisión y la transparencia en los procesos de votación. Con nuestra plataforma, transformamos la forma en que se gestionan, cuentan y protegen los votos, proporcionando un sistema seguro, fiable y fácil de usar para todo tipo de elecciones, ya sean políticas, corporativas o de cualquier otra índole. <br>Pronto...',
		links: [{ to: 'https://github.com/comppa/conteoVotacion', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'VoteApp',
		period: {
			from: new Date(2023, 9, 5)
		},
		skills: getSkills('nodejs', 'ts', 'js','css', 'html', 'rabbitmq'),
		type: 'Aplicación web'
	},
	{
		slug: 'contable',
		color: '#5e95e3',
		description:
			'Es la herramienta definitiva para llevar un control claro, sencillo y efectivo de tus finanzas personales. Diseñada para facilitarte el manejo de tu dinero, esta aplicación te permite monitorear tus ingresos, gastos y ahorrar de manera eficiente, todo desde la palma de tu mano.',
		shortDescription:
			'Es la herramienta definitiva para llevar un control claro, sencillo y efectivo de tus finanzas personales. Diseñada para facilitarte el manejo de tu dinero, esta aplicación te permite monitorear tus ingresos, gastos y ahorrar de manera eficiente, todo desde la palma de tu mano.<br> Pronto....',
		links: [{ to: '', label: 'github' }],
		logo: Assets.Unknown,
		name: 'Contable',
		period: {
			from: new Date(2024, 10, 5)
		},
		skills: getSkills('js', 'nodejs', 'express', 'css', 'html', 'docker'),
		type: 'Website'
	},
	{
		slug: 'tattoo-shop',
		color: '#5e95e3',
		description:
			'Pronto...',
		shortDescription:
			'Pronto...',
		links: [{ to: '', label: 'github' }],
		logo: Assets.Unknown,
		name: 'Tattoo Shop',
		period: {
			from: new Date(2024, 10, 10)
		},
		skills: getSkills('shopify'),
		type: 'Website'
	}
];

export const title = 'Proyectos';
