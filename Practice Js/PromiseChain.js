

//Suppose this is an api 
// function async1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("DATA1");
//             resolve("Success");
//         },4000);
//     });
// }

//handleing base on api response
// console.log("Fetching Data 1")
// let f1= async1();
// f1.then((res)=>{
//     console.log(res);
// })

//////////////////////////////////////////////////////////////////EG-2///////////////////////////////////////

function async1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("DATA1");
            resolve("Success");
        },4000);
    });
}

function async2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("DATA2");
            resolve("Success");
        },4000);
    });
}

//Now We want first one data is fetch then fter on complition other 
//if we do like this for both 

// console.log("Fetching Data 1")
// let f1= async1();
// f1.then((res)=>{
//     console.log(res);
// });

// console.log("Fetching Data 2")
// let f2= async2();
// f2.then((res)=>{
//     console.log(res);
// })
//Fetching happens parallel after 4 sec 

//so we can use chaining 
// console.log("Fetching Data 1")
// let f1=async1();
// f1.then((res)=>{
//     console.log(res);
//     console.log("Fetching Data 2")
//     let f2=async2();
//     f2.then((res)=>{
//         console.log(res);//can remove this line
//     });
// });

//short way to write it 
// console.log("Fetching Data 1")
// async1().then((res)=>{
//     console.log("Fetching Data 2")
//     async2().then((res)=>{

//     });
// });

//This is real promise chaining; Third Way 
//return the new function so we can put . then in it 
async1()
      .then((res)=>{
        return async2();
      })
      .then((res)=>{
        console.log(res);
      });

