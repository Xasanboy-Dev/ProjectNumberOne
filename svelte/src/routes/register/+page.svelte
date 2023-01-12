<script lang="ts">
	import { redirect } from "@sveltejs/kit";
    import axios from "axios"
    let name:any
    let lastname:any
    let email:any
    let password:any
    function click(){
  if(name!==undefined && lastname!==undefined && email!==undefined && password!==undefined){
    axios.post("http://localhost:8080/users",{name,lastname,email,password})
    .then(res=>{
   if(res.status==201){
    alert(res.data.message)

    // Redirect to Login page 

    throw redirect(307,"/register")
   }else{
    alert()
   }
    })
  }else{
    alert("Please fill all gaps!")
  }
    }
</script>
<main>
    <section class="vh-100" style="background-color: #eee;">
        <a href="/"><i class="bi fs-1 mx-5 px-5 text-primary bi-house"></i></a>
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-12 col-xl-11">
              <div class="card text-black" style="border-radius: 25px;">
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
      
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
      
                      <form class="mx-1 mx-md-4">
      
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input type="text" bind:value={name} id="form3Example1c" class="form-control" />
                            <label class="form-label" for="form3Example1c">Your Name</label>
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input type="text" bind:value={lastname} id="lastname" class="form-control" />
                              <label class="form-label" for="lastname">Your Lastname</label>
                            </div>
                          </div>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input type="email" id="form3Example3c" bind:value={email} class="form-control" />
                            <label class="form-label" for="form3Example3c">Your Email</label>
                          </div>
                        </div>
      
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input type="password" bind:value={password} id="form3Example4c" class="form-control" />
                            <label class="form-label" for="form3Example4c">Password</label>
                          </div>
                        </div>
                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" class="btn btn-primary btn-lg" on:click={()=>click()}>Register</button>
                        </div>
      
                      </form>
      
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
      
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        class="img-fluid" alt="Sample image">
      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</main>