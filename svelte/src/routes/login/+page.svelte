<script lang="ts">
	import { ValidateEmail, ValidatorPassword } from './function';

	function Validate(email: boolean, pass: any) {
		if (email && pass) {
			alert('Good!');
		}
	}

	let email: string;
	let password: string;
</script>

<section class="vh-100" style="background-color: #CD0404;">
	<div class="container h-100">
		<div class="row d-flex justify-content-center align-items-center h-100">
			<div class="col-xl-9">
				<div class="d-flex justify-content-center">
					<h1 class="text-white mb-4">Login</h1>
				</div>
				<div class="card" style="border-radius: 15px;">
					<div class="d-flex justify-content-center card">
						<a href="/register" class="text-decoration-none btn border text-primary fs-4"
							>Click to registration</a
						>
					</div>
					<div class="card-body">
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
