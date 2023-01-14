<script lang="ts">
  import axios from "axios";
  function click(id:string){
    axios.post(`http://localhost:8080/chatting/${id}`)
    .then(res=>{
        if(res.status==200){
            window.location.href = `http://localhost:5173/chatting`
        }else{
            alert(res.data.message)
        }
    }).catch(err=>{
        console.log(err.message)
    })
  }
  let user:any
  let Users:any
  let one:any
  let text:any
  function input(){
    if(text==undefined || text==""){ 
  axios.get(`http://localhost:8080/dashboard/all`)
 .then(res=>{
  user = res.data.message.user
   Users = res.data.message.users 
    one = user[0][0]
  }).catch(err=>{
    console.log(err.message)
  })
}else{
  axios.get(`http://localhost:8080/dashboard/${text}`)
  .then(res=>{
       user = res.data.message.user
       Users = res.data.message.users 
       one = user[0][0]
  }).catch(err=>{
    console.log(err.message)
  })
}
}
input()
function hello(){
 if(user!==undefined){ 
   axios.post("http://localhost:8080/out",{user})
   .then(res=>{
     if(res.status==200){
       window.location.href = "http://localhost:5173/logout"
     }else{
       alert(res.data.message)
     }
   })
 }
 }
</script>
<main>
    <div class="d-flex justify-content-center">
        <div class="bg-primary m-2 rounded" style=" width:22%;height:650px;border:2px solid black;">
          <div class="d-flex justify-content-center">
             <div style="background-color:red;width:150px;margin-top:10px;height:150px;border-radius:75px;font-size:150px" class=" d-flex justify-content-center align-items-center ">
                {#if one!==undefined}
                    <h1 style="font-size: 90px;">{one}</h1>
                {/if}
              </div>
          </div>
          <ul class="px-5 pt-2 fs-3" style="cursor: pointer;">
            <li class="d-flex gap-2 pt-3" style="cursor:pointing;"><i class="text-warning bi bi-house"></i>Dashboard</li>
            <li class="d-flex gap-2 pt-3">
            <i class="bi bi-gear text-warning"></i>Settings
            </li>
            <li class="d-flex gap-2 pt-3"><i class="text-warning bi bi-chat"></i>Chatting</li>
            <li class="d-flex gap-2 pt-3"><i class="text-warning bi bi-bag-dash-fill"></i>Shopping</li>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <li class="d-flex gap-2 pt-3" on:click={()=>hello()}><i class="text-warning bi bi bi-box-arrow-left"></i>Log out</li>
          </ul>
        </div>
        <div class="bg-warning m-2 mx-0 d-flex gap-5 justify-content-center" style="width:75%;border:2px solid black;height:100%;">
            {#if Users!==undefined}
            <div class="p-5">
              <label for="someone" class="d-flex justify-content-center"><h3>Do you want to search someone in here?</h3></label>
              <div class="d-flex mx-5 px-5 justify-content-center align-items-center ">
              <h5>This searching system is searches by <i class="text-primary">name</i> and by <i class="text-primary">lastname</i>.</h5>
              <input type="text" id="someone" placeholder="Search..." bind:value={text} on:input={()=>input()} class="px-2 rounded">
              </div>
            <table class="table table-dark pt-5 px-5 mt-5">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Lastname</th>
                    <th scope="col">Email</th>
                    <th scope="col">Country</th>
                    <th scope="col">Age</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {#each Users as hello}
                  <tr>
                    <th scope="row">{hello.name}</th>
                    <th scope="row">{hello.lastname}</th>
                    <th scope="row">{hello.email}</th>
                    <th scope="row">{#if hello.country==null}
                        <i class="bi bi-emoji-frown-fill"></i> Not Given
                        {:else}
                        {user.country}
                    {/if}</th>
                    <th scope="row">{#if hello.age==null}
                        <i class="bi bi-emoji-frown-fill"></i> Not Given
                        {:else}
                        {hello.age}
                    {/if}</th>
                    <th scope="row">{#if hello.gender==null}
                        <i class="bi bi-emoji-frown-fill"></i> Not Given
                        {:else}
                        {hello.gender}
                    {/if}</th>
                    <th scope="row"><b class="class bg-warning rounded p-1 text-dark"  style="cursor: pointer;text-decoration:none;" on:click={()=>click(user.id)}><i class="bi bi-chat" ></i>Write a message</b></th>
                  </tr>                    
                  {/each}
                </tbody>
              </table>             
              </div>
            {/if}
        </div>
      </div>
</main>