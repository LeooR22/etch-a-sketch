const container = document.querySelector(".container")
const btnBlack = document.createElement("button")
const btnGray = document.createElement("button")
const btnRgb = document.createElement("button")
const btnSize = document.createElement("button")
const buttonsContainer = document.querySelector(".buttons")

function createDivs(col, rows){
  for (let i=0 ; i < (col*rows) ; i++){
    const div = document.createElement("div")
    div.style.border = "1px solid red"
    container.style.gridTemplateColumns = `repeat(${col}, 1fr)`
    container.style.gridTemplateColumns = `repeat(${rows}, 1fr)`
    container.appendChild(div).classList.add("box")
  }
}


function grayColor(){
  const boxs = container.querySelectorAll(".box")
  btnGray.textContent= `Gray`
  btnGray.addEventListener(`click`, () =>{
    boxs.forEach(box => box.addEventListener(`mouseover`, () => {
       let Rnum = Math.floor(Math.random() * 255)
       box.style.background = `rgb(${Rnum},${Rnum},${Rnum})`;
     }))
  
  })
  buttonsContainer.appendChild(btnGray).classList.add("btn")

}



function blackColor(){
  const boxs = container.querySelectorAll(".box")
  btnBlack.textContent= `Black`
  btnBlack.addEventListener(`click`, () =>{
    boxs.forEach(box => box.addEventListener(`mouseover`, () => {
       
       box.style.background = "black"
     }))
  
  })
  buttonsContainer.appendChild(btnBlack).classList.add("btn")

}


function rgbColor(){
  const boxs = container.querySelectorAll(".box")
  btnRgb.textContent= `RGB`
  btnRgb.addEventListener(`click`, () =>{
    boxs.forEach(box => box.addEventListener(`mouseover`, () => {
        let R = Math.floor(Math.random()* 255)
        let G = Math.floor(Math.random()* 255)
        let B = Math.floor(Math.random()* 255)
        box.style.background = `rgb(${R},${G},${B})`;
     }))
  
  })
  buttonsContainer.appendChild(btnRgb).classList.add("btn")

}



function reSet(){
  const boxs = container.querySelectorAll(".box")
  boxs.forEach(box=> box.remove())

}

function reSize(){
  btnSize.textContent="Grid Size"
  btnSize.addEventListener("click", () => {
  let user = prompt("What size do you want ?")
  if (user===null || user < 1){
    reSet()
    createDivs(16,16)
    blackColor()
    grayColor()
    rgbColor()
  }
    else {
      reSet()
    createDivs(user,user)
    blackColor()
    grayColor()
    rgbColor()
    }
  })
  buttonsContainer.appendChild(btnSize).classList.add(".btn")
}


createDivs(16,16)
grayColor()
blackColor()
rgbColor()
reSize()