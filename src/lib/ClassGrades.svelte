<script>
    import { letterGradeToGPA } from "./calc";

	export let totalCredits = 0;
	export let totalGPA = 0;
	let count = 0;
	let grades = [];
	let addGrade = "A";
	let addCredits = "3";
	let valid = true;

	function calcTotals(){
		let creditSum = 0;

		grades.forEach(grade => {
			creditSum += parseFloat(grade.credits);
		});

		let gpaSum = 0;
		grades.forEach(grade => {
			gpaSum += (grade.credits / creditSum * letterGradeToGPA(grade.grade));
		});

		totalCredits = creditSum;
		totalGPA = gpaSum;
	}

	function add(){
		let credNum = parseFloat(addCredits);
		if(!credNum){
			valid = false;
			return;
		}
		else{
			valid = true;
		}

		++count;
		grades = [...grades, {id: count, grade: addGrade, credits: parseFloat(addCredits)}];

		addGrade = "A";
		addCredits = "3";

		calcTotals();
	}

	function del(id){
		let index = -1;
		for(let i = 0; i < grades.length; ++i){
			if(grades[i].id == id){
				index = i;
				break;
			}
		}

		if(index < 0){
			return;
		}

		grades.splice(index, 1);
		grades = grades;

		calcTotals();
	}
</script>

<div class="field has-addons">
	<div class="field-label is-medium has-text-left">
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label class="label">
			(Optional) Add your classes:
		</label>
	</div>
	<p class="control">
		<span class="select">
			<select bind:value={addGrade}>
				<option>A</option>
				<option>A-</option>
				<option>B+</option>
				<option>B</option>
				<option>B-</option>
				<option>C+</option>
				<option>C</option>
				<option>D</option>
				<option>F</option>
			</select>
		</span>
	</p>
	<p class="control">
		<input class="input {!valid ? "is-danger" : ""}" placeholder="credits" size=4 bind:value={addCredits}/>
	</p>
	<p class="control">
		<button class="button is-link" on:click={add}>+</button>
	</p>
</div>

<div class="columns is-multiline">
	{#each grades as grade}
		<div class="column">
			<div class="field has-addons">
				<p class="control">
					<span class="select">
						<select bind:value={grade.grade}>
							<option>A</option>
							<option>A-</option>
							<option>B+</option>
							<option>B</option>
							<option>B-</option>
							<option>C+</option>
							<option>C</option>
							<option>D</option>
							<option>F</option>
						</select>
					</span>
				</p>
				<p class="control">
					<input class="input" size=4 bind:value={grade.credits}/>
				</p>
				<p class="control">
					<button class="button is-danger" on:click={() => {del(grade.id)}}>
						<span class="icon is-large"><i class="icon las la-minus-circle"></i></span>
					</button>
				</p>
			</div>
		</div>
	{/each}
</div>