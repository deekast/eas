// need to make a 16 by 16 box 
// make a loop that runs to a number in this case 16 (later can be replaced with a user input)
//this loop will make boxes until it runs into the number 
//outer loop makes X rows and the inner loop makes x boxes inside the rows 

const container = document.querySelector('#container');

function createBoxes(numBox) {
  for (let i = 0; i < numBox; i++) {
    const row = container.appendChild(document.createElement('div'));
    for (let j = 0; j < numBox; j++) {
      const square = document.createElement('div');
      square.className = 'box';
      row.appendChild(square);
    }
  }
}

createBoxes(10);


