<script lang="ts">
  import axios from "axios";
   let User:any
    axios.get('http://localhost:8080/user')
         .then(res=>{
    User =  res.data.message
  }).catch(err=>{
    alert(err.message)
         })
         function hello(name:string,lastname:String,email:String,id:string){
          if(name!==undefined && lastname!==undefined && email!==undefined){ 
         axios.post("http://localhost:8080/dashboard",{name,lastname,email,id})
         .then(res=>{
          if(res.status == 200){
            window.location.href = "http://localhost:5173/dashboard"
          }
         })
          }
         }
         function settings(id:string){
      axios.post('http://localhost:8080/settings',{id})
      .then(res=>{
    if(res.status==200){
      window.location.href = "http://localhost:5173/settings"
    }
      }).catch(err=>{
        console.log(err.message)
      })
}
  function send(id:string){
   axios.post(`http://localhost:8080/chatting/${id}`,{body:id})
   .then(res=>{
   if(res.status==200){
    window.location.href = "http://localhost:5173/chatting"
   }})
  }
  function balance(){
    const { id } = User[0]
    axios.post(`http://localhost:8080/shopping/${id}`)
    .then(res=>{
     if(res.status==200){
      window.location.href = "shopping"
     }else{
      alert(res.data.message)
     }
    })
}
</script>
<main>
  <div class="d-flex justify-content-center">
    <div class="bg-primary m-2 rounded" style=" width:22%;height:650px;border:2px solid black;">
      <div class="d-flex justify-content-center">
          <div style="background-color:red;width:150px;margin-top:10px;height:150px;border-radius:75px;font-size:100px" class="hello d-flex justify-content-center align-items-center">
           {#if User!==undefined}
            {User[0].name[0]}
           {/if}
          </div>
      </div>
      <ul class="px-5 pt-2 fs-3" style="cursor:pointer;">
        <li on:click={()=>{hello(User[0].name,User[0].lastname,User[0].email,User[0].id)}} class="d-flex gap-2 pt-3"><i class="text-warning bi bi-house"></i>Dashboard</li>
        <li  class="d-flex gap-2 pt-3"><i class="bi bi-cash-coin text-warning"></i>Balance</li>
        <li on:click={()=>{settings(User[0].id)}} class="d-flex gap-2 pt-3"><i class="bi bi-gear text-warning"></i>Settings</li>
        <li  class="d-flex gap-2 pt-3"><i class="text-warning bi bi bi-controller"></i>Games</li>
        <li on:click={()=>{balance()}} class="d-flex gap-2 pt-3"><i class="text-warning bi bi-bag-dash-fill"></i>Shopping</li>
        <li class="d-flex gap-2 pt-3"><i class="bi bi-chat-dots-fill text-warning"></i>Chatting</li>
        <a href="/logout" class="text-decoration-none text-dark"><li class="d-flex gap-2 pt-3"><i class="text-warning bi bi bi-box-arrow-left"></i>Log out</li></a>
      </ul>
    </div>
    <div class="bg-warning rounded m-2 mx-0 d-flex" style="width:75%;border:2px solid black;height:100%;">
   {#if User!==undefined}
   <div class="p-5 fs-3" style="height:650px">
       <div class="d-flex justify-content-center">
         <h1>Hi! {User[0].name} <b class="bg-light rounded">👋</b></h1></div> <br><br>
        {#if User[0].gender==null}
        You must fill your other data for chatting with other members of this network!<br>
        For this you must click on <a on:click={()=>{settings(User[0].id)}} class="text-primary text-decoration-none" style="cursor:pointer;">here</a>
        {:else}
        <h1>You can chatting with other members in this network for this click <span on:click={()=>send(User[0].id)} class="text-primary" style="cursor: pointer;">here</span></h1>
        {/if}
       <div>You can write to the Author of this network:<br>
         <ul>
          <li>
           My name is <i>Xasanboy</i>
          </li>
          <li>
            My lastname is <i>Abdurasulov</i>
           </li>
          <li>
          I was born in  <i>Uzbekistan</i>
           </li>
           <li>
            My <i class="bi bi-envelope-at text-dark"></i> email address <i>hasanbojabdurasulov309@gmail.com</i>
           </li>
           <li>
            My  <i class="bi bi-github"></i>github address is <i><a class="text-decoration-none" href="https://github.com/Xasanboy-Dev">Xasanboy-Dev</a></i>
           </li>
        </ul>
      </div>
      </div>
   {/if}
    </div>
  </div>
</main>