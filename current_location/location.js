const button = document.getElementById('get-location-button')
console.log(button)

async function getLocation(position){
    const result = await getData(position.coords.latitude,position.coords.longitude);
    console.log("result is ", result);
}
async function getData(lat,long){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=01249884d595475f929172519243008&q=${lat},${long}&aqi=yes`);
    return await promise.json();
}
function failedToGet(){
    console.log("failed to get location");
}

button.addEventListener('click',async ()=>{
    navigator.geolocation.getCurrentPosition(getLocation,failedToGet);
})