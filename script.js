// Rock paper scissors game

// Random Computer choice
function getComputerChoice() {
  let option = Math.floor(Math.random() * 3);
  let hand = "";
  if (option == 0) {
    hand = "rock";
  } else if (option == 1) {
    hand = "paper";
  } else if (option == 2) {
    hand = "scissors";
  }
  return hand;
}

// Play round

function playRound(player, computer) {
  const player_choice = player.toLowerCase();
  const computer_choice = computer.toLowerCase();

  if (
    (player_choice == "rock" && computer_choice == "rock") ||
    (player_choice == "paper" && computer_choice == "paper") ||
    (player_choice == "scissors" && computer_choice == "scissors")
  ) {
    return "It's a tie, both choose " + player_choice;
  }

  // When player selects Rock
  if (player_choice == "rock" && computer_choice == "scissors") {
    return "You Win! Rock beats Scissors";
  } else if (player_choice == "rock" && computer_choice == "paper") {
    return "You Lose! Paper beats Rock";
  }

  // When player selects Paper
  if (player_choice == "paper" && computer_choice == "scissors") {
    return "You Lose! Scissors beats Paper";
  } else if (player_choice == "paper" && computer_choice == "rock") {
    return "You Win! Paper beats Rock";
  }

  //When player selects Scissors
  if (player_choice == "scissors" && computer_choice == "rock") {
    return "You Lose! Rock beats Scissors";
  } else if (player_choice == "scissors" && computer_choice == "paper") {
    return "You Win! Scissors beats Paper";
  }
}

// function game() {
//   // This plays 5 rounds
//   let playerSelection = "";
//   for (let i = 1; i <= 5; i++) {
//     playerSelection = prompt(
//       "Round: " + i + " Chose Rock, Paper or Scissors: "
//     );
//     console.log(playRound(playerSelection, getComputerChoice()));
//   }
// }

function game (){
    const buttons = document.querySelectorAll('button');
    const option = document.querySelector('.game');
    const content = document.createElement('div');
    content.classList.add('res');
    option.appendChild(content);



    buttons.forEach((button) => {

        button.addEventListener('click',() => {
          console.log(playRound(button.id, getComputerChoice()));
          content.textContent = (playRound(button.id, getComputerChoice()));
        })
    })
}   

game();
