<script lang="ts">
	import axios from "axios";
    let correctAnwers:number = 0
  let maxNum:Number = 0
  let PlayerName:string
	axios.get('http://localhost:8080/game').then((res) => {
		maxNum = +res.data.message[0].max;
		PlayerName = res.data.message[0].name;
    });
    let first:number = 0
    let second:number = 0
    let third:number = 0
    let fourth:number = 0
    let one:number = 0
    let two:number = 0
    let toDo:string[] = ['+','-','*']
    function between(min:number, max:number) {  
        return Math.floor(Math.random() * (max - min) + min)
    }
    let amal:string = toDo[between(0,3)]
    first = between(1,1000)
    second = between(1,1000)
   function creating(){ 
    if(amal=="+"){
        one = between(second,second+first)
        two = between(second,second+first)
         third = between(second,second+first)
        fourth= first+second
     }else if(amal=="-"){
         third = first - second
        one = third>0?between(second - first,second):-1*between(first,second)
        two = third>0?between(second-first,second):-1*between(first,second)
        fourth= third>0?between(second-first,second):-1*between(first,second)
     }else {
        one = first * second
        two = between(first,second*first)
        third = between(first,second*first)
        fourth = between(first,second*first)
     }
    }
    creating()
    function fisrt(){
        if(amal=="+"){ 
  if(one==first+second){
    alert("Togri")
    correctAnwers+=1
    first = between(1,1000)
    second = between(1,1000)
    one = between(first,second)
    amal = toDo[between(0,3)]
    creating()
}else{
    alert("Notogri!")
    first = between(1,1000)
    second = between(1,1000)
    amal = toDo[between(0,3)]
    creating()
  }
}else if(amal=="-"){
    if(one==first-second){
    alert("Togri")
    first = between(1,1000)
    second = between(1,1000)
    correctAnwers+=1
    one = between(first,second)
  }else{
    alert("Notogri!")
    first = between(1,1000)
    second = between(1,1000)
    amal = toDo[between(0,3)]
    creating()
  } 
}else{
    if(one==first*second){
    alert("Togri")
    correctAnwers+=1
    first = between(1,1000)
    second = between(1,1000)
    one = between(first,second)
    amal = toDo[between(0,3)]
    creating()
  }else{
    alert("Notogri!")
    first = between(1,1000)
    second = between(1,1000)
    amal = toDo[between(0,3)]
    creating()
  }
}
}
function another(){
    if(amal=="+"){ 
  if(two==first+second){
    alert("Togri")
    first = between(1,1000)
    second = between(1,1000)
    correctAnwers+=1
    two = between(first,second)
    amal = toDo[between(0,3)]
    creating()
  }else{
    alert("Notogri!")
    first = between(1,1000)
    second = between(1,1000)
    amal = toDo[between(0,3)]
    creating()
  }
}else if(amal=="-"){
    if(two==first-second){
    alert("Togri")
    first = between(1,1000)
    second = between(1,1000)
    correctAnwers+=1
    two = between(first,second)
    amal = toDo[between(0,3)]
    creating()
}else{
    alert("Notogri!")
    first = between(1,1000)
    second = between(1,1000)
    amal = toDo[between(0,3)]
    creating()
  } 
}else{
    if(two==first*second){
    alert("Togri")
    first = between(1,1000)
    second = between(1,1000)
    correctAnwers+=1
    two = between(first,second)
    amal = toDo[between(0,3)]
    creating()
  }else{
    alert("Notogri!")
    amal = toDo[between(0,3)]
    creating()
  }
}
}
function three(){
    if(amal=="+"){ 
  if(third==first+second){
    alert("Togri")
    first = between(1,1000)
    second = between(1,1000)
    correctAnwers+=1
    third= between(first,second)
    amal = toDo[between(0,3)]
    creating()
  }else{
    alert("Notogri!")
    first = between(1,1000)
    second = between(1,1000)
    amal = toDo[between(0,3)]
    creating()
  }
}else if(amal=="-"){
    if(third==first-second){
    alert("Togri")
    first = between(1,1000)
    second = between(1,1000)
    correctAnwers+=1
    third= between(first,second)
    amal = toDo[between(0,3)]
    creating()
  }else{
    alert("Notogri!")
    first = between(1,1000)
    second = between(1,1000)
    amal = toDo[between(0,3)]
    creating()
  } 
}else{
    if(third==first*second){
    alert("Togri")
    correctAnwers+=1
    first = between(1,1000)
    second = between(1,1000)
    third = between(first,second)
    amal = toDo[between(0,3)]
    creating()
  }else{
    alert("Notogri!")
    amal = toDo[between(0,3)]
    creating()  
}
}
}
function four(){
    if(amal=="+"){ 
  if(fourth==first+second){
    alert("Togri")
    first = between(1,1000)
    second = between(1,1000)
    correctAnwers+=1
    fourth = between(first,second)
    amal = toDo[between(0,3)]
    creating()
  }else{
    alert("Notogri!")
    first = between(1,1000)
    second = between(1,1000)
    amal = toDo[between(0,3)]
    creating()  
}
}else if(amal=="-"){
    if(fourth==first-second){
    alert("Togri")
    correctAnwers+=1
    first = between(1,1000)
    second = between(1,1000)
    fourth= between(first,second)
    amal = toDo[between(0,3)]
    creating()
  }else{
    alert("Notogri!")
    first = between(1,1000)
    second = between(1,1000)
    amal = toDo[between(0,3)]
    creating()
} 
}else{
    if(fourth==first*second){
    alert("Togri")
    first = between(1,1000)
    second = between(1,1000)
    correctAnwers+=1
    fourth = between(first,second)
    amal = toDo[between(0,3)]
    creating()
  }else{
    alert("Notogri!")
    first = between(1,1000)
    second = between(1,1000)
    amal = toDo[between(0,3)]
    creating()  
}
}
}
</script>
<main>
    {#if PlayerName!==undefined}
    <div class='card'>
<h4>Hello {PlayerName}</h4>
<h4>Your Record is:{maxNum}</h4>
<h4>Correct answers:{correctAnwers}</h4>
    </div>
    <div class="m-5">
            <div class="row   gap-5">
              <div class="col-sm bg-danger text-light d-flex div justify-content-center border">
                {first}
              </div>
              <div class="col-sm d-flex div justify-content-center text-light bg-success border">
                {amal}
              </div>
              <div class="col-sm d-flex div bg-danger text-light justify-content-center border">
                {second}
              </div>
            </div>
    </div>
        <div class="container">
            <div>
                <i class="bi bi-envelope"></i>
            </div>
            <div class="row m-5 p-5 ">
              <div on:click={()=>fisrt()} class="col-sm  mx-5 border ans  d-flex bg-danger text-light   alijn-items-center justify-content-center">
                {one}
              </div>
              <div  on:click={()=>another()} class="col-sm  border mx-5 ans d-flex bg-danger text-light   justify-content-center">
{two}
              </div>
            </div>
            <div class="row m-5 p-5">
                <div  on:click={()=>three()} class="col-sm border mx-5 ans d-flex bg-danger text-light   justify-content-center">
{third}
                </div>
                <div on:click={()=>four()} class="col-sm border mx-5 ans d-flex  bg-danger text-light justify-content-center">
{fourth}
                </div>
              </div>
              <div class="gap-5 justify-content-center m-2 d-flex">
                <button class="btn text-light bg-danger">Refresh</button>
                <a href="/calculator">
                <button class="btn text-light bg-danger">Calculator</button>
                </a>
            </div>
          </div>
    {/if}
</main>
<style>
    .div{
        width: 950px;
        font-size: 50px;
    }
    .ans{
        height:50px;
        border:6px solid black;
        display: flex;
        font-size: 25px;
    }
</style>