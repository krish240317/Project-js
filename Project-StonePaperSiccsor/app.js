let user_score=0;
let comp_score=0;

let choices=document.querySelectorAll(".choice");

let genCompChoice=()=>{

};

let playgame=(user_choice)=>{
    console.log("User choice is ",user_choice)
};

choices.forEach((choice)=>{
    const user_choice=choice.getAttribute("id");//To get the id that was in html in our js or concole (We can know who is clicked)
    choice.addEventListener("click",()=>{
        console.log("Clicked!!!");
        //after this game starts 
        playgame(user_choice);
    })
}); 