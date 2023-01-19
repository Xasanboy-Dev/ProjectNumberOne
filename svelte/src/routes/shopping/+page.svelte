<script lang="ts">
	import axios from "axios";
  let ShoppingUser:any
  let allShoppingList:any
  let length:Number
    axios.get('http://localhost:8080/shopping')
    .then(res=>{
   ShoppingUser = res.data.message.shoppingUser[0]
   allShoppingList = res.data.message.allShoppingList
   length = allShoppingList.length
  })
    .catch(err=>{
        console.log(err.message)
    })
    function totalAmount(){
        alert("Your total amount")
    }
    function togame(data:any){
      axios.post("http://localhost:8080/game",{data})
      .then(res=>{
      if(res.status==200){
        window.location.href = "/game"
      }else{
        alert(res.data.message)
      }
      })
      .catch(err=>{
        console.log(err.message)
      })
    }
    let TotalAmount:any = 0
    let Selected:any = 0 
    let arr:any = []
    function haveSeletedProducrs(coin:string){
    if(!arr.includes(coin)){
      arr.push(coin)
      let count =""
      let prices:any = []
      for(let r of arr){
        let push = r.price.split("$").join("")
        prices.push(push)
      }
      TotalAmount = 0
      for(let r of prices){
        TotalAmount+=Number(r)
  Selected++
      }
    }else{
      console.log("Already exist!")
    }
}
let limited:number = 0
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
{#if length!==undefined}
<section class="h-100 gradient-custom">
  <div class="container py-5">
    <div class="row d-flex justify-content-center my-4">
      <div class="d-flex justify-content-end"> 
      <div>
          <a href="/addProduct"  class="btn text-light bg-danger rounded p-2 m-2 d-flex gap-2"><i class="text-dark bi bi-plus-circle-fill"></i>Add a new Product!</a>
        </div>
        </div>
        <div class="col-md-8">
          <div class="card mb-4">
            <div class="card-header py-3">
              <h5 class="mb-0">Cart - {length} items</h5>
            </div>
            <div class="card-body">
              <!-- Single item -->
              {#each allShoppingList as list }
              <div class="row m-2 border border-dark rounded  p-2">
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
                <div class="d-flex col-lg-5 col-md-6 mb-4 mb-lg-0">
                  <div>
                  <h4>Price:{list.price}</h4>
                  <!-- Data -->
                  <p><strong></strong></p>
                  <p>Color: <span style="background-color: {list.color};" class="text-light rounded fs-5">{list.color}</span></p>
                  <p>Size: {list.size}</p>
                  <button type="button" class="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                    title="Move to the wish list" on:click={()=>{haveSeletedProducrs(list)}}>
                    <i class="fas fa-heart"></i>
                    Select
                  </button>
                  <button type="button" class="btn btn-primary btn-sm mb-2" data-mdb-toggle="tooltip"
                    title="Move to the wish list">
                    <i class="bi bi-star-fill"></i>
                    Favorites
                  </button>
                  </div>
                  <!-- Data -->
                  <div class="p-5 d-flex gap-5 align-items-center">
                    <button class="p-2 rounded bg-primary text-light fs-4" on:click={()=>(increment(limited))}>+</button>
                    <input class="" bind:value={limited} style="height:55px;width:50px;">
                    <button class="p-2 rounded bg-danger text-light fs-4" on:click={()=>decrement(limited)}>-</button>
                  </div>
                </div>
              </div>
              {/each}
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4">
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li
                class="list-group-item fs-4 d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                <span class="text-warning">My cash</span>
                <span>{ShoppingUser.coin!==null?ShoppingUser.coin:0}$</span>
              </li>
                <li
                  class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  <span class="text-warning fs-4">Products</span>
                  <span class="">{Selected}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                    <span class="text-warning fs-4">Shiping</span>
                  <span>Free</span>
                </li>
                <li
                  class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div class="text-danger">
                    <strong>Total amount</strong>
                    <strong>
                      <p class="mb-0">(including VAT)</p>
                    </strong>
                  </div>
                  <span><strong class="fs-4">{TotalAmount==undefined?0:TotalAmount}$</strong></span>
                </li>
              </ul>
           <div class="d-flex justify-content-center">
          <div class="d-flex gap-4">          
                  <button type="button" on:click={()=>{totalAmount()}} class="btn btn-primary btn-lg btn-block">
                Go to checkout
              </button>
              <button type="button" on:click={()=>{totalAmount()}} class="btn btn-primary btn-lg btn-block">
                Products
              </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/if}