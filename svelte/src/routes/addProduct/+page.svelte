<script lang="ts">
     let price:string = ""
     let name:string = ""
     let url:string = ""
     let model:string = ""
     let number:string = ""
     let size:string = "Big"
</script>
<main>
    <div class="card d-flex gap-2 align-items-center justify-content-center p-5" style="margin:150px 255px;">
    <div>
        <label>Price of your product: </label>
        <input type="text" placeholder="100" bind:value={price}>$
    </div>
    <div>
        <label>Name of your product: </label>
        <input type="text" placeholder="phone" bind:value={name}>
    </div>
    <div>
        <label>Model of your product: </label>
        <input type="text" placeholder="Galaxy A 2016" bind:value={model}>
    </div>
    <div>
        <label>Your phone number: </label>
        <input type="text" placeholder="Galaxy A 2016" bind:value={number}>
    </div>
    <div>
        <label>Enter url of your product image: </label>
        <input type="url" placeholder="Galaxy A 2016" bind:value={url}>
    </div>
    <div>
        <label>Enter url of your product image: </label>
        <select class="rounded">
            <option>Large</option>
            <option>Larger</option>
            <option>Big</option>
            <option>Very Big</option>
            <option>Small</option>
            <option>Very Small</option>
            <option>X</option>
            <option>XX</option>
            <option>XXL</option>
        </select>
    </div>
    <div class="pt-3">
<button>Create my product</button>
    </div>
    </div>
</main>