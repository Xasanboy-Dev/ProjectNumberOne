<script lang="ts">
	import axios from "axios";
  let id:number = 0
  let name:string 
 let Products:any
let coin:any
let TotalPrice:number = 0
let arr:any[] = []
function getProducts(){ 
 axios.get("http://localhost:8080/basket")
 .then(res=>{
     Products = res.data.message.ProductsInBasket
     for(let r in Products){
  if(r!=="0"){
    arr.push(Products[r])
TotalPrice+=+Products[r][0].price
  }
}
coin = res.data.message.coins==null?0:res.data.message.coins
})
 .catch(error=>{
    console.log(error.message)
 })
}
 let limited = 0
 if(limited==0){
    limited = 0
 }
 function deleteProduct(ids:any){
  let others:any = []
  const {id} = ids
for(let r in arr){
  if(arr[r][0].id!==id.toString()){
    others.push(arr[r])
  }
}
arr = []
arr = others
let coin:number = 0
 for(let r in arr){
   coin+=+arr[r][0].price
 }
 TotalPrice = coin
}
   function coins(money:any,total:number){
   if(money<total){
    alert(`You must fill your coin at playing 
Games or sell your thins 
in our Server!`)
   }else{
    if(total==0){ 
      alert(`You have not got selected any of things!`)
   }else{
    alert(`You have bought!`)
   }
  }
  } 
getProducts()
</script>
<main>
    <div class="container">
        <a class="btn fs-2 text-danger" href="/shopping"><i class="bi bi-arrow-left"></i></a>
        <div class="d-flex justify-content-end">
            <ul class="fs-1">
                <li>Your money:{coin}$</li>
                <hr>
                <li class="text-danger">Total Amount: {TotalPrice}$</li>
            </ul>
        </div>
        <div class="d-flex justify-content-center m-5"><h1>It's your product Backet<i class="bi bi-cart"></i></h1></div>
        <div class="row border p-1 m-3">
            {#if Products!==undefined}
            {#each arr as product }
            <div class="border m-2 rounded col-lg-3 ">
              <article class="u-shadow-v18 g-bg-white text-center rounded g-px-20 g-py-40 g-mb-5">
                <img class="p-1 rounded d-inline-block img-fluid mb-4" src="{product[0].foto}" alt="Image Description">
                <h4>{product[0].name}</h4>
                <ul>
                    <li>Price: {product[0].price}$</li>
                    <li>Color: {product[0].color}</li>
                    <li>Number: +{product[0].phone}</li>
                    <li>Size: {product[0].size}</li>
                    <button class="btn btn-dark m-4" on:click={()=>deleteProduct(product[0])}><i class="text-danger fs-5 bi bi-trash"></i><span class="text-danger fs-5 ">Delete</span></button>
                </ul>
              </article>
            </div>
            {/each}
            {/if}
            <button class="rounded" on:click={()=>coins(coin,TotalPrice)}>Pay my coin</button>
        </div>
    </div>
</main>
<style>
    li::marker{
        color:white
    }
</style>