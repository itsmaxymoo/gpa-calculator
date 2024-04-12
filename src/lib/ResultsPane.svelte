<script>
    import Section from "./Section.svelte";
    import { gpaToNeededLetterGrade } from "./calc";

	export let valid = false;
	export let reqGPA = 0;
</script>

<h2 class="has-text-weight-normal">Results:</h2>

{#if valid}
	<Section>
		<p class="has-text-centered">
			<span class="is-size-1 has-text-weight-semibold title mb-0 pb-0">
				{reqGPA.toFixed(2)}
			</span>
			<span class="help mt-0">
				<i class="icon las la-arrow-up"></i>
				Your needed GPA
				<i class="icon las la-arrow-up"></i>
			</span>
		</p>

		<p class="has-text-centered is-size-4 pt-4">
			That's about a
			<span class="has-text-weight-semibold is-underlined">
				{gpaToNeededLetterGrade(reqGPA)}
			</span>
			term-average letter grade according to
			<a href="https://registrar.psu.edu/grades/grade-point-average.cfm" target="_blank">
				this.
			</a>
		</p>
		<p class="help">
			DISCLAIMER: Double-check the estimated letter grade; slights inaccuracies may
			occur at edge values due to floating point rounding errors.
		</p>
	</Section>
{:else}
	<p class="has-text-centered is-italic pt-4">waiting for valid input...</p>
{/if}