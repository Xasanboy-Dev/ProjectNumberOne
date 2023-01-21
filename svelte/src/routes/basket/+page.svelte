<script lang="ts">
	import axios from "axios";
 let Products:any
let coin:any
 axios.get("http://localhost:8080/basket")
 .then(res=>{
  Products = res.data.message.ProductsInBasket
  coin = res.data.message.coin==null?0:res.data.message.coin
 })
 let limited = 0
 if(limited==0){
    limited = 0
 }
 function deleteProduct(ids:any){
 const {id} = ids
 let arr:any = []
 for(let r in Products){
    if(Products[r].id!==id){
        arr.push(Products[r])
    }
 }
 Products = arr
}
   function coins(money:any){
   let coins:number = 0
    for(let r in Products){
     coins+=+Products[r].price
   }
 if(money<coins){
    alert("You have n't got enough money please to fill your coins!")
 }else{
    axios
 }
} 
</script>
<main>
    <div class="container">
        <a class="btn fs-2 text-danger" href="/shopping"><i class="bi bi-arrow-left"></i></a>
        <div class="d-flex justify-content-end">
            <ul class="fs-1">
                <li>Your money:</li>
                <hr>
                <li class="text-danger">Total Amount:</li>
            </ul>
        </div>
        <div class="d-flex justify-content-center m-5"><h1>It's your product Backet<i class="bi bi-cart"></i></h1></div>
        <div class="row border p-1 m-3">
            {#if Products!==undefined}
            {#each Products as product }
            <div class="border m-2 rounded col-lg-3 ">
              <article class="u-shadow-v18 g-bg-white text-center rounded g-px-20 g-py-40 g-mb-5">
                <img class="p-1 rounded d-inline-block img-fluid mb-4" src="{product.foto}" alt="Image Description">
                <h4>{product.name}</h4>
                <ul>
                    <li>Price: {product.price}$</li>
                    <li>Color: {product.color}</li>
                    <li>Number: {product.phone}</li>
                    <li>Size: {product.size}</li>
                    <button class="btn btn-dark m-4" on:click={()=>deleteProduct(product)}><i class="text-danger fs-5 bi bi-trash"></i><span class="text-danger fs-5 ">Delete</span></button>
                </ul>
              </article>
            </div>
            {/each}
            {/if}
            <button class="rounded" on:click={()=>coins(coin)}>Pay my coin</button>
        </div>
    </div>
</main>
<style>
    li::marker{
        color:white
    }
</style>