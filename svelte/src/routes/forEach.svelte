<script lang="ts">
    let limited:number = 0
    function select(id:string) =>void
 export function select(id:any,count:any){
  console.log(id,count)
 }

    export let allSelected:any

    export let list: any
    function increment(num:number){
        limited++
    }
    function decrement(num:number){
        if(limited==0){
            limited = 0
        }else{
            limited--
        }
export function favourite(id:any){
  console.log(id)
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
          <li class="card p-1 m-1">Name: {list.name}</li>
          <li style="width: 150px;" class="m-1 card p-1">Color: <span class="rounded" style="background-color:{list.color};color:{list.color=='Black'?'white':'black'}">{list.color}</span></li>
          <li class="p-1 card m-1">Size: {list.size}</li>
          <li class="p-1 card m-1">Price: {list.price}</li>
          <li class="p-1 card m-1">Phone: {list.phone}</li>
        </ul>
             <button type="button"  class="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
               title="Click on for sum your products!" 
               on:click={()=>select(list.price,limited)}
               >
               <i class="fas fa-heart"></i>
               Select
             </button>
             <button type="button" class="btn btn-primary btn-sm mb-2" data-mdb-toggle="tooltip"
               title="This product attrected you!" >
               <i class="bi bi-star-fill"></i>
               Favorites
             </button>
      </div>
      <!-- Data -->
      <div class="mx-5 p-3 d-flex gap-5 align-items-center">
        <button class="p-2 rounded bg-primary text-light fs-4" on:click={()=>(increment(limited))}>+</button>
        <input class="" bind:value={limited} disabled style="height:55px;width:50px;">
        <button class="p-2 rounded bg-danger text-light fs-4" on:click={()=>decrement(limited)}>-</button>
      </div>
    </div>
  </div>