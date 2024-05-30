let promise =new Promise((resolve,reject)=>
    {
        console.log("I am a Promise");
         resolve("success");
       // reject("Caught Error");
    });

    //IMP promises are not created it is just handled which came from apis


    //then and carch in Promise

    let getpromise = ()=>{
      return new Promise((resolve,reject)=>{
      console.log("Hi from Promise ");
      //resolve("Success");
      reject("Error");
    });
  };
let promise2 = getpromise();

// promise2.then((res)=>{
//   console.log("Promise Fuilfilled ,",res);
// });
promise2.catch((err)=>{
  console.log("Promise Not fulfilled ",err);
})