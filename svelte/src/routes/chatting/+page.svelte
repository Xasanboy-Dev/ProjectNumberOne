<script lang="ts">
    import axios from "axios"
    axios.get("http://localhost:8080/chatting")
    .then(res=>{
    if(res.status==200){
         console.log(res.data.message)
    }else{
   console.log("Hello World ")
    }
})
</script>
<main>
    <h1>Hello Bro!</h1>
</main>