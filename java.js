// need to make a 16 by 16 box 
// make a loop that runs to a number in this case 16 (later can be replaced with a user input)
//this loop will make boxes until it runs into the number 
//outer loop makes X rows and the inner loop makes x boxes inside the rows 
//when boxes are created event listeners are added to turn the boxes black when moused over 

const container = document.querySelector('#container');

function createBoxes() {
  let numBox = prompt('how many boxes do you want', 100);
  for (let i = 0; i < numBox; i++) {
    const row = container.appendChild(document.createElement('div'));
    for (let j = 0; j < numBox; j++) {
      const square = document.createElement('div');
      square.className = 'box';
      square.addEventListener("mouseover", function(){
        this.style.backgroundColor = "black";
      });
      row.appendChild(square);
    }
  }
}


// createBoxes(50);


