<script>
    import Section from "./Section.svelte";

	export let valid = false;
</script>

<h2>Results:</h2>

{#if valid}
	//
{:else}
	<p class="has-text-centered is-italic pt-4">waiting for valid input...</p>
{/if}