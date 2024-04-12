<script>
    import { createEventDispatcher } from "svelte";

	export let title = "Input";
	export let placeholder = "";
	export let help="";
	let text = "";
	const dispatch = createEventDispatcher();

	function validate(){
		if(text == "."){
			text = "0.";
		}

		var value = parseFloat(text);

		if(!(value >= 0 && value != undefined)){
			text = "";
		}

		dispatch("validInput", {
			text: text
		});
	}
</script>

<div class="field">
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label class="label">{title}</label>
	<div class="control">
		<input class="input" type="text" min=0 placeholder="{ placeholder ? placeholder : title}" bind:value={text} on:input={validate}>
	</div>
	<p class="help" hidden="{help == ""}">{help}</p>
</div>