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
const gradeID = '';
//const submitBtn = document.querySelectorAll('.main-container__button');
// Button is recognized onclick
const submitBtn = document.getElementById('main-container__button');
const mainState = document.getElementById('main-state');
const tyState = document.getElementById('ty-state');
submitBtn.addEventListener('click', function(){
    mainState.style.display = 'none';
    tyState.style.display = 'flex'
});

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
//  document.addEventListener('click', function handleClick(event) {
//    console.log('user clicked: ', event.target);
    
 //   event.target.classList.add('test');
 // });


// element.addEventListener(event, function, useCapture)
// event : click, mouse down...
// useCapture : true or false, optinnal

const onClick = function() {
  this.innerHTML;
}
document.getElementById('1').onclick = onClick;
document.getElementById('2').onclick = onClick;
document.getElementById('3').onclick = onClick;
document.getElementById('4').onclick = onClick;
document.getElementById('5').onclick = onClick;


const spanResult = document.getElementById('span-result')
const content = spanResult.innerHTML;

spanResult.innerHTML = onClick;