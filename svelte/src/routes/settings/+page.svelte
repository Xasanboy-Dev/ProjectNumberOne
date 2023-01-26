<script lang="ts">
	import axios from 'axios';
	import Age from '../age.svelte';
	import Country from '../country.svelte';
	let country: any;
	let age: any;
	let gender: any;
	let user: any;
	let account: any;
	axios
		.get('http://localhost:8080/settings')
		.then((res) => {
			user = res.data.message[0];
		})
		.catch((err) => {
			console.log(err.message);
		});
	let foto: any;
	function save(id: string) {
		if (foto == undefined) {
			alert('Your profile image is not updated!');
		}
		const body = { country, age, gender, account, foto };
		axios
			.post(`http://localhost:8080/setting/${id}`, { body })
			.then((res) => {
				alert(res.data.message);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}
	let image: HTMLInputElement;
	function download(input: HTMLInputElement) {
		let file: any = input.files;
		let name: any = file[0];
		let reader = new FileReader();
		if (name.size / 1024 <= 25) {
			reader.readAsDataURL(name);
			reader.onload = function () {
				foto = reader.result?.toString();
			};
			return;
		} else {
			alert(`Your image size is very large.
Please updated your image!`);
			foto = undefined;
		}
	}
</script>

<main>
	<div class="fs-1 px-5 bg-danger text-warning">
		<a href="/user"><i class="bi bi-arrow-return-left border border-warning px-2 rounded" /> </a>
	</div>
	{#if user !== undefined}
		<div class="p-5 m-5">
			<div class="container">
				<div class="row">
					<div class="col"><h2>Your name:{user.name}</h2></div>
					<div class="col"><h2>Your lastname: {user.lastname}</h2></div>
					<div class="w-100" />
					<div class="col"><h3>Your password: {user.password}</h3></div>
					<div class="col"><h3>Your email: {user.email}</h3></div>
				</div>
			</div>
			<div class="d-flex justify-content-center">
				<h1>You must select your <i class="text-danger">data</i> in here for safity!</h1>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<div class="col p-2">
					<b>Where do you live?:</b>
					<select bind:value={country} class="rounded"><Country /></select>
				</div>
				<div class="col p-2">
					<b>When you was born?:</b> <select class="rounded" bind:value={age}><Age /></select>
				</div>
				<div class="w-100 p-2" />
				<div class="d-flex justify-content-center">
					<div class="col">
						<b>What is your gender?: </b><select class="rounded" bind:value={gender}
							><option>Male</option><option>Female</option></select
						>
					</div>
					<div class="col">
						<b>How should your account be?:</b><select class="rounded" bind:value={account}
							><option>Public</option><option>Private</option></select
						>
					</div>
				</div>
				<div class="w-100 p-2" />
				<div class="col p-2">
					<h4 class="d-flex justify-content-center mt-5">
						Please choice your foto for your profile<i class="bi bi-card-image" />:
					</h4>
					<input
						bind:this={image}
						on:change={() => download(image)}
						name="img"
						accept="image/*"
						placeholder="PRODUCT IMAGE URL"
						class="form-control input-md"
						type="file"
					/>
				</div>
				<button class="m-5 p-2 rounded fs-3" on:click={() => save(user.id)}>Save my data</button>
			</div>
		</div>
	{/if}
</main>
