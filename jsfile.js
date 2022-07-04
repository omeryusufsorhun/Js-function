const increase=document.querySelector("#increase")
const decrease=document.querySelector("#decrease")
let counter=0;
const counterDOM=document.querySelector("#counter")
counter.innerHTML=counter;
increase.addEventListener("click",function(){
    counterDOM.innerHTML=counter++;
});
decrease.addEventListener("click",function(){
    counterDOM.innerHTML=counter--;
});