<script lang="ts"> 
	import axios from "axios";
    let Users:any
axios.get("http://localhost:8080/allUsers")
.then(res=>{
 Users = res.data.message
})
function click(id:number){
    console.log(id)
}
</script>
<div class="container">
    <div class="row">
        <div class="col-md-8">
            <div class="people-nearby">
              {#if Users!==undefined}
              {#each Users as user }
              <div class="nearby-user m-5 border rounded">
                <div class="row">
                  <div class="col-md-2 col-sm-2">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="user" class="profile-photo-lg">
                  </div>
                  <div class="col-md-7 col-sm-7">
                    <h5><a href="#" class="profile-link">{user.name} {user.lastname}</a></h5>
                    <p>Email: {user.email}</p>
                    <p>Age: {user.age==null?"Not Given":user.age}</p>
                    <p>{user.gender==null?'Gender: Not Given':'Gender '+ user.gender}</p>
                    <p class="text-muted">500m away</p>
                  </div>
                  <div class="col-md-3 col-sm-3">
                    <button class="btn btn-primary pull-right" on:click={user.id}>Write a message</button>
                  </div>
                </div>
              </div>
              {/each}
              {/if}
            </div>
    	</div>
	</div>
</div>
<style>
    body{
    margin-top:20px;
    background:#FAFAFA;    
}
/*==================================================
  Nearby People CSS
  ==================================================*/

.people-nearby .google-maps{
  background: #f8f8f8;
  border-radius: 4px;
  border: 1px solid #f1f2f2;
  padding: 20px;
  margin-bottom: 20px;
}

.people-nearby .google-maps .map{
  height: 300px;
  width: 100%;
  border: none;
}

.people-nearby .nearby-user{
  padding: 20px 0;
  border-top: 1px solid #f1f2f2;
  border-bottom: 1px solid #f1f2f2;
  margin-bottom: 20px;
}

img.profile-photo-lg{
  height: 80px;
  width: 80px;
  border-radius: 50%;
}
</style>