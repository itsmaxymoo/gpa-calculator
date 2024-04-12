<script>
	
	import AppContainer from "./lib/AppContainer.svelte";
    import NumericInput from "./lib/NumericInput.svelte";
    import ResultsPane from "./lib/ResultsPane.svelte";
    import Section from "./lib/Section.svelte";
	import Title from "./lib/Title.svelte";
    import UiMainArrow from "./lib/UIMainArrow.svelte";

</script>

<AppContainer>
	<Title />

	<Section>
		<div class="columns">
			<div class="column is-5">
				<h2>To begin, enter the following:</h2>
	
				<NumericInput title="Existing completed credits"
					help="This is the number of credits completed BEFORE this current term."/>
				<NumericInput title="Existing finalized GPA"
					help="This is your cumulative GPA up to and including the PREVIOUS term."/>
				<NumericInput title="Credits this period"
					help="The number of credits you are enrolled in this semester (or term/whatever)." />
				<NumericInput title="Desired GPA" />
			</div>
			<div class="column is-2">
				<UiMainArrow/>
			</div>
			<div class="column is-5">
				<ResultsPane/>
			</div>
		</div>
	</Section>
</AppContainer>
