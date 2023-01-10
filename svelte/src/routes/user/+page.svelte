<script lang="ts">
	import axios from "axios";
let user:any
  axios.get("http://localhost:8080/user")
.then(res=>{
  user = (res.data.message)
}).catch(err=>err.message)
</script>
<main>
  {console.log(user)}
  {#if user!==undefined}
  {#each user as use }
  <h1>Hello World</h1>
  {console.log(use)}
  <div  style="margin-left:250px; width: 450px; height:450px">
  <img src={use.img} alt='Your image'>
  <div class="d-flex">
<label>Your name:{use.name}</label>
<label>Your Lastname:{use.lastname}</label>
  </div>
    </div>
  {/each}
  {/if}
</main>