<script lang="ts">
	import { onMount } from 'svelte';
	import { getAssetURL } from '$lib/data/assets';
	import UIcon from '../Icon/UIcon.svelte';
	import { items } from '@data/services';
	import type { Service } from '$lib/types';
	import CardTitle from '../Card/CardTitle.svelte';
	import CardDivider from '../Card/CardDivider.svelte';
	import ChipIcon from '../Chip/ChipIcon.svelte';
	import { base } from '$app/paths';
	import Card from '../Card/Card.svelte';

	

	// export let items: Array<Skill> = [];
	const delay = 5000;

	let element: HTMLElement;

	let timeout: unknown;
	let index = 0;
	let toRight = true;

	$: {
		if (element) {
			element.scroll({
				left: index * 520,
				behavior: 'smooth'
			});
		}
	}

	const slide = (right: boolean) => {
		if (right) {
			if (index < items.length - 1) {
				index = index + 1;
			} else {
				index = index - 1;
				toRight = false;
			}
		} else {
			if (index > 0) {
				index = index - 1;

			} else {
				index = index + 1;
				toRight = true;
			}
		}
	};

	const toggle = (right: boolean) => {
		clearTimeout(timeout as number);

		timeout = setTimeout(() => {
			slide(right);

			toggle(toRight);
		}, delay);
	};

	const toggleLeft = () => {
		clearTimeout(timeout as number);
		toRight = false;
		slide(false);
		toggle(toRight);
	};

	const toggleRight = () => {
		clearTimeout(timeout as number);
		toRight = true;
		slide(true);
		toggle(toRight);
	};

	onMount(() => {
		toggle(true);
	});

	
	let display: Array<Service> = [];

	$: {
		display = items;
	}

	
</script>

<div class="carrousel flex-[0.5] row-center" style="margin: 0 auto; margin-top: 50px">
	<button
		class="row-center font-500 p-5px m-y-0px m-x-10px cursor-pointer border-1px border-solid border-[var(--border)] bg-transparent rounded-[50%] hover:border-[var(--border-hover)]"
		on:click={toggleLeft}
		on:keyup
		on:keydown
		on:keypress
	>
		<UIcon icon="i-carbon-chevron-left" />
	</button>

	<div bind:this={element} class="row overflow-hidden box-content w-500px">
			{#each display as service}
				<div class='box-content w-500px p-5 col-center'>
					<img class="w-120px h-120px aspect-square" src={getAssetURL(service.logo)} alt={service.name} />
					<span class="text-center m-t-20px"><CardTitle title={service.name} /></span>
					<br>
					<CardDivider  classes="w-495px"/>
					<div class="col sm:h-100px md:h-160px">
						<p class="text-[1em] text-[var(--secondary-text)] m-t-20px m-b-40px text-center flex-1 line-clamp-3">
							{ service.description }	
						</p>
					</div>
					<CardDivider classes="w-495px" />
					<div class="row flex-wrap">
						{#each service.skills as tech}
							<ChipIcon
								logo={getAssetURL(tech.logo)}
								name={tech.name}
								href={`${base}/skills/${tech.slug}`}
							/>
						{/each}
					</div>
				</div>

			{/each}

	</div>

	<button
		class="row-center font-500 p-5px m-y-0px m-x-10px cursor-pointer border-1px border-solid border-[var(--border)] bg-transparent rounded-[50%] hover:border-[var(--border-hover)]"
		on:click={toggleRight}
		on:keyup
		on:keydown
		on:keypress
	>
		<UIcon icon="i-carbon-chevron-right" />
	</button>
</div>
<style>
	.w-500px {
		width: 520px;
	}
	.w-495px {
		width: 495px;
	} 
	.p-5{
		padding: 5px 12px;
	}
	
</style>
