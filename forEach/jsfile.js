
/*
let user=["lorem","ipsum","dolor","sit","amet"]
const listDOM=document.querySelector("#list")

for(let index=0;index<user.length;index++){
    if(user[index]=="dolor"){break}
    let lidom=document.createElement("li")
    lidom.innerHTML=user[index]
    listDOM.appendChild(lidom)
}

*/
/*let dizi=[1,2,3,4,5];

dizi.forEach((element,index,array)=>console.log(element,index,array))

*/

const products=["mic","cable","speaker","desktop-pc","server","mouse"]

const newProducts=products.filter(item=>item.length>5)
    console.log(newProducts);

const users=[
    {fullname:"ali",isActive:false},
    {fullname:"veli",isActive:true},
    {fullname:"ahmet",isActive:false},
    {fullname:"mehmet",isActive:true},
]

const activeUsers=users.filter(user=>user.isActive===true)//user.isActive yerine direkt isActive de yazılabilirdi
console.log(activeUsers);

