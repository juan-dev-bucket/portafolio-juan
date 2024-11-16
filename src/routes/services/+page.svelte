<script lang="ts">
	import CommonPage from "$lib/components/CommonPage.svelte";
    import ServiceCard from "$lib/components/ServiceCard/ServiceCard.svelte";
    import { skills } from '@data/home';
	import { items } from '@data/services';
    import Chip from '$lib/components/Chip/Chip.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
    import Carrousel from "$lib/components/Carrousel/Carrousel.svelte";
	import type { Service } from '$lib/types';
	import ServiceCarrousel from "$lib/components/ServiceCarrousel/ServiceCarrousel.svelte";
	import { title } from '@data/services';
	import Footer from "$lib/components/Footer.svelte";

	let display: Array<Service> = [];

	$: {
		display = items;
	}

</script>

<CommonPage title={title}>
	
	<ServiceCarrousel />

</CommonPage>
<Footer />

<style lang="scss">
	.projects-list {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;

		@media (max-width: 1350px) {
			grid-template-columns: repeat(2, 1fr);
		}
		@media (max-width: 850px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>