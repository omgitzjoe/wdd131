
function newTask() {
// get the list element from the DOM
const listElement = document.querySelector('#todoList');
// get the value entered into the #todo input
const task = document.querySelector('#todo').value;
//homework help
//document.querySelector('#todo').value='';
//let first=task.split('-')[0];
//let newimage=first +'-full.jpg';
  // render out the list 
  listElement.innerHTML += `
    <li> ${task}
      <div>
        <span data-function="delete">❎</span>
        <span data-function="complete">✅</span>
      </div>
    </li>`;
}

function manageTasks(e) {
  console.log(e);
  // using the event find the li element closest to what they clicked
  const parent = e.target.closest("li");
    // did they click the delete or complete icon?
    if (e.target.getAttribute('data-function') === "delete") {
      parent.remove();
    }
    if (e.target.getAttribute('data-function') === "complete") {
    parent.classList.toggle("strike");
    }
}

// Add your event listeners here
document.querySelector('#submitTask').addEventListener('click', newTask);
document.querySelector('#todoList').addEventListener('click', manageTasks); 

