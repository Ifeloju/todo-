
const button = document.getElementById('button');
const inputField = document.getElementById('todo');
const taskList = document.getElementById('taskList');


    function addtask(){
      const userInput = inputField.value; 
      console.log(`Hello, ${userInput}!`);
        if (userInput === "") {
        ("Please enter a task!");
        return;
      }
        else{
        const li = document.createElement('li');
        li.textContent = userInput;
        taskList.appendChild(li);
         inputField.value = "";

const deleteBtn = document.createElement('button');
deleteBtn.innerHTML = '🗑️'; 
deleteBtn.className = 'delete-btn'; 

deleteBtn.addEventListener('click', function() {
    li.remove(); 
});

li.appendChild(deleteBtn);
document.getElementById('myUL').appendChild(li);
      }
      }
    button.addEventListener('click', addtask);
      deleteBtn();