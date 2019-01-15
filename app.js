var todoItems = document.querySelectorAll('li');
var addBtn = document.querySelector('.add-btn');
var newTodoInput = document.querySelector('.new-todo-input');
var todoList = document.querySelector('.todo-list');
var form = document.querySelector('form');
var completedCountSpan = document.querySelector('.completed-count-span');
var footer = document.querySelector('footer');
var resetBtn = document.querySelector('.reset-btn')

var checkAllDone = function() {
    if (document.querySelectorAll('.completed').length === document.querySelectorAll('li').length) {
        footer.classList.remove('hidden');
    } else {
        footer.classList.add('hidden');
    }
}

var resetAllItems = function() {
    var allItems = document.querySelectorAll('.completed');

    // for (var i = 0; i < allItems.length; i++) {
    //     allItems[i].classList.remove('completed');
    // }

    allItems.forEach(function(todoItem){
        todoItem.classList.remove('completed');
    });

    completedCountSpan.textContent = document.querySelectorAll('.completed').length;
    footer.classList.add('hidden');
}

//function only cares about which item is clicked and cross it out 
var markComplete = function(event) {
    // event.target.style.textDecoration = 'line-through';
    // event.target.style.color = 'gray';
//     // event.target.style.fontSize = 
//     if (event.target.classList.contains('completed')) {
//         //mark uncomplete
//         event.target.classList.remove('completed');
//     } else {
//         //mark complete
//       event.target.classList.add('completed');

//     }
// }
event.target.classList.toggle('completed');
completedCountSpan.textContent = document.querySelectorAll('.completed').length;
checkAllDone();


}

//loop through the items
// for (var i = 0; i < todoItems.length; i++) {
//     todoItems[i].addEventListener('click', markComplete)
// }

todoItems.forEach(function(todoItem) {
    todoItem.addEventListener('click', markComplete)
})

// var firstItem = document.querySelector('li');

// var crossItOut = function() {
//     firstItem.style.textDecoration = 'line-through';
// }

// firstItem.addEventListener('click', crossItOut);


/*
==========
Adding item
==========
*/


var addTodoItem = function() {
    event.preventDefault();
    console.log ('adding item');

    var newListItem = document.createElement('li');
    newListItem.classList.add('todo-item');
    //newListItem.className = 'todo-item'  (old)
    newListItem.textContent = newTodoInput.value
    newListItem.addEventListener('click', markComplete);

    todoList.appendChild( newListItem );

    newTodoInput.value = ''; // clear input box
    completedCountSpan.textContent = document.querySelectorAll('.completed').length; //update again

    checkAllDone();

}

// addBtn.addEventListener('click', addTodoItem);

form.addEventListener('submit', addTodoItem);
resetBtn.addEventListener('click', resetAllItems);

