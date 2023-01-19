<script lang="ts">
    let limited:number = 0
    export let list: any
    export let haveSeletedProducrs: (v: string,count:number) => void
    export let favorites: (v: any) => void

    function increment(num:number){
        limited++
    }
    function decrement(num:number){
        if(limited==0){
            limited = 0
        }else{
            limited--
        }
    }
</script>
<div class="row  mt-3 mx-2 border border-dark rounded  p-2">
    <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
      <!-- Image -->
      <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
        <img src="{list.foto}"
        class="w-100" alt={list.name + " " + list.color} />
        <a href="#!">
          <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
        </a>
      </div>
      <!-- Image -->
    </div >
    <div class="d-flex col-lg-5 col-md-6 mb-4  mb-lg-0">
      <div  class="px-5" style="width:500px">
        <ul>
          <li class="">Name: {list.name}</li>
          <li style="width: 150px;">Color: <span class="rounded text-light" style="background-color:{list.color}">{list.color}</span></li>
          <li>Size: {list.size}</li>
          <li>Price: {list.price}</li>
          <li>Phone: {list.phone}</li>
        </ul>
             <button type="button" class="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
               title="Move to the wish list" on:click={()=>{haveSeletedProducrs(list,limited)}}>
               <i class="fas fa-heart"></i>
               Select
             </button>
             <button type="button" class="btn btn-primary btn-sm mb-2" data-mdb-toggle="tooltip"
               title="Move to the wish list" on:click={()=>{favorites(list)}}>
               <i class="bi bi-star-fill"></i>
               Favorites
             </button>
      </div>
      <!-- Data -->
      <div class="mx-5 p-5 d-flex gap-5 align-items-center">
        <button class="p-2 rounded bg-primary text-light fs-4" on:click={()=>(increment(limited))}>+</button>
        <input class="" bind:value={limited} disabled style="height:55px;width:50px;">
        <button class="p-2 rounded bg-danger text-light fs-4" on:click={()=>decrement(limited)}>-</button>
      </div>
    </div>
  </div>