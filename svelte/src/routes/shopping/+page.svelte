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
 let allSelected:any = []
 let Amount:number = 0
 let money:number = 0
 let Products:any = []
 let selected = "Select"
 function select(product:any){
  let bool = Products.includes(product)
  if(!bool){
    Products.push(product)
    money+= +product.price
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
function goCheckout(Products:any,coin:any){
   axios.post('http://localhost:8080/basket',{Products,coin})
   .then(res=>{
   if(res.status==200){
    window.location.href= 'http://localhost:5173/basket'
   }else{
    alert(res.data.message)
   }
})
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
        <div class="col-md-8">
          <div class="card mb-4">
            <div class="card-header py-3">
              <h5 class="mb-0">Electronics - {length} products</h5>
            </div>
            <div class="card-body">
              <!-- Single item -->
              <div class="container">
                  <div class="grid">
              {#each allShoppingList as  list }
                <div class="body m-5 border rounded d-flex gap-5 ">
                    <div class="cp_img">
                        <img src="{list.foto}" alt="Product" class="img-fluid">
                    </div>
                    <div>
                      <div>
                        <h6>Bio:</h6>
                        <h6>Product: {list.name}</h6>
                        </div>
                        <div>
                          <h6>Model: {list.model}</h6>
                        </div>
                        <div>
                          <h6>Size:{list.size}</h6>
                        </div>
                        <div>
                          <h6>Phone: {list.phone}</h6>
                        </div>
                        <div>
                          <h6>Price:{list.price}$</h6>
                        </div>
                        <div>
                          <h6>Color:<span>{list.color}</span></h6>
                        </div>
                    </div>
                    <div>
                      <button on:click={()=>select(list)} class="rounded fs-4">{selected}</button>
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
                  <button type="button" on:click={()=>goCheckout(Products,userCoin)} class="btn btn-primary btn-lg btn-block">
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
.c_review {
    margin-bottom: 0
}

.c_review li {
    margin-bottom: 16px;
    padding-bottom: 13px;
    border-bottom: 1px solid #e8e8e8
}

.c_review li:last-child {
    margin: 0;
    border: none
}

.c_review .avatar {
    float: left;
    width: 80px
}

.c_review .comment-action {
    float: left;
    width: calc(100% - 80px)
}

.c_review .comment-action .c_name {
    margin: 0
}

.c_review .comment-action p {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 95%;
    display: block
}

.product_item:hover .cp_img {
    top: -40px
}

.product_item:hover .cp_img img {
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22)
}

.product_item:hover .cp_img .hover {
    display: block
}

.product_item .cp_img {
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translate(-50%);
    -webkit-transform: translate(-50%);
    -ms-transform: translate(-50%);
    -moz-transform: translate(-50%);
    -o-transform: translate(-50%);
    -khtml-transform: translate(-50%);
    width: 100%;
    padding: 15px;
    transition: all 0.2s ease-in-out
}

.product_item .cp_img img {
    transition: all 0.2s ease-in-out;
    border-radius: 6px
}

.product_item .cp_img .hover {
    display: none;
    text-align: center;
    margin-top: 10px
}

.product_item .product_details {
    padding-top: 110%;
    text-align: center
}

.product_item .product_details h5 {
    margin-bottom: 5px
}

.product_item .product_details h5 a {
    font-size: 16px;
    color: #444
}

.product_item .product_details h5 a:hover {
    text-decoration: none
}

.product_item .product_details .product_price {
    margin: 0
}

.product_item .product_details .product_price li {
    display: inline-block;
    padding: 0 10px
}

.product_item .product_details .product_price .new_price {
    font-weight: 600;
    color: #ff4136
}

.product_item_list table tr td {
    vertical-align: middle
}

.product_item_list table tr td h5 {
    font-size: 15px;
    margin: 0
}

.product_item_list table tr td .btn {
    box-shadow: none !important
}

.product-order-list table tr th:last-child {
    width: 145px
}

.preview {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column
}

.preview .preview-pic {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1
}

.preview .preview-thumbnail.nav-tabs {
    margin-top: 15px;
    font-size: 0
}

.preview .preview-thumbnail.nav-tabs li {
    width: 20%;
    display: inline-block
}

.preview .preview-thumbnail.nav-tabs li nav-link img {
    max-width: 100%;
    display: block
}

.preview .preview-thumbnail.nav-tabs li a {
    padding: 0;
    margin: 2px;
    border-radius: 0 !important;
    border-top: none !important;
    border-left: none !important;
    border-right: none !important
}

.preview .preview-thumbnail.nav-tabs li:last-of-type {
    margin-right: 0
}

.preview .tab-content {
    overflow: hidden
}

.preview .tab-content img {
    width: 100%;
    -webkit-animation-name: opacity;
    animation-name: opacity;
    -webkit-animation-duration: .3s;
    animation-duration: .3s
}

.details {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column
}

.details .rating .stars {
    display: inline-block
}

.details .sizes .size {
    margin-right: 10px
}

.details .sizes .size:first-of-type {
    margin-left: 40px
}

.details .colors .color {
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    height: 2em;
    width: 2em;
    border-radius: 2px
}

.details .colors .color:first-of-type {
    margin-left: 20px
}

.details .colors .not-available {
    text-align: center;
    line-height: 2em
}

.details .colors .not-available:before {
    font-family: Material-Design-Iconic-Font;
    content: "\f136";
    color: #fff
}

@media screen and (max-width: 996px) {
    .preview {
        margin-bottom: 20px
    }
}

@-webkit-keyframes opacity {
    0% {
        opacity: 0;
        -webkit-transform: scale(3);
        transform: scale(3)
    }
    100% {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1)
    }
}

@keyframes opacity {
    0% {
        opacity: 0;
        -webkit-transform: scale(3);
        transform: scale(3)
    }
    100% {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1)
    }
}

.cart-page .cart-table tr th:last-child {
    width: 145px
}

.cart-table .quantity-grp {
    width: 120px
}

.cart-table .quantity-grp .input-group {
    margin-bottom: 0
}

.cart-table .quantity-grp .input-group-addon {
    padding: 0 !important;
    text-align: center;
    background-color: #1ab1e3
}

.cart-table .quantity-grp .input-group-addon a {
    display: block;
    padding: 8px 10px 10px;
    color: #fff
}

.cart-table .quantity-grp .input-group-addon a i {
    vertical-align: middle
}

.cart-table .quantity-grp .form-control {
    background-color: #fff
}

.cart-table .quantity-grp .form-control+.input-group-addon {
    background-color: #1ab1e3
}

.ec-checkout .wizard .content .form-group .btn-group.bootstrap-select.form-control {
    padding: 0
}

.ec-checkout .wizard .content .form-group .btn-group.bootstrap-select.form-control .btn-round.btn-simple {
    padding-top: 12px;
    padding-bottom: 12px
}

.ec-checkout .wizard .content ul.card-type {
    font-size: 0
}

.ec-checkout .wizard .content ul.card-type li {
    display: inline-block;
    margin-right: 10px
}

.card {
    background: #fff;
    margin-bottom: 30px;
    transition: .5s;
    border: 0;
    border-radius: .55rem;
    position: relative;
    width: 100%;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1);
}

.card .body {
    font-size: 14px;
    color: #424242;
    padding: 20px;
    font-weight: 400;
}
  </style>