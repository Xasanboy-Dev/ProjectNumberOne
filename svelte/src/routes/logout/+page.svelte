<script lang="ts">
    import axios from "axios"
    let user:any
    axios.get("http://localhost:8080/out")
    .then(res=>{
        user = res.data.message.user
    })
    .catch(err=>{
        console.log(err.message)
    })
</script>
<main>
<div class="d-flex justify-content-center p-5 m-5">
    {#if user!==undefined}
    <ul class="d-flex gap-5">
        <li>Your name is <i>{user[0]}</i>.</li>
        <li>Your lastname is <i>{user[1]}</i>.</li>
        <li>Your email is <i>{user[2]}</i>.</li>
    </ul>
    {/if}
</div>
<div class="d-flex justify-content-center align-items-center">
    <h3>Do you want to leave us or  switch your account?</h3>
</div>
</main>
<style>
    main{
        background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQtYDWv6jP6Un3U9CgC-wpj2yK6WdzWtkHFKaFmHuJxiF0m5ENDl-vT6Op_CeL5xKHgwY&usqp=CAU);
        font-size: 100%;
        background-size: 50%;
        
    }
    li::marker{
        color:white
    }
</style>