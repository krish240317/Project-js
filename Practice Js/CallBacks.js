function greet(name,callback){
console.log("Hi ",name);
callback();
}

//callback function 
function callme(){
    console.log("Hi i am call back function");
}

//passing function as an argument is a callback function 
greet("krish",callme);

//////////////////////////////////////////////////////////////////////////////example 

const calculate=(a,b,callbackoperation)=>{
    return callbackoperation(a,b);
}

const addition =(a,b)=>{
    return a+b;
}
const ans=calculate(3,4,addition2);

//OR it can also be written ans 
// const addition2=calculate(3,4,function(num1,num2){
//     return num1+num2;
// })
// console.log(addition2);

