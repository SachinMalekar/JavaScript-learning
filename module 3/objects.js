// in Js objects are key value pair
var person={
    firstName: 'sach',
    lastName: 'Malekar',
    age: 27,
    ownsCar: false
}
console.log(person.age);
console.log(person['firstName']);

var cap= {
    firstName: "steve",
    lastName: "rogger",
    age: 102,
    friends: ['bucky barnes', 'bruce banner', 'tony stark'],
    isAvenger: true,
    address: {
        state: 'new york',
        city: {
            name: 'Brooklyn',
            pincode: 123456
    },

    }
}
// console.log(cap.friends[1]);
// console.log(cap.address.city.name);
console.log("before:", cap);
cap.isAvenger= false;
console.log('after', cap);
cap.movies=['first avenger','civil war','age of ultron'];
console.log('after', cap);
