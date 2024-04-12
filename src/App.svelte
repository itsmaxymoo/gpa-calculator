<script>
	
	import AppContainer from "./lib/AppContainer.svelte";
    import NumericInput from "./lib/NumericInput.svelte";
    import ResultsPane from "./lib/ResultsPane.svelte";
    import Section from "./lib/Section.svelte";
	import Title from "./lib/Title.svelte";
    import UiMainArrow from "./lib/UIMainArrow.svelte";

	let existingCredits = "";
	let existingGPA = "";
	let currentCredits = "";
	let desiredGPA = "";

	let neededGPA = 0;
	let calculationValid = false;

	function onValidInput(){
		if(("" + existingCredits + existingGPA + currentCredits + desiredGPA).length >= 4){
			// valid input!
			calculationValid = true;
		}
		else{
			calculationValid = false;
		}
	}

	function clearAll(){
		existingCredits = "";
		existingGPA = "";
		currentCredits = "";
		desiredGPA = "";

		onValidInput();
	}

</script>

<AppContainer>
	<Title />

	<Section>
		<div class="columns">
			<div class="column is-5">
				<h2>To begin, enter the following:</h2>
	
				<NumericInput title="Existing completed credits" bind:text={existingCredits} on:validInput={onValidInput}
					help="This is the number of credits completed BEFORE this current term."/>
				<NumericInput title="Existing finalized GPA" bind:text={existingGPA} on:validInput={onValidInput}
					help="This is your cumulative GPA up to and including the PREVIOUS term."/>
				<NumericInput title="Credits this period" bind:text={currentCredits} on:validInput={onValidInput}
					help="The number of credits you are enrolled in this semester (or term/whatever)." />
				<NumericInput title="Desired GPA" bind:text={desiredGPA} on:validInput={onValidInput} />

				<hr />

				<button class="button is-fullwidth" on:click={clearAll}>Clear All</button>
			</div>
			<div class="column is-2">
				<UiMainArrow/>
			</div>
			<div class="column is-5">
				<ResultsPane bind:valid={calculationValid} bind:reqGPA={neededGPA} />
			</div>
		</div>
	</Section>
</AppContainer>
