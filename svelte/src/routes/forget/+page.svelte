<script lang="ts">
  import axios from "axios"
  let code:string
  axios.get("http://localhost:8080/forget/")
</script>
<div class="d-flex justify-content-start px-5 mx-5  fs-1">
    <a href="/"><i class="bi text-primary bi-house"></i></a>
    </div>
    <div class='d-flex justify-content-center'>
      <label>Do you want to opern your password <br> You need to write code that we have sent<br>to your email:<i class="text-danger fs-3">{user.email}</i></label>
    </div>
      <div class="d-flex justify-content-center m-5 p-5 gap-1">
        <label for="code">Enter here the 6-lenth code:</label>
        <input type="text" bind:value={code} placeholder="123456....">
    </div>