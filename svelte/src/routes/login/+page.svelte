<script lang="ts">
 import axios from "axios"
 let email:any;
 let password:any;
 function click(){
  if(email!==undefined && password!==undefined){
 axios.post('http://localhost:8080/login',{email,password})
 .then(res=>{
 if(res.status==200){
  window.location.href = "http://localhost:5173/user"
 }else{
  alert("Please check your data! Then try again.")
 }
})
}
}
function sent(){
  if(email==undefined){
    alert("Please fill your email and then we can send a code.😕😕")
  }
}
</script>
<div class="d-flex justify-content-start px-5 mx-5  fs-1">
    <a href="/"><i class="bi text-primary bi-house"></i></a>
    </div>
<div class="d-flex justify-content-center">
    <form>
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
            <p style="cursor: pointer;font-size:small" on:click={()=>sent()} class='btn border-1 border-dark text-primary'>Forgot password?</p>
          </div>
        </div>
      
        <!-- Submit button -->
       <div class="d-flex justify-content-center"> <button type="button" class="btn btn-primary btn-block mb-4" on:click={()=>click()}>Sign in</button></div>
      
        <!-- Register buttons -->
        <div class="text-center">
          <p>Not a member? <a href="/register" style="font-size:small" class="text-decoration-none btn text-primary border-1 border-dark">Register</a></p>
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