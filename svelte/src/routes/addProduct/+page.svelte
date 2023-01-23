<script lang="ts">
 import axios from "axios"
 let name_of_product:string
 let select:string
 let category:string
 let size:string
 let description:string
 let url_image:any
let model:string
let price:string
let number:string

let input:HTMLInputElement

function download(input:HTMLInputElement){
 let file:any=input.files
 const name = file[0]
 let reader =  new FileReader()
 if(name.size/1024>=30){
  alert("Your image size is a very large!. Please check your size of image!") 
  return 
}else{ 
 reader.readAsDataURL(name)
 reader.onload = ()=>{
  url_image =  reader.result
 }
}
}
 let author:any
 axios.get("http://localhost:8080/product")
 .then(res=>{
   author = res.data.message
 })
 function create(author:string){
let createdProduct = {
  number:number,
  price:price,
  author:author,
  name:name_of_product,
  model,color:select,
  category,
  size,
  text:description,
  image:url_image}
    if( 
model!==undefined &&
name_of_product!==undefined&&
select!==undefined &&
category!==undefined &&
size!==undefined && 
description!==undefined &&
url_image!==undefined &&
price!==undefined &&
number!==undefined
){
    axios.post("http://localhost:8080/createProduct",{message:createdProduct})
 .then(res=>{
 alert(res.data.message)
})
}else{
    alert("Please fill all the gaps!")
}
}
</script>
<div class="border border-dark p-5 m-5 rounded">
    <form class="form-horizontal">
        <fieldset>
          <div class="border"><a href="/shopping" class="text-decoration-none fs-1"><i class="bi bi-arrow-left"></i></a></div>
        <!-- Form Name -->
        <div class="d-flex m-2 p-2 justify-content-center">
        <h1>PRODUCT</h1>
        </div>
        <!-- Text input-->
        <div class="form-group  align-items-center d-flex justify-content-center m-2">
          <label class="col-md-4 control-label" for="product_name">PRODUCT NAME</label>  
          <div class="col-md-4">
          <input id="product_name" bind:value={name_of_product} placeholder="PRODUCT NAME" class="form-control input-md" type="text">
          </div>
        </div>     
        <div class="form-group  align-items-center d-flex justify-content-center m-2">
            <label class="col-md-4 control-label" for="product_name">PRODUCT MODEL</label>  
            <div class="col-md-4">
            <input id="product_name" bind:value={model} placeholder="PRODUCT MODEL" class="form-control input-md" type="text">
            </div>
          </div>        
        <div class="form-group  align-items-center d-flex justify-content-center m-2">
          <label class="col-md-4 control-label" for="product_name">Color of your Product</label>  
          <div class="col-md-4">
            <select id="product_categorie" bind:value={select} class="form-control">
                <option>Black</option>
                <option>White</option>
                <option>Red</option>
                <option>Green</option>
                <option>Grey</option>
                <option>Yellow</option>
                <option>Pink</option>
                <option>Purple</option>
                <option>Brown</option>
                <option>Blue</option>
            </select>  
        </div>
        </div>
        
        <!-- Select Basic -->
        <div class="form-group align-items-center d-flex justify-content-center m-2">
          <label class="col-md-4 control-label" for="product_categorie">PRODUCT CATEGORY</label>
          <div class="col-md-4">
            <select id="product_categorie" bind:value={category} class="form-control">
                <option>Fenty Beauty</option>
                <option>Ikea</option>
                <option>Cotton</option>
                <option>Electronics</option>
                <option>Wooden</option>
                <option>Thing for Wash</option>
                <option>Drinks</option>
            </select>
          </div>
        </div>
        <div class="form-group  align-items-center d-flex justify-content-center m-2">
            <label class="col-md-4 control-label" for="product_name">PRODUCT PRICE</label>  
            <div class="col-md-4">
            <input  bind:value={price} placeholder="PRODUCT PRICE" class="form-control input-number" type="number">
            </div>
          </div>        
        <div class="form-group align-items-center d-flex justify-content-center m-2">
          <label class="col-md-4 control-label" for="product_weight">PRODUCT SIZE</label>  
          <div class="col-md-4">
            <select bind:value={size} class="form-control form-select">
                <option>Big</option>
                <option>Bigger</option>
                <option>Small</option>
                <option>Smaller</option>
                <option>Large</option>
                <option>Larger</option>
                <option>Huge</option>
                <option>XXL</option>
                <option>XX</option>
                <option>X</option>
            </select>
          </div>
        </div>
        
        <!-- Textarea -->
        <div class="form-group align-items-center d-flex justify-content-center m-2">
          <label class="col-md-4 control-label" for="product_description">PRODUCT DESCRIPTION</label>
          <div class="col-md-4">                     
            <textarea class="form-control" bind:value={description} id="product_description" ></textarea>
          </div>
        </div>
        <div class="form-group  align-items-center d-flex justify-content-center m-2">
            <label class="col-md-4 control-label"  for="product_name">PRODUCT IMAGE URL</label>  
            <div class="col-md-4">
            <input  bind:this={input} on:change={()=>download(input)} placeholder="PRODUCT IMAGE URL" class="form-control input-md" type="file">
            </div>
          </div>
          <div class="form-group  align-items-center d-flex justify-content-center m-2">
            <label class="col-md-4 control-label"  for="product_name">YOUR PHONE NUMBER</label>  
            <div class="col-md-4">
            <input bind:value={number} placeholder="+998 ** *** ** **" class="form-control input-md" type="number">
            </div>
          </div>
<div class="d-flex justify-content-center"><button on:click={()=>create(author)} class="rounded-5 fs-2 m-5 text-danger">Create</button></div>

        </fieldset>
        </form>        
</div>