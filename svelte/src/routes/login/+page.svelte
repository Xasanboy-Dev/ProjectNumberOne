<script lang="ts">
 import axios from "axios"
 let name:any;
 let email:any;
 let password:any;
 let lastname:any;
 function click(){
  alert("Hello World")
  if(name!==undefined && email!==undefined && password!==undefined){
 axios.post("http://localhost:8080/login",{name,email,password,lastname})
 .then(res=>{
  if(res.status==200){
      console.log(res.data.message)
    
    // Redirect to User page
    
  }else{
    alert(res.data.message)
  }
})
}else{
    alert("Please fill all the gaps.")
  }
 }
</script>
<div class="d-flex justify-content-start px-5 mx-5  fs-1">
    <a href="/"><i class="bi text-primary bi-house"></i></a>
    </div>
<div class="d-flex justify-content-center">
    <form>
<!--  -->
<div class="form-outline mb-4">
    <input type="text" id="name" bind:value={name} placeholder="John" class="form-control" />
    <label class="form-label" for="name">Name</label>
  </div>
  <!--  -->
  <div class="form-outline mb-4">
    <input type="text" id="name" bind:value={lastname} placeholder="Doe" class="form-control" />
    <label class="form-label" for="name">Lastname</label>
  </div>
        <!-- Email input -->
        <div class="form-outline mb-4">
          <input type="email" id="form2Example1"  bind:value={email} placeholder="JohnDoe@gmail.com" class="form-control" />
          <label class="form-label" for="form2Example1">Email address</label>
        </div>
      
        <!-- Password input -->
        <div class="form-outline mb-4">
          <input type="password" id="form2Example2"  bind:value={password} placeholder="123456798" class="form-control" />
          <label class="form-label" for="form2Example2">Password</label>
        </div>      
        <div class="row mb-4">
          <div class="col d-flex justify-content-center">
      
          <div class="col d-flex justify-content-center">
            <!-- Simple link -->
            <a href="/forget">Forgot password?</a>
          </div>
        </div>
      
        <!-- Submit button -->
       <div class="d-flex justify-content-center"> <button type="button" class="btn btn-primary btn-block mb-4" ><a href="/user" on:click={()=>click()}>Sign in</a> </button></div>
      
        <!-- Register buttons -->
        <div class="text-center">
          <p>Not a member? <a href="/register">Register</a></p>
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