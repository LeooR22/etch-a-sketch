const container = document.querySelector("#container");


for (i=0; i<(7*7); i++){
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "1";

container.appendChild(content);
}



const contentHover = container.querySelectorAll(".content")

contentHover.forEach(content => content.addEventListener("mouseover", pintado))

function pintado() {

  const cajas = document.querySelector(".content"); 

  cajas.classList.remove("content")
  cajas.classList.add("pintar");
  
  
}