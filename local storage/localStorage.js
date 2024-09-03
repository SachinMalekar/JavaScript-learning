

const userName = document.getElementById('input')
console.log('userName', userName);
const button= document.getElementById("clickMe");
console.log('clickMe',button);

button.addEventListener("click", ()=>{
    const value = userName.value;
    console.log(value);
    localStorage.setItem('name', value);
})