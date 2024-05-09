let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newgame=document.querySelector("#newgame");
let winnerdiv=document.querySelector(".winner");
let msg=document.querySelector("#msg");
let turn0 = true;

const winpattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


const resetgame=()=>{
    turn0 = true;
    enable();
   
    winnerdiv.classList.add("hide");
};
//creat event listner for each button click

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box was clicked ~");
    if (turn0) {
      //player0 turn
      box.innerText = "O";
      turn0 = !turn0;
    } else {
      //player1 turn
      box.innerText = "X";
      turn0 = !turn0;
    }
    box.disabled = true; //so that we can not change value again in box; or This means the user cannot interact with the element (it cannot be clicked

    //function checkwinner
    //check on every click thats y inside on click
    checkwinner();
  });
});

//enalble function to reset the game 
const enable=()=>{
    for(let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
        }
};

const disablebuttons=()=>{
    for(let box of boxes)
        {
            box.disabled=true;
        }
}
const Showwinner=(winner)=>{
    msg.innerText=`Congratulation Winner is ${winner}`;
    winnerdiv.classList.remove("hide");
    //disable function so as we get winner one time cant do anything other 
    disablebuttons();

}


const checkwinner= ()=>{
    for(let pattern of winpattern)
        {
            //pattern 0 gives value of win which are store in array 
            //boxes of winpattern (1 to 8 ) and then its inner text 
            let posi1_value=boxes[pattern[0]].innerText;
            let posi2_value =boxes[pattern[1]].innerText;
            let posi3_value=boxes[pattern[2]].innerText;
            //check all same or  not 
            if(posi1_value!="" && posi2_value!="" && posi3_value!="")
                {
                    if(posi1_value==posi2_value && posi2_value==posi3_value)
                        {
                            console.log("Winner",posi1_value);
                            Showwinner(posi1_value);

                        }
                }

        }
};
//event listners to reset the  game or new game

reset.addEventListener("click",resetgame);
newgame.addEventListener("click",resetgame);