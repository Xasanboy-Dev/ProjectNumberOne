<script lang="ts">
	import axios from "axios";
 let Products:any
let coin:any
let TotalPrice:number = 0
 axios.get("http://localhost:8080/basket")
 .then(res=>{
     Products = res.data.message.ProductsInBasket
     for(let r in Products){
  if(r!=="0"){
    TotalPrice+=+Products[r][0].price
  }
    }
  coin = res.data.message.coins==null?0:res.data.message.coins
 })
 .catch(error=>{
    console.log(error.message)
 })
 let limited = 0
 if(limited==0){
    limited = 0
 }
 function deleteProduct(ids:any){
    const {id} = ids
    for(let r of Products){
        console.log(r[0])
    }
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
                <li>Your money:{coin}$</li>
                <hr>
                <li class="text-danger">Total Amount: {TotalPrice}$</li>
            </ul>
        </div>
        <div class="d-flex justify-content-center m-5"><h1>It's your product Backet<i class="bi bi-cart"></i></h1></div>
        <div class="row border p-1 m-3">
            {#if Products!==undefined}
            {#each Products as product }
            <div class="border m-2 rounded col-lg-3 ">
              <article class="u-shadow-v18 g-bg-white text-center rounded g-px-20 g-py-40 g-mb-5">
                <img class="p-1 rounded d-inline-block img-fluid mb-4" src="{product[0].foto}" alt="Image Description">
                <h4>{product[0].name}</h4>
                <ul>
                    <li>Price: {product[0].price}$</li>
                    <li>Color: {product[0].color}</li>
                    <li>Number: {product[0].phone}</li>
                    <li>Size: {product[0].size}</li>
                    <button class="btn btn-dark m-4" on:click={()=>deleteProduct(product[0])}><i class="text-danger fs-5 bi bi-trash"></i><span class="text-danger fs-5 ">Delete</span></button>
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