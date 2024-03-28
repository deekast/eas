document.addEventListener("DOMContentLoaded", function() {
  //constants for the index.js "global"
  const gridContainer = document.getElementById('gridContainer');
  const userList = document.getElementById('userList');

//Creates the etch a sketch and its mouseover functionality 
    function createBoxes() {
       container.innerHTML = ''; 
        let numBox = prompt('how big of a grid??', 21);
        for (let i = 0; i < numBox; i++) {
          const row = container.appendChild(document.createElement('div'));
          for (let j = 0; j < numBox; j++) {
            const square = document.createElement('div');
            square.className = 'box';
            square.addEventListener("mouseover", function(){
              this.style.backgroundColor = "pink";
            });
            row.appendChild(square);
          }
        }
      }
      

//Fetch the promise from json and then call the displayUsers function 
    function fetchUsers() {
        fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(displayUsers)
    }
    
  
// Function to display users called by the fetchUsers function 
function displayUsers(users) {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';   // clear previous user list so list doesnt keep repeating  if you click button more than one time
    users.forEach(user => {
        const userItem = document.createElement('li');
        const userDetails = `${user.username} : ${user.firstName} ${user.lastName} - ${user.email}`;
        userItem.textContent = userDetails;
        userList.appendChild(userItem);
    });

    userList.style.display = 'block'; // change the html display style from none to block 
    gridContainer.style.display = 'none'; // should get rid of grid but doesnt need to troubleshoot 
}

  //button event listeners 

    document.getElementById('refreshButton').addEventListener('click', createBoxes);
    document.getElementById('usersButton').addEventListener('click', fetchUsers);
  });
  