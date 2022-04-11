/*
1/ click on a grade selects it, changing its color. Clicking on a new grade 
selects the new one, resetting color of the previous one
2/ Click on submit checks which grade was chosen, keeps it so it can be 
displayed on next screen
3/ Next screen appears by applying display:none; to 1st screen and deleting it
from screen 2
*/

//Takes all elements with the class gradeContainer
const gradeContainers = document.querySelectorAll('.gradeContainer');
//Creates let to display result
let gradeDisplay = document.getElementById('span-result');
// Submit button
const submitBtn = document.getElementById('main-container__button');
//First state/div
const mainState = document.getElementById('main-state');
// Final state/div
const tyState = document.getElementById('ty-state');

let idElt = null;
console.log(idElt)
//Add class Active to clicked grade
gradeContainers.forEach((gradeContainer) => {
    gradeContainer.addEventListener('click', () => {
      // element
      elt = this;
      // id de l'element
      idElt = gradeContainer.getAttribute('id');
      // Adds the value of idElt to gradeDisplay HTML
      gradeDisplay.innerHTML = idElt;
      //Remove Active state
      gradeContainers.forEach((gradeContainer) => {
        gradeContainer.classList.remove('active');
      });
      if (gradeContainer.classList.contains("active")) {
        gradeContainer.classList.remove("active");
      }
      else {
       gradeContainer.classList.add("active");
      }
  });
});

//On click on button -> shows final state
submitBtn.addEventListener('click', function(){
  if (idElt == null){
    alert('Please pick a grade');
  }
  else{
    mainState.style.display = 'none';
    tyState.style.display = 'flex';  
  }
});