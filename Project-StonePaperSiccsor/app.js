let user_score = 0;
let comp_score = 0;

let userscorepara = document.querySelector("#user_score");
let compscorepara = document.querySelector("#comp_score");

let choices = document.querySelectorAll(".choice");
//access msg to show msg on scree on win and lose
let msg = document.querySelector("#msg");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randid = Math.floor(Math.random() * 3);
  return options[randid];
};

const drawgame = () => {
  console.log("Game is Drawed");
  msg.innerText = "Game Draw!";
  msg.style.backgroundColor = "black ";
};

const show_winner = (userwin, user_choice, cp_choice) => {
  if (userwin) {
    user_score++;
    userscorepara.innerText = user_score;
    console.log("You Win");
    msg.innerText = `You Win-Your ${user_choice} beats ${cp_choice}!`;
    msg.style.backgroundColor = "green";
  } else {
    comp_score++;
    compscorepara.innerText = comp_score;
    console.log("You Lose");
    msg.innerText = `You Lose-${cp_choice} beats your ${user_choice}!`;
    msg.style.backgroundColor = "brown";
  }
};

//main function
const playgame = (user_choice) => {
  console.log("User choice is ", user_choice);
  const cp_choice = genCompChoice();
  console.log("Computer choice is ", cp_choice);

  if (user_choice == cp_choice) {
    drawgame();
  } else {
    let userwin = true;
    if (user_choice == "rock") {
      //two options left paper or scissor
      if (cp_choice == "paper") {
        userwin = false;
      } else if (cp_choice == "scissors") {
        userwin = true;
      }
    } else if (user_choice == "paper") {
      if (cp_choice == "rock") {
        userwin = true;
      } else if (cp_choice == "scissors") {
        userwin = false;
      }
    } else {
      if (cp_choice == "paper") {
        userwin = true;
      } else if (cp_choice == "rock") {
        userwin = false;
      }
    }
    show_winner(userwin, user_choice, cp_choice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    console.log("Clicked!!!");
    const user_choice = choice.getAttribute("id"); //To get the id that was in html in our js or concole (We can know who is clicked)

    //after this game starts
    playgame(user_choice);
  });
});
