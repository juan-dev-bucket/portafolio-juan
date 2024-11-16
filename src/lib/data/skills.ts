import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Lenguajes de programación', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Runtime Enviroments', slug: 'run-env' }),
	defineSkillCategory({ name: 'Plataformas', slug: 'platform' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Librerias', slug: 'library' }),
	defineSkillCategory({ name: 'Lenguajes', slug: 'lang' }),
	defineSkillCategory({ name: 'Bases de datos', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Etiquetas & Estilos', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;


const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:
			'JavaScript (JS) es un lenguaje de programación ligero, interpretado, o compilado justo-a-tiempo (just-in-time) con funciones de primera clase. Si bien es más conocido como un lenguaje de scripting (secuencias de comandos) para páginas web, y es usado en muchos entornos fuera del navegador, tal como Node.js, Apache CouchDB y Adobe Acrobat JavaScript es un lenguaje de programación basada en prototipos, multiparadigma, de un solo hilo, dinámico, con soporte para programación orientada a objetos, imperativa y declarativa (por ejemplo programación funcional). Lee más en acerca de JavaScript.  El estándar para JavaScript es ECMAScript (ECMA-262) y la especificación de la API para la Internacionalización de ECMAScript (ECMA-402). La documentación en MDN está basada enteramente en las últimas versiones preliminares de ECMA-262 y ECMA-402. Y en algunos casos donde algunas propuestas para nuevas funciones para ECMAScript ya hayan sido implementadas en los navegadores, la documentación y algunos artículos de MDN pueden hacer uso de algunas de estas funciones.',
		logo: Assets.JavaScript,
		progress: 99,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'nodejs',
		color: 'green',
		description:
			'Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor (pero no limitándose a ello) basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google. Fue creado con el enfoque de ser útil en la creación de programas de red altamente escalables, como por ejemplo, servidores web.4​ Fue creado por Ryan Dahl en 2009 y su evolución está apadrinada por la empresa Joyent, que además tiene contratado a Dahl en plantilla',
		logo: Assets.NodeJs,
		progress: 95,
		name: 'NodeJs',
		category: 'run-env'
	}),
	
	defineSkill({
		slug: 'java',
		color: 'blue',
		description:
			'Java es el lenguaje de programación y la plataforma de desarrollo más prolíficos del mundo. Reduce costos, acorta los plazos de desarrollo, impulsa la innovación y mejora los servicios de las aplicaciones. Java sigue siendo la plataforma de desarrollo preferida por empresas y desarrolladores, y cuenta con millones de desarrolladores que ejecutan más de 60 mil millones de máquinas virtuales Java en todo el mundo. ¿Para qué se utiliza el lenguaje de programación Java? Debido a que Java es un lenguaje versátil y de uso gratuito, crea software localizado y distribuido. Algunos usos comunes de Java incluyen: 1.     Desarrollo de juegos Muchos videojuegos, así como juegos para móviles y computadoras, se crean con Java. Incluso los videojuegos modernos que integran tecnología avanzada, como el machine learning o la realidad virtual, se crean con la tecnología de Java. 2.     Computación en la nube Java a menudo se conoce como WORA: escribir una vez y ejecutar en cualquier lugar (por sus siglas en inglés “Write Once and Run Anywhere”), lo que lo hace perfecto para aplicaciones descentralizadas basadas en la nube. Los proveedores de la nube eligen el lenguaje Java para ejecutar programas en una amplia gama de plataformas subyacentes. 3.     Big data Java se usa para motores de procesamiento de datos que pueden trabajar con conjuntos de datos complejos y cantidades masivas de datos en tiempo real. 4.     Inteligencia artificial Java es una fuente inagotable de bibliotecas de machine learning. Su estabilidad y velocidad lo hacen perfecto para el desarrollo de aplicaciones de inteligencia artificial como el procesamiento de lenguaje natural y el aprendizaje profundo. 5.     Internet de las cosas Java se ha utilizado para programar sensores y hardware en dispositivos de periferia que pueden conectarse de forma independiente a Internet.',
		logo: Assets.Java,
		progress: 92,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'kafka',
		color: 'black',
		description:
			'Apache Kafka es un proyecto de intermediación de mensajes de código abierto desarrollado por LinkedIn y donado a la Apache Software Foundation escrito en Java y Scala. El proyecto tiene como objetivo proporcionar una plataforma unificada, de alto rendimiento y de baja latencia para la manipulación en tiempo real de fuentes de datos. Puede verse como una cola de mensajes, bajo el patrón publicación-suscripción, masivamente escalable concebida como un registro de transacciones distribuidas,3​ lo que la vuelve atractiva para las infraestructuras de aplicaciones empresariales.',
		logo: Assets.Kafka,
		progress: 86,
		name: 'Kafka',
		category: 'library'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description:
			'TypeScript (TS) es un lenguaje de programación construido a un nivel superior de JavaScript (JS). Esto quiere decir que TypeScript dota al lenguaje de varias características adicionales que hacen que podamos escribir código con menos errores, más sencillo, coherente y fácil de probar, en definitiva, más limpio y sólido. Fue creado por Microsoft en 2012 y, desde entonces, su adopción no ha hecho más que crecer. Especialmente, desde que Google decidió adoptarlo como lenguaje por defecto para desarrollar con Angular. Aunque, hoy en día, podemos desarrollar con TypeScript en cualquiera de los frameworks o librerías más punteras, como son React para el frontend o Node para el backend.',
		logo: Assets.TypeScript,
		progress: 96,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			'Hojas de Estilo en Cascada (del inglés Cascading Style Sheets) o CSS es el lenguaje de estilos utilizado para describir la presentación de documentos HTML o XML (incluyendo varios lenguajes basados en XML como SVG, MathML o XHTML). CSS describe cómo debe ser renderizado el elemento estructurado en la pantalla, en papel, en el habla o en otros medios. CSS es uno de los lenguajes base de la Open Web y posee una especificación estandarizada por parte del W3C. Anteriormente , el desarrollo de varias partes de las especificaciones de CSS era realizado de manera sincrónica, lo que permitía el versionado de las recomendaciones. Probablemente habrás escuchado acerca de CSS1, CSS2.1, CSS3. Sin embargo, CSS4 nunca se ha lanzado como una versión oficial.',
		logo: Assets.CSS,
		progress: 100,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			'HTML (Lenguaje de Marcas de Hipertexto, del inglés HyperText Markup Language) es el componente más básico de la Web. Define el significado y la estructura del contenido web. Además de HTML, generalmente se utilizan otras tecnologías para describir la apariencia/presentación de una página web (CSS) o la funcionalidad/comportamiento (JavaScript). "Hipertexto" hace referencia a los enlaces que conectan páginas web entre sí, ya sea dentro de un único sitio web o entre sitios web. Los enlaces son un aspecto fundamental de la Web. Al subir contenido a Internet y vincularlo a las páginas creadas por otras personas, te conviertes en un participante activo en la «World Wide Web» (Red Informática Mundial). HTML utiliza "marcas" para etiquetar texto, imágenes y otro contenido para mostrarlo en un navegador Web. Las marcas HTML incluyen "elementos" especiales como <br>"head, <title>, <body>, <header>, <footer>, <article>, <section>, <p>, <div>, <span>, <img>, <aside>, <audio>, <canvas>, <datalist>, <details>, <embed>, <nav>, <output>, <progress>, <video>, <ul>, <ol>, <li>" y muchos otros.',
		logo: Assets.HTML,
		progress: 100,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'sass',
		color: 'pink',
		description:
			'Sass es un metalenguaje de Hojas de Estilo en Cascada (CSS). Es un lenguaje de script que es traducido a CSS, SassScript es el lenguaje de script en sí mismo. Sass consiste en dos sintaxis. La sintaxis original, llamada indented syntax («sintaxis con sangrado») que usa una sintaxis similar al Haml.3​ Este usa la sangría para separar bloques de código y el carácter nueva línea para separar reglas. La sintaxis más reciente, SCSS, usa el formato de bloques como CSS. Este usa llaves para denotar bloques de código y punto y coma (;) para separar las líneas dentro de un bloque. La sintaxis indentada y los ficheros SCSS tienen las extensiones .sass y .scss respectivamente.',
		logo: Assets.Sass,
		progress: 100,
		name: 'Sass',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'kubernetes',
		color: 'pink',
		description:
			'Kubernetes es una plataforma portable y extensible de código abierto para administrar cargas de trabajo y servicios. Kubernetes facilita la automatización y la configuración declarativa. Tiene un ecosistema grande y en rápido crecimiento. El soporte, las herramientas y los servicios para Kubernetes están ampliamente disponibles. Google liberó el proyecto Kubernetes en el año 2014. Kubernetes se basa en la experiencia de Google corriendo aplicaciones en producción a gran escala por década y media, junto a las mejores ideas y prácticas de la comunidad.',
		logo: Assets.Kubernetes,
		progress: 100,
		name: 'Kubernetes',
		category: 'platform'
	}),
	
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description:
			'React (también llamada React.js o ReactJS) es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre. En el proyecto hay más de mil desarrolladores libres. React intenta ayudar a los desarrolladores a construir aplicaciones que usan datos que cambian todo el tiempo. Su objetivo es ser sencillo, declarativo y fácil de combinar. React sólo maneja la interfaz de usuario en una aplicación; React es la Vista en un contexto en el que se use el patrón MVC (Modelo-Vista-Controlador) o MVVM (Modelo-vista-modelo de vista). También puede ser utilizado con las extensiones de React-based que se encargan de las partes no-UI (que no forman parte de la interfaz de usuario) de una aplicación web.',
		logo: Assets.ReactJs,
		progress: 100,
		name: 'React Js',
		category: 'library'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: svelte,
		logo: Assets.Svelte,
		progress: 100,
		name: 'Svelte',
		category: 'library'
	}),
	
	defineSkill({
		slug: 'rabbitmq',
		color: 'orange',
		description: '<h2>¿Qué es RabbitMQ? </h2><p>RabbitMQ es una herramienta <em>open source</em> de <em>software</em> que se utiliza para la implementación de sistemas de <em>message queuing</em> o encolado de mensajes. <strong>En esencia, actúa como un intermediario o <em>broker</em> que facilita la comunicación entre aplicaciones y sistemas distribuidos, de forma que permite que estos intercambien mensajes de manera eficiente y confiable.</strong><br></p> <p>El sistema de <em>message queuing </em>de <strong>RabbitMQ</strong> opera con el protocolo Advanced Message Queuing Protocol (AMQP), que es un estándar abierto y muy aceptado para la mensajería en entornos distribuidos. Fue desarrollado inicialmente por el banco de inversión JPMorgan Chase y luego liberado como <em>software</em> de código abierto.<br></p> <br><br> <h2 ><span></span>Funcionamiento básico de RabbitMQ<span></span></h2><p>En el contexto de RabbitMQ, <strong>los mensajes son objetos ligeros que contienen datos y se utilizan para transmitir información entre aplicaciones. </strong>La plataforma actúa como intermediario o <em>broker</em>, recibe mensajes de los productores (aplicaciones que envían mensajes) y se los entrega a los consumidores (aplicaciones que reciben y procesan los mensajes).<br></p><p>El proceso de envío y recepción de mensajes sigue el principio del patrón publicador/suscriptor.<strong> Los productores envían mensajes a <em>exchanges</em> (intercambiadores), que son responsables de enrutar los mensajes a colas según reglas definidas por los <em>routing keys </em>(claves de enrutamiento).</strong> Por otro lado, los consumidores se suscriben a las colas y reciben los mensajes que se han enrutado a ellas.<br><br></p><h2><span></span>Ventajas de RabbitMQ<span></span></h2><p><strong>RabbitMQ ofrece numerosas ventajas </strong>que la convierten en una solución muy popular para la gestión de mensajes en entornos distribuidos:</p><ol><li><strong>Fiabilidad</strong>: es altamente confiable gracias a su modelo de colas y almacenamiento persistente de mensajes. Incluso si una aplicación se desconecta temporalmente, los mensajes permanecen en las colas y se entregan cuando el consumidor está nuevamente disponible.</li><li><strong>Escalabilidad</strong>: la arquitectura de RabbitMQ permite distribuir el procesamiento de mensajes en múltiples nodos, lo que facilita el escalamiento horizontal de aplicaciones y garantiza un alto rendimiento.</li><li><strong>Flexibilidad</strong>: es posible configurar diferentes tipos de <em>exchanges</em> y colas para adaptarse a diversas necesidades de enrutamiento y distribución de mensajes.</li><li><strong>Transformación digital</strong>: al permitir una comunicación fluida y confiable entre aplicaciones, RabbitMQ es una herramienta crucial para la transformación digital de las empresas, ya que facilita la integración de sistemas y la implementación de arquitecturas modernas y flexibles.</li></ol>',
		logo: Assets.RabbitMQ,
		progress: 80,
		name: 'RabbitMQ',
		category: 'platform'
	}),
	defineSkill({
		slug: 'express',
		color: 'blue',
		description: '<h2>¿Qué es Express.js?</h2><p>Express.js, a veces también llamado «Express», es un <a href="https://kinsta.com/es/blog/bibliotecas-javascript/" target="_blank" rel="noopener noreferrer">framework de backend</a> Node.js minimalista, rápido y similar a Sinatra, que proporciona características y herramientas robustas para desarrollar aplicaciones de backend escalables. Te ofrece el sistema de enrutamiento y características simplificadas para ampliar el framework con componentes y partes más potentes en función de los casos de uso de tu aplicación.</p><figure><p>El framework proporciona un conjunto de herramientas para aplicaciones web, <a href="https://kinsta.com/es/blog/hacer-menos-http-solicitudes/" rel="noopener">peticiones y respuestas HTTP</a>, enrutamiento y middleware para construir y desplegar aplicaciones a gran escala y preparadas para la empresa.</p><p>También proporciona una herramienta de interfaz de línea de comandos (CLI) llamada <a href="https://kinsta.com/es/blog/como-instalar-node-js/#check-and-update-npm-version" rel="noopener">Node Package Manager</a> (NPM), donde los desarrolladores pueden obtener paquetes desarrollados. También obliga a los desarrolladores a seguir el principio de No te repitas (DRY).</p><p>El principio DRY pretende reducir la repetición de patrones de software, sustituyéndolos por abstracciones, o utilizando normalizaciones de datos para evitar la redundancia</p><aside></aside><h2>¿Para Qué se Utiliza Express.js?</h2><p>Express.js se utiliza para una amplia gama de cosas en el ecosistema JavaScript/Node.js — puedes desarrollar aplicaciones, <a href="https://kinsta.com/es/base-de-conocimiento/punto-final-de-la-api/" target="_blank" rel="noopener noreferrer">endpoints</a><a href="https://kinsta.com/es/base-de-conocimiento/punto-final-de-la-api/" rel="noopener"> de API</a>, sistemas de enrutamiento y frameworks con él.</p><p>A continuación hay una lista de sólo algunos de los tipos de aplicaciones que puedes construir con Express.js.</p><h3>Aplicaciones de una Sola Página</h3><p>Las aplicaciones de una sola página (SPAs) son el enfoque moderno de desarrollo de aplicaciones en el que toda la aplicación se enruta en una sola página de índice. Express.js es un excelente framework para construir una API que conecte estas aplicaciones SPA y sirva datos de forma consistente. Algunos ejemplos de aplicaciones de página única son Gmail, Google Maps, Airbnb, Netflix, Pinterest, Paypal y muchos más. Las empresas están utilizando las SPA para construir una experiencia fluida y escalable.</p><h3>Herramientas de Colaboración en Tiempo Real</h3><p>Las <a href="https://kinsta.com/es/blog/microsoft-teams-contra-slack/" rel="noopener">herramientas de colaboración</a> están aquí para facilitar la forma en que las empresas trabajan y colaboran diariamente, y con Express.js, puedes desarrollar aplicaciones de colaboración y de red en tiempo real con facilidad.</p><p>Además, el framework se utiliza para desarrollar aplicaciones en tiempo real, como aplicaciones de chat y de escritorios, donde resulta sencillo integrar WebSocket en el framework.</p><p>Express.js se encarga de la parte de enrutamiento y middleware del proceso, lo que permite a los desarrolladores concentrarse en la lógica empresarial vital de estas funciones en tiempo real al desarrollar herramientas de colaboración en directo.</p><h3>Aplicaciones de Streaming</h3><p>Las aplicaciones de streaming en tiempo real como Netflix son complejas y tienen muchas capas de flujos de datos. Para desarrollar una aplicación de este tipo, necesitas un framework sólido que maneje eficazmente los flujos de datos asíncronos.</p><p>Es un framework ideal para construir y desplegar aplicaciones de streaming escalables y preparadas para la empresa.</p><h3>Aplicaciones Fintech</h3><p>Fintech es un programa informático y otras tecnologías utilizadas para soportar o permitir los servicios bancarios y financieros. La construcción de una aplicación fintech es la <a href="https://www.globenewswire.com/en/news-release/2021/09/21/2300294/28124/en Insights-on-the-FinTech-Global-Market-to-2026-Growing-Adoption-of-Non-Bank-Option-to-Manage-Money-is-Driving-Growth.html">tendencia actual del sector</a>, y Express.js es el framework elegido para construir aplicaciones fintech altamente escalables.</p><p>Si estás pensando en construir una aplicación fintech con un alto volumen de usuarios y transacciones, entonces te unirás a empresas como <a href="https://kinsta.com/es/blog/alternativas-paypal/">Paypal</a> y Capital One al desarrollar y desplegar tu aplicación utilizando Express.js.</p><h2>Por Qué Deberías usar Express.js</h2><p>Hay varias razones por las que deberías considerar el uso de Express.js para tu próximo proyecto, desde una mayor velocidad de E/S para peticiones y respuestas más rápidashasta su sistema de hilo único y procesos asíncronos. También utiliza la estructura MVC para simplificar las manipulaciones de datos y los sistemas de enrutamiento.</p><p>Echemos un vistazo a algunas de las principales razones por las que deberías considerar el uso de Express.js.</p><h3>Flexible y Rápido</h3><p>Express.js es muy fácil de usar y flexible, y es más rápido que cualquier otro framework Node.js. Al ser un framework minimalista, ofrece un rápido desarrollo de aplicaciones y alivia el estrés de dominar las diferentes partes de un framework más grande. También proporciona ricas características, como un excelente sistema de enrutamiento, middlewares y negociación de contenidos desde el primer momento.</p><h3>Parte de la Stack MEAN</h3><p>Express.js es el framework de elección en cada stack representado con la E en cualquiera de los stacks, como MERN, MEAN, etc. También se puede integrar fácilmente en cualquier stack o tecnología para mostrar lo vital que es el framework en el proceso de desarrollo del stack MEAN.</p><p>Además, puede conectarse eficazmente con un sistema de gestión de bases de datos más robusto que el convencional <a href="https://kinsta.com/es/base-de-conocimiento/que-es-mysql/" target="_blank" rel="noopener noreferrer">MySQL</a> y proporciona un proceso de desarrollo sin fisuras en cada stack. Esta combinación de características hace que Express.js sea muy popular entre los desarrolladores MEAN.</p><aside class="W10=" data-e4ls="Q2p4OS4wYW9XWUg=" data-a5uv="OHNhb3RGTFhRMmdqbS1HMEpDeDdf" data-jev="V1JRdmNYOFREbnpFTFNQ" data-nh1mpgg="OVFKeEF6UGRN" id="NTIzOTU=" data-e.tl80="b2J3OUJEU0VfcllIaDRMYWtDWg==" data-du1w="QlpLYl9xdm11SFZ3" data-vmlp="aHhJWE9Fc05WOTdHSkI=" data-r3koi="Im1pZGRsZSI=|ImVzX0VTIg==" data-26qdu3="YkJ3RjVsZUhHQ3RfWA==" data-4h="dTJsWXh2aE5JLnRkWkNSd0hXYUQx" data-p="SUVld3I1Ml9DYkJHSHF5Zk1aTw==" data-fv-gr.="VjY3UG5URXNTOV94UllRZUY=" data-_cmsr="Uk8xMjVfNFl6UTdYUHBMOWpB"><aside><h3>Escalabilidad</h3><p>Express.js ha demostrado ser muy escalable a lo largo de los años debido al número de grandes empresas que utilizan el framework en su servidor diariamente.</p><p>Maneja las peticiones y respuestas de los usuarios de forma eficiente y no requiere apenas configuración adicional cuando se desarrolla una aplicación web a gran escala.</p><p>Tiene excelentes módulos, paquetes y recursos adicionales, que ayudan a los desarrolladores a crear aplicaciones web fiables y escalables.</p><h3>Compatible con el Motor V8 de Google</h3><p>Express.js es compatible con muchos paquetes del motor V8 de Google, lo que hace que el framework sea muy potente para construir y desplegar aplicaciones en tiempo real, colaborativas y basadas en la red a nivel empresarial.</p><p>El motor V8 de Google es un motor JavaScript y WebAssembly de código abierto de alto rendimiento que admite una gran velocidad y escalabilidad para aplicaciones complejas e intensas. Cuando utilizas paquetes que emplean el motor Google V8, tu aplicación backend recibe un enorme impulso de rendimiento y escalabilidad.</p><h3>Apoyo de la Comunidad</h3><p>Como el framework es el más popular de Node.js backend, tiene el mayor número de apoyo de la comunidad, recursos y paquetes para cualquier desafío de desarrollo. El apoyo de Google también es amplio, por lo que el framework es una opción popular entre los desarrolladores de Node.js. Su naturaleza de código abierto da a los desarrolladores la oportunidad de crear paquetes y recursos extensibles para facilitar el desarrollo, no sólo para ellos mismos, sino para todos los que programan con Express.js.</p><h3>Potente Sistema de Enrutamiento</h3><p>El framework tiene el sistema de enrutamiento más potente y robusto incorporado por defecto que asiste a su aplicación en respuesta a una solicitud del cliente a través de un endpoint particular.</p><p>Con el sistema de enrutamiento de Express.js, puedes dividir tu abultado sistema de enrutamiento en archivos manejables utilizando la instancia de enrutamiento del framework.</p><p>El sistema de enrutamiento de Express es útil para gestionar la estructura de tu aplicación, agrupando diferentes rutas en una única carpeta/directorio.</p><p>Los desarrolladores crean códigos más mantenibles agrupando las funcionalidades con el enrutador Express y evitando la repetición.</p><h3>Middleware</h3><p>Express.js es un framework que comprende una serie de middleware para crear un proceso de desarrollo sin fisuras.</p><p>Los middlewares son códigos que se ejecutan antes de que una <a href="https://kinsta.com/es/blog/hacer-menos-http-solicitudes/">petición HTTP</a> llegue al manejador de rutas o antes de que un cliente reciba una respuesta, lo que da al framework la capacidad de ejecutar un script típico antes o después de la petición de un cliente.</p><p>Con los middlewares, los desarrolladores pueden introducir scripts para interceptar el flujo de la aplicación; por ejemplo, los desarrolladores pueden utilizar los middlewares para comprobar si un usuario se ha conectado o desconectado correctamente.</p><h2>Cómo Funciona Express.js</h2><p>Dado que Express.js utiliza el modelo cliente-servidor para aceptar las peticiones de los usuarios y devolver las respuestas al cliente, su funcionamiento no es muy diferente del de otros frameworks populares, <a href="https://kinsta.com/es/base-de-conocimiento/que-es-laravel/" rel="noopener">como Laravel</a>.</p><p>Cuando un usuario envía una petición <a href="https://kinsta.com/es/blog/navegador-mas-seguro/" rel="noopener">desde su navegador web</a> escribiendo la dirección de un sitio web, el navegador envía una petición HTTP a la aplicación/servidor (muchas aplicaciones creadas con Express.js están <a href="https://kinsta.com/es/blog/google-cloud-hosting/" rel="noopener">alojadas en algún lugar de la nube</a>).</p><p>El servidor recibirá la petición a través de una de sus rutas y la procesará utilizando el controlador que coincida con la ruta solicitada.</p><p>Tras el procesamiento, el servidor enviará una respuesta al cliente <a href="https://kinsta.com/es/blog/que-es-http3/" rel="noopener">utilizando HTTP</a>, ya que se trata de un protocolo de comunicación de ida y vuelta. La respuesta devuelta al cliente puede ser un texto estándar, una página HTML dinámica que el navegador procesará y mostrará una bonita página web, o datos JSON que los desarrolladores del frontend manejarán para mostrar información en la página web.</p><p>Vamos a crear un servidor sencillo que escuche las peticiones entrantes desde una <a href="https://kinsta.com/es/base-de-conocimiento/que-es-una-url/">URL</a> y un númerode puerto específicos con Express.js:</p><pre><code class="language-js">const express = require("express")const app = express()const port = 4000app.get("/", (request, response) =&gt; {response.send("Testing Hello World!")})app.listen(port, () =&gt; {console.log(`Test app listening at http://localhost:${port}`)})</code></pre><p>Este es un simple servidor Express.js que escuchará las peticiones entrantes en <a href="http://localhost:4000/" target="_blank" rel="nofollow noopener noreferrer">http://localhost:4000/</a> y devolverá una respuesta de texto de <strong>«¡Probando Hola Mundo!</strong>«.</p><h2>Cómo Crear una Aplicación Express.js</h2><p>Ahora, vamos a crear una aplicación de demostración del mundo real utilizando el nuevo Express.js 5.0. Para empezar, crea un <strong>directorio</strong> para tunuevaaplicación e instala los siguientes paquetes:</p><pre><code class="language-bash">mkdir first-express-appcd first-express-appnpm install <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="fb9e838b899e8888bbced5cbd5cbd69a978b939ad5c3">[email&#160;protected]</a> --save</code><pre><p>A continuación, crea un archivo index.js en el directorio root y pega en él lo siguiente</p><pre><code class="language-bash">touch index.js</code></pre><p>Después de configurar el servidor como se ha demostrado anteriormente, crearemos un array <strong>Todos</strong> que contenga todos nuestros todos que se devolverán al usuario en función del endpoint llamado. Añade el siguiente código al archivo <code>index.js</code>:</p><pre><code class="language-js">const express = require("express");const app = express();const port = 3000;app.listen(port, () =&gt; {console.log(`Test app listening at http://localhost:${port}`)})const todos = [{title: "Todo 1",desc: "This is my first Todo",completed: true,},{title: "Todo 2",desc: "This is my second Todo",completed: true,},{title: "Todo 3",desc: "This is my third Todo",completed: true,},{title: "Todo 4",desc: "This is my fourth Todo",completed: true,},{title: "Todo 5",desc: "This is my fifth Todo",completed: true,},];</code></pre><p>A continuación, crearemos un endpoint para recuperar todos los <code>Todos</code> almacenados en nuestro servidor:</p><pre><code class="language-js">app.get("/todos", (request, response) =&gt; {response.status(200).json(todos);});</code></pre><p>A continuación, un endpoint para recuperar un único <strong>Todo</strong> basado en el <strong>ID</strong> del Todo:</p><pre><code class="language-js">app.get("/todos/:id", (request, response) =&gt; {response.status(200).json({ data: todos.find((todo) =&gt; todo.id === request.params.id) });});</code></pre><p>Ahora, un endpoint para almacenar un nuevo <code>todo</code>:</p><pre><code class="language-js">app.post("/todos", (request, response) =&gt; {todos.push(request.body);response.status(201).json({ msg: "Todo created successfully" });});</code></pre><p>A continuación, un endpoint para actualizar un <code>todo</code> existente con el <code>ID</code>:</p><pre><code class="language-js">app.put("/todos/:id", (request, response) =&gt; {const todo = todos.find((todo) =&gt; todo.id === request.params.id);if (todo) {const { title, desc, completed } = request.body;todo.title = title;todo.desc = desc;todo.completed = completed;response.status(200).json({ msg: "Todo updated successfully" });return;}response.status(404).json({ msg: "Todo not found" });});</code></pre><p>Por último, crearemos un endpoint para eliminar un único <code>todo</code> basado en el <code>ID</code>:</p><pre><code class="language-js">app.delete("/todos/:id", (request, response) =&gt; {const todoIndex = todos.findIndex((todo) =&gt; (todo.id = request.params.id));if (todoIndex) {todos.splice(todoIndex, 1);response.status(200).json({ msg: "Todo deleted successfully" });}response.status(404).json({ msg: "Todo not found" });});</code></pre><p>Este fragmento de código muestra cómo implementar una funcionalidad DELETE en Express.js. Recoge el ID de Todo a través de parámetros y busca en el array el ID que coincide y lo borra.</p><h3>Probando la Aplicación Express.js</h3><p>¡Ahora es el momento de probar nuestra nueva aplicación Express.js! Ejecuta el siguiente comando para probar nuestra recién desarrollada API REST con <a href="https://www.postman.com/" target="_blank" rel="nofollow noopener noreferrer">Postman</a> y asegurarte de que tenemos los datos correctos:</p><pre><code class="language-bash">node index.js</code></pre><p>Puedes descargar Postman desde la página oficial y ejecutar la prueba que aparece a continuación. Ahí lo tienes, para aprender más, te sugerimos que crees más funcionalidades utilizando el enfoque que hemos comentado en el artículo y amplíes tus conocimientos sobre Express.js</p> <figure id="attachment_120628" aria-describedby="caption-attachment-120628" style="width: 900px" class="wp-caption alignnone"><img decoding="async" loading="lazy" class="wp-image-120628 size-full" src="https://kinsta.com/wp-content/uploads/2022/04/test_express.png" alt="Una captura de pantalla de una UX para probar la API Express.js,mostrando los resultados de una prueba ejecutada." width="900" height="622"><figcaption id="caption-attachment-120628" class="wp-caption-text">Resultado de la API Express.js<figcaption></figure>',
		logo: Assets.ExpressJs,
		progress: 100,
		name: 'Express',
		category: 'framework'
	}),
	defineSkill({
		slug: 'python',
		color: 'yellow',
		description: '  <h2>¿Qué es Python?</h2> <p>Python es un lenguaje de programación ampliamente utilizado en las aplicaciones web, el desarrollo de software, la ciencia de datos y el machine learning (ML). Los desarrolladores utilizan Python porque es eficiente y fácil de aprender, además de que se puede ejecutar en muchas plataformas diferentes. El software Python se puede descargar gratis, se integra bien a todos los tipos de sistemas y aumenta la velocidad del desarrollo.</p><br> <h2 >¿Qué beneficios ofrece Python?</h2><p>Los beneficios de Python incluyen los siguientes:</p> <ul><li>Los desarrolladores pueden leer y comprender fácilmente los programas de Python debido a su sintaxis básica similar a la del inglés.&nbsp;</li> <li>Python permite que los desarrolladores sean más productivos, ya que pueden escribir un programa de Python con menos líneas de código en comparación con muchos otros lenguajes.</li> <li>Python cuenta con una gran biblioteca estándar que contiene códigos reutilizables para casi cualquier tarea. De esta manera, los desarrolladores no tienen que escribir el código desde cero.</li> <li>Los desarrolladores pueden utilizar Python fácilmente con otros lenguajes de programación conocidos, como Java, C y C++.</li> <li>La comunidad activa de Python incluye millones de desarrolladores alrededor del mundo que prestan su apoyo. Si se presenta un problema, puede obtener soporte rápido de la comunidad.</li><li>Hay muchos recursos útiles disponibles en Internet si desea aprender Python. Por ejemplo, puede encontrar con facilidad videos, tutoriales, documentación y guías para desarrolladores.</li> <li>Python se puede trasladar a través de diferentes sistemas operativos de computadora, como Windows, macOS, Linux y Unix.</li>  </ul>  <br><h2>¿Cómo se utiliza Python?</h2> <p>El lenguaje Python se aplica a varios casos de uso en el desarrollo de aplicaciones, incluidos los ejemplos siguientes:</p> <br> <h3>Desarrollo web del lado del servidor</h3>  <p>El desarrollo web del lado del servidor incluye las funciones complejas de backend que los sitios web llevan a cabo para mostrar información al usuario. Por ejemplo, los sitios web deben interactuar con las bases de datos, comunicarse con otros sitios web y proteger los datos cuando se los envía a través de la red.&nbsp;</p> <p>Python es útil para escribir código del lado del servidor debido a que ofrece muchas bibliotecas que constan de código preescrito para crear funciones de backend complejas. Los desarrolladores también utilizan un amplio rango de marcos de Python que proporcionan todas las herramientas necesarias para crear aplicaciones web con mayor rapidez y facilidad. Por ejemplo, los desarrolladores pueden crear la aplicación web esqueleto en segundos porque no deben escribirla desde cero. Pueden probarla por medio de las herramientas de prueba del marco, sin depender de herramientas de prueba externas.</p><br><h3>Automatización con scripts de Python</h3> <p>Un lenguaje de scripting es un lenguaje de programación que automatiza las tareas que suelen llevar a cabo las personas. Los programadores utilizan ampliamente los scripts de Python para automatizar muchas tareas diarias, como las siguientes:</p> <ul> <li>Cambiar el nombre de una gran cantidad de archivos a la vez</li> <li>Convertir un archivo en otro tipo de archivo</li>  <li>Eliminar palabras duplicadas de un archivo de texto</li> <li>Llevar a cabo operaciones matemáticas básicas</li><li>Enviar mensajes por email</li> <li>Descargar contenido</li> <li>Efectuar análisis básicos de registros</li> <li>Encontrar errores en varios archivos</li> </ul> <br>  <h3>Realizar tareas de ciencia de datos y machine learning</h3><p>La <a href="https://aws.amazon.com/what-is/data-science/" rel="noopener" target="_blank"></a> consiste en extraer conocimientos valiosos a partir de los datos, mientras que el <a href="https://aws.amazon.com/what-is/machine-learning/" rel="noopener" target="_blank"></a> enseña a las computadoras a aprender automáticamente de los datos y a efectuar predicciones precisas. Los científicos de datos utilizan Python para realizar tareas de ciencia de datos, como las que se indican a continuación:</p>  <ul>  <li>Corregir y eliminar datos incorrectos, lo que se conoce como limpieza de datos&nbsp;</li> <li>Extraer y seleccionar varias características de los datos</li> <li><a href="https://aws.amazon.com/what-is/data-labeling/" rel="noopener" target="_blank">Etiquetar datos</a>, que consiste en agregar nombres significativosa los datos</li> <li>Buscar diferentes estadísticas a partir de los datos</li> <li>Visualizar los datos mediante el uso de tablas y gráficos, como los gráficos de líneas, los de barras, los circulares y los histogramas</li> </ul> &nbsp; Los científicos de datos utilizan las bibliotecas de ML de Python para entrenar los modelos de ML y crear clasificadores que clasifiquen los datos con precisión. Las personas que trabajan en diferentes campos utilizan clasificadores basados en Python para efectuar tareas de clasificación, como la clasificación de imágenes, texto y tráfico de red; el reconocimiento de habla; y el reconocimiento facial. Los científicos de datos también utilizan Python para las tareas de <a href="https://aws.amazon.com/what-is/deep-learning/">aprendizaje profundo</a>, una técnica avanzada de ML.<br><br><h3>Desarrollo de software</h3> <p>Los desarrolladores de software suelen utilizar Python para realizar distintas tareas de desarrollo y aplicaciones de software, como las que se indican a continuación:</p> <ul> <li>Realizar un seguimiento de los errores en el código del software</li> <li>Crear el software de forma automática</li> <li>Administrar los proyectos de software</li> <li>Desarrollar prototipos de software</li> <li>Desarrollar aplicaciones de escritorio por medio de las bibliotecas de interfaz gráfica de usuario (GUI)</li> <li>Desarrollar juegos simples basados en texto a videojuegos más complejos</li>  </ul> <br>  <h3>Automatización de pruebas de software</h3> <p>La prueba de software es el proceso de verificar si los resultados reales del software coinciden con los resultados esperados, para garantizar que el software esté libre de errores.&nbsp;</p><ul><li>Los desarrolladores utilizan marcos de prueba de unidad de Python, como Unittest, Robot y PyUnit, para probar las funciones que escriben.&nbsp;</li> <li>Los encargados de probar el software utilizan Python para escribir casos de prueba para diversos escenarios de prueba. Por ejemplo, lo utilizan para probarla interfaz de usuario de una aplicación web, los diversos componentes de software y las nuevas características.&nbsp;</li> </ul> <p>Los desarrolladores pueden utilizar varias herramientas para ejecutar scripts de prueba de manera automática. Estas herramientas se conocen como herramientas de integración e implementación continuas (CI/CD). Los encargados de probar el software y sus desarrolladores utilizan las herramientas de CI/CD, como Travis CI y Jenkins, para automatizar las pruebas. La herramienta de CI/CD ejecuta automáticamente los scripts de prueba de Python e informa los resultados de las pruebas cada vez que los desarrolladores presentan nuevos cambios de código.</p>',
		logo: Assets.Python,
		progress: 100,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'docker',
		color: 'blue',
		description: 'Docker es un proyecto de código abierto que automatiza el despliegue de aplicaciones dentro de contenedores de software, proporcionando una capa adicional de abstracción y automatización de virtualización de aplicaciones en múltiples sistemas operativos. Docker utiliza características de aislamiento de recursos del kernel Linux, tales como cgroups y espacios de nombres (namespaces) para permitir que "contenedores" independientes se ejecuten dentro de una sola instancia de Linux, evitando la sobrecarga de iniciar y mantener máquinas virtuales.El soporte del kernel Linux para los espacios de nombres aísla la vista que tiene una aplicación de su entorno operativo,incluyendo árboles de proceso, red, ID de usuario y sistemas de archivos montados, mientras que los cgroups del kernel proporcionan aislamiento de recursos, incluyendo la CPU, la memoria, el bloque de E/S y de la red. Desde la versión 0.9, Docker incluye la biblioteca libcontainer como su propia manera de utilizar directamente las facilidades de virtualización que ofrece el kernel Linux, además de utilizar las interfaces abstraídas de virtualización mediante libvirt, LXC (Linux Containers) y systemd-nspawn',
		logo: Assets.Docker,
		progress: 100,
		name: 'Docker',
		category: 'platform'
	}),
	defineSkill({
		slug: 'shopify',
		color: 'green',
		description: '',
		logo: Assets.Shopify,
		progress: 100,
		name: 'Shopify',
		category: 'platform'
	})
	
] as const;

export const title = 'Habilidades';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
