/*
1/ click on a grade selects it, changing its color. Clicking on a new grade 
selects the new one, resetting color of the previous one
2/ Click on submit checks which grade was chosen, keeps it so it can be 
displayed on next screen
3/ Next screen appears by applying display:none; to 1st screen and deleting it
from screen 2
*/

//document.getElementsByClassName creates an array. It needs to be used as such

const gradeContainers = document.querySelectorAll('.gradeContainer');
//const gradeActive = document.querySelectorAll('.active');

const submitBtn = document.querySelectorAll('.main-container__button');
// Button is recognized onclick
console.log(submitBtn)

//Add class Active to clicked grade
gradeContainers.forEach((gradeContainer) => {
    gradeContainer.addEventListener('click', () => {
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

// Console logs what user clicked and adds class to it. Problem : has document, not precise enough.
  document.addEventListener('click', function handleClick(event) {
    console.log('user clicked: ', event.target);
    
    event.target.classList.add('bg-yellow');
  });

// Displays Hello world when button is clicked
  document.getElementById("main-container__button").addEventListener("click", function() {
    alert("Hello World!");
  });
