<script lang="ts">
	import { computeExactDuration, countMonths, getMonthName } from '$lib/utils/helpers';
	import Chip from '../Chip/Chip.svelte';
	import Card from '../Card/Card.svelte';
	import CardTitle from '../Card/CardTitle.svelte';
	import CardLink from '../Card/CardLink.svelte';
	import CardDivider from '../Card/CardDivider.svelte';
	import ChipIcon from '../Chip/ChipIcon.svelte';
	import CardLogo from '../Card/CardLogo.svelte';
	import type { Service } from '$lib/types';
	import { getAssetURL } from '$lib/data/assets';
	import { base } from '$app/paths';
	import UIcon from '../Icon/UIcon.svelte';

	export let service: Service;
	// $: months = countMonths(project.period.from, project.period.to);
	// $: period = `${months} month${months > 1 ? 's' : ''}`;
	// $: period = `${getTimeDiff(
	// 	project.period.from,
	// 	project.period.to ?? new Date(Date.now() + 1000 * 60 * 60 * 24)
	// )}`;
	// $: period = computeExactDuration(project.period.from, project.period.to);
	// $: from = `${getMonthName(project.period.from.getMonth())} ${project.period.from.getFullYear()}`;
	// $: to = project.period.to
	// 	? `${getMonthName(project.period.to.getMonth())} ${project.period.to.getFullYear()}`
	// 	: 'now';
</script> 

<Card>
	<CardLogo alt={service.name} src={getAssetURL(service.logo)} size={40} radius={'0'} />
	<div class="m-t-20px row justify-between items-center">
		<CardTitle title={service.name} />
		<div class="row">
			{#each service.links as link}
				<CardLink label={link.label ?? ''} to={link.to} />
			{/each}
		</div>
	</div>
	<CardDivider />
	<div class="col m-b-15px justify-between text-[var(--secondary-text)] text-0.85em">
		<div class="row items-center gap-2">
			<UIcon icon="i-carbon-assembly-cluster" classes="text-1.25em" />
			<p>{service.type}</p>
		</div>
		<CardDivider />
		<div class="row items-center gap-2">
			<UIcon icon="i-carbon-time" classes="text-1.25em" />
			<p></p>
		</div>
		<CardDivider />
	</div>
	<div class="col sm:h-100px md:h-160px">
		<p class="text-[0.9em] text-[var(--secondary-text)] m-t-20px m-b-40px flex-1 line-clamp-3">
			{ service.description }	
		</p>
	</div>
	<div class="row justify-between text-0.8em font-400">
	</div>
	<CardDivider />
	<div class="row flex-wrap">
		{#each service.skills as tech}
			<ChipIcon
				logo={getAssetURL(tech.logo)}
				name={tech.name}
				href={`${base}/skills/${tech.slug}`}
			/>
		{/each}
	</div>
</Card>
