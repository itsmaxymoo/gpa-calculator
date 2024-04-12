<script>
	export let title = "Input";
	export let placeholder = "";
	export let help="";
</script>

<div class="field">
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label class="label">{title}</label>
	<div class="control">
		<input class="input" type="number" min=0 placeholder="{ placeholder ? placeholder : title}">
	</div>
	<p class="help" hidden="{help == ""}">{help}</p>
</div>