function handleButtonClick(){
    console.log('Hey I am Clicked..');
}

function secondButtonClick(){
    console.log("Hey, 2nd Button is clicked...")
}
const el = document.getElementById('buttonClick')
const nameBlock = document.getElementById('username');
el.addEventListener("click",()=>{
    if(nameBlock.style.color == "red")
        nameBlock.style.color = "Blue"
    else
        nameBlock.style.color = "red";

    
} )
const allChildren = document.querySelector("body").children;
for (let i=0; i< allChildren.length; i++){
    allChildren.item(i).addEventListener("click",()=>{
        allChildren.item(i).remove;
    })
}
console.log(allChildren)

const createEle = document.getElementById("createEle");
const myContainer = document.getElementById('my-container');

createEle.addEventListener("click", ()=>{
    const el = document.createElement('h1');
    el.innerText = "Rohit sharma";
    myContainer.appendChild(el);
})