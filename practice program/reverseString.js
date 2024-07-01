function reversestr(str){
    let rvrstr = str.split('').reverse().join('');
    console.log(rvrstr);
    return rvrstr;

}
reversestr("sachin");

function reverseString(str){
    var strv = "";
    for(var i = str.length -1; i >= 0; i--){
        strv +=str[i];
    }
    console.log(strv);
    return strv;
}
reverseString("stackoverflow");