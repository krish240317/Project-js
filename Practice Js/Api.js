const URL="https://cat-fact.herokuapp.com/facts"
const factpara=document.querySelector("#fact");
const btn1 =document.querySelector("#btn");



//here data return (response) is not acurate response as the data is in JSON for
const getfacts=async ()=>{
    let response = await fetch(URL);
    console.log(response);

    let data = await response.json();
    console.log(data[0].text);

    factpara.innerText=data[1].text;
};
//this all is fetching of data from api

//Doing qll this using promise

function getfacts1(){
    fetch(URL)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data[1]);
        factpara.innerText=data[1].text;

    });
}

btn1.addEventListener("click",getfacts1);

