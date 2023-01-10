<script lang="ts">
  import axios from "axios"
  let arr:any
  axios.get("http://localhost:8080")
  .then(res=>{
arr =  res.data.message
  })
  </script>
  <main>
 <h1>Regitration to <a href="/teachers">Teacher</a></h1>
 <h1>Regitration to <a href="/pupils">Pupils</a></h1>
<h1>Clock on to <a href="/login">login</a></h1>
</main>