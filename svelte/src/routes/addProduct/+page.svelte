<script lang="ts">
     let price:string = ""
     let name:string = ""
     let color:string = ""
     let size:string = ""
</script>
<main>
    <div>
        <label>Price of your product: </label>
        <input type="text" placeholder="100" bind:value={price}>$
    </div>
    <div>
        <label>Name of your produc: </label>
        <input type="text" placeholder="phone" bind:value={name}>
    </div>
    <div>
        <label>Model of your product: </label>
        <input type="text" placeholder="Galaxy A 2016" bind:value={name}>
    </div>
    <div>
        <label>Your phone number: </label>
        <input type="text" placeholder="Galaxy A 2016" bind:value={name}>
    </div>
</main>