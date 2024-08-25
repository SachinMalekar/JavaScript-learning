function sum(...arguments) {
    if(arguments.length === 1){
        const[firstArgs] = arguments;
        if(firstArgs instanceof Array)
        {
            sum(...firstArgs);
        }
    }
    return arguments.reduce((a,b)=>a+b);
}

console.log(sum(1,2,3));
console.log(sum(2,3,4));
console.log(sum(67,78));