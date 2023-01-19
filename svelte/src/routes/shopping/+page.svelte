<script lang="ts">
	import axios from "axios";
	import ForEach from "../forEach.svelte";
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
    
    function haveSeletedProducrs(coin:any,count:number){
   let price = coin.price
   price = price.split("$").join("")
   let total = price*count
    Selected+=count
    TotalAmount+=total
  }
export function favorites(list:any){
   axios.post("http://localhost:8080/favorites",{list})
   .then(res=>{
     if(res.status==200){
      window.location.href = "/favorites"
     }
  })
   .catch(err=>{
    console.log(err.message)
   })
}

</script>
{#if length!==undefined}
<section class="h-100 gradient-custom">
  <div class="d-flex text-danger fs-1 border">
    <a href="/user">
    <i class="bi bi-arrow-left border"></i>
    </a>
  </div>
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
              {#each allShoppingList as  list }
                <ForEach
                  list={list}
                  haveSeletedProducrs={haveSeletedProducrs}
                  favorites={favorites}
              />
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
                <span class="text-warning d-flex align-items-center gap-2"><i class="bi bi-cash-coin"></i> My cash</span>
                <span>{ShoppingUser.coin!==null?ShoppingUser.coin:0}$</span>
              </li>
                <li
                  class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  <span class="text-warning fs-4"><i class="bi bi-cart"></i> Products</span>
                  <span class="">{Selected}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                    <span class="text-warning fs-4"><i class="bi bi-truck"></i> Shiping</span>
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
  <style>
    li::marker{
      color:white
    }
  </style>