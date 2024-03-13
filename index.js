const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

let inventory = []; // Initialize inventory

async function start() {
  const welcomeMessage = `Time. Space. Reality. It's more than a linear path.
    It's a prism of endless possibility,
    where a single choice can branch out into infinite realities,
    creating alternate worlds from the ones you know.
    I am God.
    I am your guide through these vast new realities.
    Follow me and ponder the question... Wine or Cheese?
  `;
  let answer = await ask(welcomeMessage);

  if (answer.toLowerCase() === 'wine') {
    await wineStory();
  } else if (answer.toLowerCase() === 'cheese') {
    console.log("Cheese story not implemented yet.");
    // await cheeseStory();
  } else {
    console.log("I SAID CHEESE OR WINE. NOW CHOOSE AGAIN.");
    await start();
  }
}

async function wineStory() {
  console.log("You're in a Box floating in space with a note and a bottle of Domaine de la Romanée-Conti Grand Cru 1945.");
  let playing = true;

  while (playing) {
    let winePath = await ask("What do you want to do? ");
    let command = winePath.toLowerCase().trim();

    switch (command) {
      case 'look at note':
        console.log("The note says, 'In the Box of Infinite dreams you will see a dream among the stars.'");
        break;
      case 'look at the bottle':
        console.log("It's an expensive bottle of wine.");
        break;
      case 'grab the bottle of wine':
        if (!inventory.includes('bottle of wine')) {
          inventory.push('bottle of wine');
          console.log("You've taken the bottle of wine.");
        } else {
          console.log("You already have the bottle of wine in your inventory.");
        }
        break;
      case 'inventory':
        if (inventory.length > 0) {
          console.log("You are carrying:", inventory.join(', '));
        } else {
          console.log("Your inventory is empty.");
        }
        break;
      case 'quit':
        console.log("Quitting the game. Thanks for playing!");
        playing = false;
        break;
      default:
        console.log("I don't understand that action.");
    }
  }
  readlineInterface.close();
}

start();
