<script lang="ts">
	let on: boolean = true;
	import axios from 'axios';
	let name: string;
	let valueOftheCalculator: string = 'ON';
	let id: number = 0;
	let maxNum: number;
	let PlayerName: string;
	let upInput: any = '';
	let downInput: any = '';
	axios.get('http://localhost:8080/game').then((res) => {
		maxNum = +res.data.message[0].max;
		PlayerName = res.data.message[0].name;
	});
	function click() {
		if (on == true) {
			upInput = '';
			downInput = '';
			valueOftheCalculator = 'OFF';
			return (on = false);
		}
		valueOftheCalculator = 'ON';
		on = true;
	}
	function allClear() {
		upInput = '';
		downInput = '';
	}
	function clear() {
		let text = '';
		// for (let r = 0; i <= upInput.length - 2; i++) {

		// }
	}
	function plus() {
		let Num = Number(upInput);
		let Nuumber2 = +downInput.split(' ')[0];
		downInput = Num + Nuumber2;
		downInput += ' +';
		upInput = '';
	}
	function minus() {
		let Num = Number(upInput);
		let Nuumber2 = +downInput.split(' ')[0];
		downInput = Nuumber2 - Num;
		downInput += ' -';
		upInput = '';
	}
</script>

<div>
	{#if PlayerName !== undefined}
		<div class="card d-flex m-5 p-2 justify-content-center">
			<h4>Hello {PlayerName}. Your record is {maxNum} correct asnwers in a one game!</h4>
		</div>
		<div class="card d-flex  justify-content-center">
			<div class="numbers d-flex justify-content-center">
				<div class="up m-2 d-flex justify-content-center div">
					<input type="text" bind:value={upInput} class="input form-control" disabled />
				</div>
			</div>
			<div class="d-flex m-2 justify-content-center">
				<div class="down d-flex justify-content-center div">
					<input type="text" class="form-control input" bind:value={downInput} disabled />
				</div>
			</div>
			<div class="numbers d-flex justify-content-center">
				<div class="container">
					<div class="row d-flex gap-2">
						<button
							on:click={() => click()}
							class="col-sm border bg-{on == true ? 'success' : 'danger'} text-light"
							>{valueOftheCalculator}</button
						>
						<button class="col-sm border bg-danger text-light" on:click={() => allClear()}
							>AC</button
						>
						<button class="col-sm border bg-danger text-light" on:click={() => clear()}
							><i class="bi bi-backspace" /></button
						>
					</div>
					<div class="row d-flex mt-3 gap-2">
						<button class="col-sm border bg-success text-light" on:click={() => plus()}>+</button>
						<button class="col-sm border bg-success text-light" on:click={() => minus()}>-</button>
						<button class="col-sm border bg-success text-light">*</button>
					</div>
					<div class="row  mt-3 d-flex gap-2">
						<button class="col-sm border bg-success text-light">:</button>
						<button class="col-sm border bg-success text-light">√x</button>
						<button class="col-sm border bg-success text-light">x**2</button>
					</div>
					<div class="row  mt-3 d-flex gap-2">
						<button
							class="col-sm  border bg-success text-light"
							on:click={() => (on == true ? (upInput += '1') : alert('Turn on the calculator!'))}
							>1</button
						>
						<button
							class="col-sm  border bg-success text-light"
							on:click={() => (on == true ? (upInput += '2') : alert('Turn on the calculator!'))}
							>2</button
						>
						<button
							class="col-sm  border bg-success text-light"
							on:click={() => (on == true ? (upInput += '3') : alert('Turn on the calculator!'))}
							>3</button
						>
					</div>
					<div class="row  mt-3 d-flex gap-2">
						<button
							class="col-sm  border bg-success text-light"
							on:click={() => (on == true ? (upInput += '4') : alert('Turn on the calculator!'))}
							>4</button
						>
						<button
							class="col-sm  border bg-success text-light"
							on:click={() => (on == true ? (upInput += '5') : alert('Turn on the calculator!'))}
							>5</button
						>
						<button
							class="col-sm  border bg-success text-light"
							on:click={() => (on == true ? (upInput += '6') : alert('Turn on the calculator!'))}
							>6</button
						>
					</div>
					<div class="row d-flex mt-3 gap-2">
						<button
							class="col-sm  border bg-success text-light"
							on:click={() => (on == true ? (upInput += '7') : alert('Turn on the calculator!'))}
							>7</button
						>
						<button
							class="col-sm  border bg-success text-light"
							on:click={() => (on == true ? (upInput += '8') : alert('Turn on the calculator!'))}
							>8</button
						>
						<button
							class="col-sm  border bg-success text-light"
							on:click={() => (on == true ? (upInput += '9') : alert('Turn on the calculator!'))}
							>9</button
						>
					</div>
					<div class="row d-flex mt-3 gap-2">
						<button class="col-sm  border bg-primary text-light">=</button>
						<button
							class="col-sm  border bg-primary text-light"
							on:click={() => (on == true ? (upInput += '0') : alert('Turn on the calculator!'))}
							>0</button
						>
					</div>
					<div class="mt-3" />
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.container {
		width: 750px;
	}
	.col-sm {
		cursor: pointer;
	}
	button {
		font-size: 25px;
	}
	.div {
		display: flex;
		justify-content: center;
		width: 750px;
	}
	.input {
		text-align: center;
		font-size: 25px;
	}
</style>
