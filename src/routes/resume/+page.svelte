<script>
	import { data, title } from '@data/resume';

	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import { items } from '$lib/data/skills';
	import { base } from '$app/paths';
	import GeneralFooter from '$lib/components/GeneralFooter.svelte';

</script>

<CommonPage {title} classe="title-color">
   <section id="about">  
	<div class="row section-intro">
		<div class="col-twelve">
			<h1>Let me introduce myself.</h1>
			<div class="intro-info">
				<img src="{base}/profile.jpg" alt="Profile Picture">
				<p class="lead">Me llamo Juan Fernando Moreno, me gusta viajar, conocer nuevos lugares y nuevas personas, me apasiona el desarrollo de software porque creo que lo que se puede lograr es infinito.</p>
			</div>   		
		</div>   		
	</div> <!-- /section-intro -->
	<div class="row about-content md:flex text-center grid sm:grid-cols-2 md:grid-cols-6 gap-6">
		<div class="tab-full">
			<h3>Perfil</h3>
			<p >Soy un Ingeniero de Sistemas con un solido conocimiento en matematicas, logica de programación, estructura de datos entre otros. con el objetivo de contribuir con el exito de los proyectos que se realizan</p>
			<ul class="info-list">
				<li>
					<strong>Nombre Completo:</strong>
					<span>Juan Fernando Moreno</span>
				</li>
				<li>
					<strong>Cumpleaños:</strong>
					<span>Marzo 22, 1992</span>
				</li>
				<li>
					<strong>Trabajo:</strong>
					<span>Emprendedor, Backend - Frontend Developer</span>
				</li>
				<li>
					<strong>Sitioweb:</strong>
					<span>juanfernando.site</span>
				</li>
				<li>
					<strong>Correo:</strong>
					<span>juanfernandomoreno777@gmail.com</span>
				</li>
			</ul> 
		</div>
		<div class="tab-full">
			<h3>Habilidades</h3>
			<p style="margin-bottom: 2rem;">Tengo amplio conocimiento en diferentes tecnicas de programacion y lenguajes de programacion que me ayudan a entender mejor y llegar a una solucion más optima.</p>
			 <ul class="skill-bars">
				{#each items.slice(0, 5) as item}
				<li>
					<div class="progress percent{item.progress}"><span>{item.progress}%</span></div>
					<strong>{item.name}</strong>
				</li>
				{/each}
			 </ul> 	
		</div>
	</div>
	<div class="button-section">
		<div class="col-twelve">
			<a href="{base}/CV.pdf" target="_blank" download title="Download CV" class="button button-primary">Descargar HV</a>
		</div>   		
	</div>
</section> 

</CommonPage>
<GeneralFooter />

<style lang="scss">

	.row{
		width: 94%;
		max-width: 1140px;
		margin: 0 auto;
	}

	.skill-bars {
		list-style: none;
		margin: 6rem 0 3rem;
	}
	.skill-bars li {
		height: .4rem;
		background: #a1a1a1;
		width: 100%;
		margin-bottom: 3.5rem;
		padding: 0;
		position: relative;
	}
	.skill-bars li strong {
		position: absolute;
		left: 0;
		top: -2rem;
		color: #313131;
		text-transform: uppercase;
		font-size: 1rem;
		line-height: 2.4rem;
	}
	.skill-bars li .progress {
		background: #313131;
		position: relative;
		height: 100%;
	}
	.skill-bars li .progress span {
		position: absolute;
		right: 0;
		top: -3.6rem;
		display: block;
		color: white;
		font-size: 0.6rem;
		line-height: 1;
		background: #313131;
		padding: .6rem .6rem;
		border-radius: 3px;
	}
	.skill-bars li .progress span::after {
		position: absolute;
		left: 50%;
		bottom: -5px;
		margin-left: -5px;
		border-right: 5px solid transparent;
		border-left: 5px solid transparent;
		border-top: 5px solid #313131;
		content: "";
	}

	.skill-bars li .percent5   { width: 5%; }
	.skill-bars li .percent10  { width: 10%; }
	.skill-bars li .percent15  { width: 15%; }
	.skill-bars li .percent20  { width: 20%; }
	.skill-bars li .percent25  { width: 25%; }
	.skill-bars li .percent30  { width: 30%; }
	.skill-bars li .percent35  { width: 35%; }
	.skill-bars li .percent40  { width: 40%; }
	.skill-bars li .percent45  { width: 45%; }
	.skill-bars li .percent50  { width: 50%; }
	.skill-bars li .percent55  { width: 55%; }
	.skill-bars li .percent60  { width: 60%; }
	.skill-bars li .percent65  { width: 65%; }
	.skill-bars li .percent70  { width: 70%; }
	.skill-bars li .percent75  { width: 75%; }
	.skill-bars li .percent80  { width: 80%; }
	.skill-bars li .percent85  { width: 85%; }
	.skill-bars li .percent90  { width: 90%; }
	.skill-bars li .percent95  { width: 95%; }
	.skill-bars li .percent100 { width: 100%; }


	/** 
	* ===================================================================
	* 08. common styles (_layout.scss)
	*
	* ------------------------------------------------------------------- 
	*/
	.grey-section {
		background: #ebebeb;
	}
	.grey-section p.lead {
		color: #7d7d7d;
	}
	.section-intro {
		max-width: 700px;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		margin-bottom: 3.6rem;
		position: relative;
	}
	.section-intro h1 {
		font-family: "poppins-semibold", serif;
		font-size: 3.6rem;
		color: #313131;
		line-height: 1.25;
		margin-bottom: 1.2rem;
	}
	.section-intro h5 {
		color: #FF0077;
		font-size: 1.6rem;
		line-height: 1.875;
		margin-bottom: 0.3rem;
		letter-spacing: .4rem;
	}

	/**
	* responsive:
	* common styles
	* ------------------------------------------------------------------- 
	*/
	@media only screen and (max-width:768px) {
		.section-intro {
			max-width: 650px;
		}
		.section-intro h1 {
			font-size: 3rem;
		}
	}
	@media only screen and (max-width:600px) {
		.section-intro h1 {
			font-size: 2.6rem;
		}
		.section-intro h5 {
			font-size: 1.5rem;
			letter-spacing: .3rem;
		}
	}
	@media only screen and (max-width:400px) {
		.section-intro h1 {
			font-size: 2.4rem;
		}
	}
	#about .section-intro {
		margin-bottom: 3rem;
	}

	.intro-info {
		margin-top: 4.2rem;
		margin-right: -30px;
		margin-left: -30px;
	}
	.intro-info img {
		height: 6rem;
		width: 6rem;
		border-radius: 50%;
		margin: 0;
		float: left;
	}
	.intro-info .lead {
		text-align: left;
		padding-left: 10rem;
	}

	.about-content {
		position: relative;
		text-align: left;
		max-width: 850px;
	}
	.about-content h3 {
		font-size: 1.5rem;
		text-transform: uppercase;
		letter-spacing: .25rem;
		margin-bottom: 1rem;
	}
	.about-content .info-list {
		list-style: none;
		margin-left: 0;
		padding-left: 0;
	}
	.about-content .info-list li {
		padding: 0 0 1.5rem 0;
		margin-bottom: .5rem;
	}
	.about-content .info-list li strong {
		color: #313131;
		text-transform: uppercase;
		font-size: 1em;
		line-height: 2.1rem;
	}
	.about-content .info-list li span {
		display: block;
		color: #888888;
		font-size: 0.9rem;
		line-height: 1;
	}
	.about-content .skill-bars {
		padding-left: 0;
		margin-top: 6rem;
	}

	.tab-full {
		width: 50%; 
		line-height: 2rem;
	}

	.tab-full p {
		margin-bottom: 4rem;
		line-height: 2rem;
	}

	.button-section {
		text-align: center;
	}
	.button-section .button {
		width: 170px;
	}

	.button	{
		display: inline-block;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: .3rem;
		line-height: 3.4rem;
		padding: 0 2rem;
		margin: 0 .3rem 1.2rem 0;
		background: #d8d8d8;
		color: #313131;
		text-decoration: none;
		cursor: pointer;
		text-align: center;
		white-space: nowrap;
		border: none;
		-moz-transition: all 0.3s ease-in-out;
		-o-transition: all 0.3s ease-in-out;
		-webkit-transition: all 0.3s ease-in-out;
		-ms-transition: all 0.3s ease-in-out;
		transition: all 0.3s ease-in-out;
	}

	.button.button-primary {
		background: #313131;
		color: #FFFFFF;
	}

	.button.button-primary:hover {
		background: #1f1f1f;
	}

	/**
	* responsive:
	* about
	* ------------------------------------------------------------------- 
	*/
	@media only screen and (max-width:1024px) {
		.intro-info {
			margin-right: 0;
			margin-left: 0;
		}
	}
	@media only screen and (max-width:768px) {
		.intro-info img {
			height: 7.8rem;
			width: 7.8rem;
		}
		.intro-info .lead {
			padding-left: 11rem;
		}
		.about-content h3 {
			text-align: center;
		}
		.about-content .info-list, .about-content .skill-bars {
			margin-bottom: 4.2rem;
		}
		.button-section .button {
			width: 100%;
			margin-bottom: 3rem;
		}
		.button-section [class*="col-"] .button:first-child {
			margin-right: 0;
		}
	}
	@media only screen and (max-width:600px) {
		.intro-info {
			text-align: center;
			margin-top: 3rem;
		}
		.intro-info img {
			height: 6.6rem;
			width: 6.6rem;
			float: none;
			display: inline-block;
		}
		.intro-info .lead {
			padding-left: 0;
			text-align: center;
		}

		.tab-full {
			width: 100%;
		}
		.tab-full p {
			margin-bottom: 2rem;
		}
	}
		

</style>
