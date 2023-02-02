<script lang="ts">
	import { ValidateEmail, ValidatorPassword, ValidName } from './../login/function';
	import axios from 'axios';
	let name: string;
	let lastname: string;
	let email: string;
	let password: string;
	function Validate(email: boolean, pass: any) {
		if (email && pass) {
			if (name !== undefined && lastname !== undefined) {
				if (ValidName(name, lastname)) {
				}
			} else {
				alert('Please fill all the gaps!');
			}
		} else {
			if (!email) {
				return alert(`Your email isn't valid!`.toUpperCase());
			}
			alert('length must be lonegr than 6. Must be more than 1 deciaml!'.toUpperCase());
		}
	}
</script>

<section class="vh-100" style="background-color: #2779e2;">
	<div class="container h-100">
		<div class="row d-flex justify-content-center align-items-center h-100">
			<div class="col-xl-9">
				<div class="d-flex justify-content-center">
					<h1 class="text-white mb-4">Registration</h1>
				</div>
				<div class="card" style="border-radius: 15px;">
					<div class="d-flex justify-content-center card">
						<a href="/login" class="text-decoration-none btn border text-danger fs-4"
							>Click to login</a
						>
					</div>
					<div class="card-body">
						<div class="row align-items-center pt-4 pb-3">
							<div class="col-md-3 ps-5">
								<h6 class="mb-0">Your Name</h6>
							</div>
							<div class="col-md-9 pe-5">
								<input type="text" bind:value={name} class="form-control form-control-lg" />
							</div>
						</div>

						<hr class="mx-n3" />

						<div class="row align-items-center pt-4 pb-3">
							<div class="col-md-3 ps-5">
								<h6 class="mb-0">Your lastname</h6>
							</div>
							<div class="col-md-9 pe-5">
								<input type="text" bind:value={lastname} class="form-control form-control-lg" />
							</div>
						</div>
						<hr class="mx-n3" />
						<div class="row align-items-center py-3">
							<div class="col-md-3 ps-5">
								<h6 class="mb-0">Email address</h6>
							</div>
							<div class="col-md-9 pe-5">
								<input
									type="email"
									bind:value={email}
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
									class="form-control form-control-lg"
									id="formFileLg"
									type="password"
									bind:value={password}
								/>
								<div class="small text-muted mt-2">Your password</div>
							</div>
						</div>

						<hr class="mx-n3" />

						<div class="px-5 py-4 d-flex justify-content-center">
							<button
								type="submit"
								class="btn btn-primary btn-lg"
								on:click={() => Validate(ValidateEmail(email), ValidatorPassword(password))}
								>Send application</button
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
