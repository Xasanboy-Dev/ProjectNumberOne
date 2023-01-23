<script lang="ts">
	import axios from "axios";
    let userCoin:any
  let ShoppingUser:any
  let allShoppingList:any
  let length:Number
    axios.get('http://localhost:8080/shopping')
    .then(res=>{
        userCoin = res.data.message.shoppingUser[0].coin
   ShoppingUser = res.data.message.shoppingUser[0]
   allShoppingList = res.data.message.allShoppingList
   length = allShoppingList.length
  })
    .catch(err=>{
        console.log(err.message)
    })
    let Selected:any = []
 let Amount:number = 0
 let money:number = 0
 let Products:any = []
 let selected = "Select"
 function  select(productId:any,AuthorId:string){
    console.log(Products)
  let bool = Products.includes(productId)
  if(!bool){
for(let r of allShoppingList){
  if(r.id==productId){
    money+=+r.price
    Products.push(productId)
  }
}
 Amount = Products.length
  }else{
    console.log(`Already exist`)
  }
}

 function add(author:any){
 axios.post("http://localhost:8080/product",{author})
 .then(res=>{
  if(res.status==200){
    window.location.href = 'http://localhost:5173/addProduct' 
  }else{
    alert(res.data.message)
  }
 })
}
function goCheckout(id:string,productId:string){
console.log(`Person's is = ${id}, Product: ${productId}`)
let Product = {person:id,products:productId}

axios.post("http://localhost:8080/basket",Product)
.then(res=>{
  if(res.status==200){
    window.location.href = '/basket'
  }
})
.catch(err=>{
    console.log(err.message)
})

}

   function ClickOnAProduct(id:string,productId:string){
      console.log(id,productId)
   } 

</script>
{#if length!==undefined}
<section class="h-100 gradient-custom">
  <div class="d-flex text-danger fs-1 border">
    <a href="/user">
    <i class="bi rounded px-5 bi-arrow-left"></i>
    </a>
  </div>
  <div class="container py-5">
    <div class="row d-flex justify-content-center my-4">
      <div class="d-flex justify-content-end"> 
      <div>
          <a on:click={()=>add(ShoppingUser)}  class="btn text-light bg-danger rounded p-2 m-2 d-flex gap-2"><i class="text-dark bi bi-plus-circle-fill"></i>Add a new Product!</a>
        </div>
        </div>
        <div class=" col-md-8">
          <div class="card mb-4">
            <div class="card-header py-3">
              <h5 class="mb-0">Electronics - {length} products</h5>
            </div>
            <div class="card-body">
              <!-- Single item -->
              <div class="container">
                  <div class="grid">
              {#each allShoppingList as  list }
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div on:click={()=>ClickOnAProduct(list.userid,list.id)} class="mt-2 border p-2 border-dark rounded d-flex gap-5 ">
                    <div class="p-2">
                        <img src="{list.foto}" alt="Product" class="rounded-5  img-fluid">
                    </div>
                    <ul style="width:450px;">
                        <li><b>Name:{list.name}</b></li>
                        <li><b>Price:{list.price}</b></li>
                        <li><b>Phone:+{list.phone}</b></li>
                        <li><b>Size:{list.size}</b></li>
                    </ul>
                    <div>
                      <button on:click={()=>select(list.id,ShoppingUser.id)} class="m-1 rounded fs-4">{selected}</button>
                    </div>
                   </div>
                   {/each}
                  </div>
        </div>
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
                  <span class="">{Amount}</span>
                </li>
                <hr>
                <li
                  class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div class="text-danger">
                    <strong>Total amount</strong>
                    <strong>
                      <p class="mb-0">(including VAT)</p>
                    </strong>
                  </div>
                  <span><strong class="fs-4">{money}$</strong></span>
                </li>
              </ul>
           <div class="d-flex justify-content-center">
          <div class="d-flex gap-4">          
                  <button type="button" on:click={()=>goCheckout(ShoppingUser.id,Products)}  class="btn btn-primary btn-lg btn-block">
                Go to checkout
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
    body{
    margin-top:20px;
    background-color: #f4f7f6;
    }
</style>
