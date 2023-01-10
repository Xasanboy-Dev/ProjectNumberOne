<script lang="ts">
	import axios from "axios";
  let name:any
  let lastname:any
  let password:any
  let email:any
  let type:any
  function click(){
 axios.post("http://localhost:8080/login",{name,lastname,password,email,type})
}
</script>
<a href="/" class="fs-1 m-5 p-5"><i class="bi bi-house"></i></a>
<div style="" class="d-flex justify-content-center p-5 m-5">
  <form style="width:500px;">
    <div class="form-outline mb-4">
      <input type="text" name="name" bind:value={name} id="name" placeholder="John" class="form-control" />
      <label class="form-label" for="name">Your name</label>
    </div>
    <div class="form-outline mb-4">
      <input type="text" name="lastname" id="lastname" bind:value={lastname} placeholder="Doe" class="form-control" />
      <label class="form-label" for="lastname">Your lastname</label>
    </div>
    <!-- Email input -->
    <div class="form-outline mb-4">
      <input type="email" id="email" name="email" bind:value={email} placeholder="JohnDoe@gmail.com" class="form-control" />
      <label class="form-label" for="email">Email address</label>
    </div>
  
    <!-- Password input -->
    <div class="form-outline mb-4">
      <input type="password" id="form2Example2" bind:value={password} name="password" placeholder="123456789" class="form-control" />
      <label class="form-label" for="form2Example2">Password</label>
    </div>
    <div class="form-outline mb-4">
    <label><h1>I'm a </h1></label>
      <select name="type" bind:value={type} class="rounded fs-4">
      <option>headteacher</option>
      <option>teachers</option>
      <option>pupils</option>
    </select>
    </div>
  
    <!-- Submit button -->
    <div class="d-flex justify-content-center">
    <button type="submit" class="btn btn-primary btn-block mb-4"><a on:click={()=>click()} href="/user">Sign in</a></button>
  </div>
    <!-- Register buttons -->
    <div class="text-center">
      <p>Not a member?  <a href="/teachers">Register</a></p>
      <p>or sign up with:</p>
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-facebook-f"></i>
      </button>
  
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-google"></i>
      </button>
  
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-twitter"></i>
      </button>
  
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-github"></i>
      </button>
    </div>
  </form>
</div>