//Practical use of Lodash 

const _ = require ("lodash");  //Adds Lodash to your js file

//Loops Example: Printing the string "foo" four times
//Vanilla JS code
let log = (text) =>{
    console.log(text);

};
let i=0;
while (i<4){
    log("foo");
    i += 1;
}
//Lodash JS code
_.times(4,()=> console.log("foo"));

//Arrays Example: Accessing an element in an array
// Vanilla JS code
let nums=[1,2,3,4,5,6,7,8]
let num =nums[3]
console.log(num)

// Lodash JS code
console.log(_.nth(nums,3))

//Numbers example: Calculating the sum of numbers in an array
// Vanilla JS code.
const vals=[-2,0,3,7,-5,1,2]
const sum=vals[0]+vals[1]+vals[2]+vals[3]+vals[4]+vals[5]+vals[6]
console.log(sum)

//Lodash JS code
let total = _.sum(vals)
console.log(total)


