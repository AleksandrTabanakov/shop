<script >
	
	/** @type {number} */
	let number;

	async function roll() {
		const response = await fetch('/dom');
		number = await response.json();
	}
	let colore = 'red';

function changeColor() {
  colore = colore === 'red' ? 'blue' : 'red';
}

</script>

<a href={`/authorization`} > auth </a>
<a href={`/auth/registration`}> registrat </a>
<a href={`/docs`}> docs </a>
<a href={`/product`}> product </a>



<div class={colore} on:click={changeColor}>  </div>
<button on:click={roll}>Roll the dice</button>

{#if number !== undefined}
	<p class="number">You rolled a {number}</p>
{/if}


<style>
	.red {
	  width: 100px;
	  height: 100px;
		background-color: brown;
	}
	.blue {
	  width: 100px;
	  height: 100px;
		background-color: yellow;
	}
</style>
