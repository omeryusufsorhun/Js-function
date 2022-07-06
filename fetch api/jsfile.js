let userListDOM=document.querySelector("#list")

fetch('https://jsonplaceholder.typicode.com/todos/1/posts')
  .then(response => response.json())
  .then(json =>json.forEach(item=>{
    let liDOM=document.createElement("li")
    liDOM.innerHTML=item.title
    userListDOM.appendChild(liDOM)

  }))//json dosyadan veri çekmek
  //listede yazdırmak