<script lang="ts">
    import axios from "axios"
	import Age from "../age.svelte";
	import Country from "../country.svelte";
    let Hello:any
    axios.get("http://localhost:8080/user")
    .then(res=>{
      if(res.data.message==undefined){
        console.log("Your data hasn't  found")
      }else{
        Hello = res.data.message
        console.log(Hello)
      }
    })
    let age:any
    let country:any
    let gender:any
    function click(id:string){
      alert([age,country,gender])
    }
</script>
<main>
  {#if Hello!==undefined}
  <table class="table table-dark">
    <thead>
      <tr>
        <th scope="col"><i class="text-danger">Name</i></th>
        <th scope="col"> <i class="text-danger">Lastname</i></th>
        <th scope="col"><i class="text-danger">Email</i></th>
        <th scope="col"><i class="text-danger">Password</i></th>
        <th scope="col"><i class="text-danger">Age</i></th>
        <th scope="col"><i class="text-danger">Country</i></th>
        <th scope="col"><i class="text-danger">Gender</i></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">{Hello[0].name}</th>
        <th scope="row">{Hello[0].lastname}</th>
        <th scope="row">{Hello[0].email}</th>
        <th scope="row">{Hello[0].password}</th>
        <th scope="row">
          <select class="rounded ">
            
          </select>
        </th>
      </tr>
    </tbody>
  </table>
  {/if}
</main>