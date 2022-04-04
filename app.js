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

gradeContainers.forEach((gradeContainer) => {
    gradeContainer.addEventListener('click', () => {
    removeClasses();
    addClasses(gradeContainer);
  });
});

function removeClasses() {
    gradeContainers.forEach((gradeContainer) => {
    gradeContainer.classList.remove("active");
  });
}

function addClasses(gradeContainer) {
    gradeContainer.classList.add("active");
}