    <script lang="ts">
    import axios from "axios"
   let body:any
   let messages:any
    axios.get("http://localhost:8080/chatting")
    .then(res=>{
    if(res.status==200){
          body = res.data.user[0]
          messages = res.data.message
          console.log(body,messages)    
        }else{
        alert(res.data.message)
    }
})
function dashboard(){
axios.post("http://localhost:8080/dashboard",{name:body.name,lastname:body.lastname,email:body.email,id:body.id})
.then(res=>{
    if(res.status==200){
        window.location.href = "http://localhost:5173/dashboard"
    }else{
        alert(res.data.message)
    }
})
}
</script>
<main>
    <div class="d-flex bg-warning rounded w-5 card fs-1 text-dark ">
        <span class="text-decoration-none text-dark" on:click={()=>dashboard()}>
    <i class="bi bi-arrow-left bg-danger d-flex justify-content-center px-5" style="width: 40px;border-radius:80px;"></i></span>
    </div>
    {#if body!==undefined}
 <div class="w-5 p-2 fs-4 card d-flex justify-content-center">
    <label>My name: <i class="text-danger">{body.name}</i></label>
   <label>My lastname: <i class="text-danger">{body.lastname}</i></label>
   <label>My email: <i class="text-danger">{body.email}</i></label>
</div>
<div class="card">
    <div class="card">
        <h4>I have wrote</h4>
        {#if messages.length==0}
            <h1>You have n't wrote to anyone!</h1>
        {/if}
        {#each messages as message}
        <div class="d-flex align-items-center   ">
            <div class="border border-dark p-2 fs-2">
         <label class="d-block">My name:{message.myname}</label>
         <label class="d-block">To:{message.yourname}</label>
         <label class="d-block">Data:{message.minut}</label>
         <label>Data:{message.clock}</label>
         </div>
         <div>
         <label> <textarea value={message.texts} disabled></textarea> </label>
         </div>
        </div>
     {/each}
    </div>
</div>
   {#if body.country==undefined}
     <div>
          <h1>You must fill all your data!</h1><br>
          <p class="d-flex justify-content-center"> And you can in <a class="text-decoration-none px-1 card fs-6 " href="/settings"> here</a></p>
          </div>
     {/if}
    {/if}
</main>