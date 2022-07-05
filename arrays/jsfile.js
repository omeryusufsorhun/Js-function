let domain="kod"
let isActive=true
let items=[10,20,30,domain,isActive]

console.log(items.length);

console.log(items[items.length-1]);

console.log(
    typeof(items)
);

let dizi=[1,2,3,4,5]
items.push(50)//eleman ekler

items.unshift(1) //başa eleman ekler

items.pop()//sondan eleman siler
let lastItem=items.pop()//sildiği 50 yi lastiteme geri ekler

let firstitem=items.shift()//ilk elemanı siler ve değişkene atar 
console.log(items[items.length-1]);//son eleman yazdırır
items[0]=10;//ilk elemanı 10 olarak değiştirir

let female=["ayse","fatma","hayriye"]
let male=["ali","veli","ahmet"]
items.unshift(female)//female dizisini items dizisinin başına ekledik
console.log(items[0][0]);//female dizisinin ilk elemanını konsola yazdırır
let newItems=items.splice(2,4)
console.log(newItems);
let dizi2=["a","b","c",1,2,3];
console.log(dizi2.indexOf(2));

let es6Items=[...dizi2]
console.log(es6Items);//es6 ile dizi kopyalamak



