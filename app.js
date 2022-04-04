/*
1/ click on a grade selects it, changing its color. Clicking on a new grade 
selects the new one, resetting color of the previous one
2/ Click on submit checks which grade was chosen, keeps it so it can be 
displayed on next screen
3/ Next screen appears by applying display:none; to 1st screen and deleting it
from screen 2
*/

//document.getElementsByClassName creates an array. It needs to be used as such
const gradeContainers = document.getElementsByClassName('gradeContainer')
console.log(gradeContainers)

//For loop to install the event listener on all the gradeContainers
for (const gradeContainer of gradeContainers) {
    gradeContainer.addEventListener('click', function onClick() {
      console.log('box clicked');
    });
  }
