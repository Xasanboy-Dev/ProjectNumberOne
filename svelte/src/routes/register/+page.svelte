<script lang="ts">
	import { emailValidator, passwordVaidator } from '../login/functions';
	import axios from 'axios';
	import bcrypt from 'bcrypt';
	let name: string;
	let lastname: string;
	let email: string;
	let password: string;

	function clicked(emails: boolean, pass: boolean) {
		let passwords = bcrypt.hash(password, 7);
		console.log(passwords);
		const USER: any = { name, lastname };
		if (emails && pass) {
			if (!name || !lastname) {
				alert('Please fill all the gaps!');
			} else {
				axios
					.post('http://localhost:8080/user/register', { name, lastname, password, email })
					.then((res) => {
						if (res.status == 201) {
							alert(res.data.message);
						} else if (res.status == 500) {
							alert('Your account is already exist!');
						}
					})
					.catch((e) => {
						console.log(e.message);
					});
			}
		} else {
			if (!email) {
				return alert('Your email is not valid!');
			}
			alert("Your password isn't valid!");
		}
	}
</script>

<section class="vh-100" style="background-color: #2779e2;">
	<div class="container h-100">
		<div class="row d-flex justify-content-center align-items-center h-100">
			<div class="col-xl-9">
				<form action="">
					<div class="d-flex justify-content-center">
						<h1 class="text-white mb-4">Apply for a job</h1>
					</div>
					<div class="card" style="border-radius: 15px;">
						<div class="card-body">
							<div class="row align-items-center pt-4 pb-3">
								<div class="col-md-3 ps-5">
									<h6 class="mb-0">First name</h6>
								</div>
								<div class="col-md-9 pe-5">
									<input
										required
										type="text"
										bind:value={name}
										class="form-control form-control-lg"
									/>
								</div>
							</div>
							<hr class="mx-n3" />

							<div class="row align-items-center pt-4 pb-3">
								<div class="col-md-3 ps-5">
									<h6 class="mb-0">Last name</h6>
								</div>
								<div class="col-md-9 pe-5">
									<input
										required
										type="text"
										bind:value={lastname}
										class="form-control form-control-lg"
									/>
								</div>
							</div>

							<hr class="mx-n3" />

							<div class="row align-items-center py-3">
								<div class="col-md-3 ps-5">
									<h6 class="mb-0">Email address</h6>
								</div>
								<div class="col-md-9 pe-5">
									<input
										required
										bind:value={email}
										type="email"
										class="form-control form-control-lg"
										placeholder="example@example.com"
									/>
								</div>
							</div>
							<hr class="mx-n3" />
							<div class="row align-items-center py-3">
								<div class="col-md-3 ps-5">
									<h6 class="mb-0">Password</h6>
								</div>
								<div class="col-md-9 pe-5">
									<input
										required
										bind:value={password}
										type="password"
										class="form-control form-control-lg"
										placeholder="1234546789..."
									/>
								</div>
							</div>
							<hr class="mx-n3" />
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<div
								on:click={() => clicked(emailValidator(email), passwordVaidator(password))}
								class="px-5  py-4 d-flex justify-content-center"
							>
								<button type="submit" class="btn btn-primary btn-lg">Send application</button>
							</div>
							<div class="d-flex   justify-content-center text-decoration-none">
								<a href="/login">
									<p>For <a href="/login" class="text-decoration-none">login</a></p>
								</a>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>
