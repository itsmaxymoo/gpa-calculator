<script>
	
	import AppContainer from "./lib/AppContainer.svelte";
    import ClassGrades from "./lib/ClassGrades.svelte";
    import Footer from "./lib/Footer.svelte";
    import NumericInput from "./lib/NumericInput.svelte";
    import ResultsPane from "./lib/ResultsPane.svelte";
    import Section from "./lib/Section.svelte";
	import Title from "./lib/Title.svelte";
    import UiMainArrow from "./lib/UIMainArrow.svelte";
    import { calcNeededGPA } from "./lib/calc";

	let existingCredits = "";
	let existingGPA = "";
	let currentCredits = "";
	let desiredGPA = "";

	let neededGPA = 0;
	let calculationValid = false;

	let totalCurrentCredits;
	let totalCurrentGPA;

	function onValidInput(){
		if((existingCredits.length * existingGPA.length * currentCredits.length * desiredGPA.length) > 0){
			neededGPA = calcNeededGPA(
				parseFloat(existingCredits),
				parseFloat(existingGPA),
				parseFloat(currentCredits),
				parseFloat(desiredGPA)
			);

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
				<h2 class="has-text-weight-normal">To begin, enter the following:</h2>
	
				<NumericInput title="Existing completed credits" bind:text={existingCredits} on:validInput={onValidInput}
					help="This is the number of credits completed BEFORE this current term."/>
				<NumericInput title="Existing finalized GPA" bind:text={existingGPA} on:validInput={onValidInput}
					help="This is your cumulative GPA up to and including the PREVIOUS term."/>
				<NumericInput title="Credits this period" bind:text={currentCredits} on:validInput={onValidInput}
					help="The number of credits you are enrolled in this semester (or term/whatever)." />
				<NumericInput title="Desired GPA" bind:text={desiredGPA} on:validInput={onValidInput} />

				<hr />
				
				<ClassGrades bind:totalCredits={totalCurrentCredits} bind:totalGPA={totalCurrentGPA}/>
			</div>
			<div class="column is-2">
				<UiMainArrow/>
			</div>
			<div class="column is-5">
				<ResultsPane bind:valid={calculationValid} bind:reqGPA={neededGPA}
					bind:currentCredits={totalCurrentCredits} bind:currentGPA={totalCurrentGPA}
					bind:cumulativeGPA={existingGPA} bind:cumulativeCredits={existingCredits} />
			</div>
		</div>
	</Section>

	<Footer />
</AppContainer>
