<script>
    import Section from "./Section.svelte";
    import { gpaToNeededLetterGrade } from "./calc";
    import { gradeRef } from "./const";

	export let valid = false;
	export let reqGPA = 0;

	export let cumulativeGPA;
	export let cumulativeCredits;

	export let currentCredits;
	export let currentGPA;
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
			<a href="{gradeRef}" target="_blank">
				this.
			</a>
		</p>

		{#if currentCredits > 0.0000001}
			<p class="pt-6">
				From (only) the {currentCredits} credits you manually added,
				your term-GPA is <span class="is-underlined">{currentGPA.toFixed(2)}</span>, which
				brings your cumulative GPA from {cumulativeGPA} to
				{
					(
						parseFloat(cumulativeGPA) * (parseFloat(cumulativeCredits) / (parseFloat(currentCredits) + parseFloat(cumulativeCredits)))
						+ parseFloat(currentGPA) * (parseFloat(currentCredits) / (parseFloat(currentCredits) + parseFloat(cumulativeCredits)))
					).toFixed(2)
				}.
			</p>
		{/if}

		<p class="help pt-6">
			DISCLAIMER: Double-check the estimated letter grade; slights inaccuracies may
			occur at edge values due to floating point rounding errors.
		</p>
	</Section>
{:else}
	<p class="has-text-centered is-italic pt-4">waiting for valid input...</p>
{/if}