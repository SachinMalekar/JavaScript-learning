console.log("script javascript");

let a=17;

// alert(a);
 var b =20;
 console.log(a);
console.log(b);

function isNumber(value){
    if(  value === null ) return false;
    return value.constructor === Number
}
console.log(isNumber(undefined));