// create a variable with String
let a = "Sachin";
let b = 6;
console.log(a + b);
console.log(typeof (a + b));

// create a const object
const a1 = {
  name: "sach",
  section: 1,
  isPrincipal: false,
};
console.log(a1.name);

// add new key to const object
a1["friend"] = "sachin";
a1["age"] = 27;

console.log(a1)

// WAP create a word dictionary of 5 word
const dict = {
    appreciate: "recognize full of worth",
    ataraxia:"a state of freedom from emotional disturbance and anxiety",
    irenic: "tending to promote peace or reconciliation; peaceful or conciliatory.",
    feature: "a typical quality or an important part of something:",
    provide: "to give someone something that they need:"
}
console.log(dict['irenic'])
console.log(dict)