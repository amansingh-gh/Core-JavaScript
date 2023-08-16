// classList -> shows how many classes in it.
// sectionTodo.classList.remove('container') -> it removes the predefined class form html page
// classList.contains -> show the class exist or not (true/false)
// classList.toggle -> if this class exist then it removes else it adds



// classList -> shows how many classes in it
const sectionTodo1 = document.querySelector(".section-todo")
// console.log(sectionTodo.classList);
// classList.add('className') -> added new class in your html page
sectionTodo1.classList.add('bg-dark')
// sectionTodo.classList.remove('container') -> it removes the predefined class form html page


// contians show the class exist or not (true/false)
// const tf= sectionTodo.classList.contains('bgg') 
// console.log(tf)


// classList.toggle -> if this class exist then it removes else it adds
sectionTodo.classList.toggle('bg-dark');




// innerHTML to add html element
const todoList = document.querySelector(".form-todo");
todoList.innerHTML += "<li >Good</li>"
todoList.innerHTML += "<li >Hey</li>"
// this type of adding element method is not good in production level because it decrease perfomance of the application




// using append method
const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Append By JS"
// newTodoItem.appendChild(newTodoItemText);
const todoLIst = document.querySelector(".todo-list");
todoLIst.append(newTodoItem)
console.log(newTodoItem)



// Using "prepend method" 
const newTodoItem2 = document.createElement("li");
newTodoItem2.textContent = "Prepend by JS";
const newTODO = document.querySelector(".todo-list");
newTODO.prepend(newTodoItem2)
console.log(newTodoItem2)



// remove method
const line1 = document.querySelector(".todo-list li");
line1.remove();
console.log(line1)


// before && after
const newItem = document.querySelector("li");
const newNewItem = document.createTextNode("HEYYYYYYYY NEW TODO");
const todoListt = document.querySelector(".todo-list");
todoListt.after(newNewItem);  // we can change after with before to change.







// elem.insertAdjacentHTML(where, html)
// beforebegin - Before the element
// afterbegin - After the beginning of the element(first child)
// beforeend - Before the end of the element(last child)
// afterend - After the element

const todoLists = document.querySelector(".todo-list");
todoLists.insertAdjacentHTML("afterbegin", "<li>Learn New</li>")
todoLists.insertAdjacentHTML("beforeend", "<li>Learn New2</li>")



// clone nodes
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "new todo";
const li2 = li.cloneNode(true);
ul.append(li)
ul.append(li2)


// clone node2
const ul1 = document.querySelector(".todo-list")
const li = document.createElement("li");
li.textContent = "New clone 2 Node"
const li22 = li.cloneNode(true);
ul1.append(li);
ul1.append(li22)





// some old elements to support poor IE
// appendChild;
// insertBefore
// replaceChild
// removeChild


const ul11 = document.querySelector(".todo-list")
const li = document.createElement("li");
li.textContent = "Append Child";
// ul.appendChild(li);
const referenceNode1 = document.querySelector(".first-todo")
ul11.insertBefore(li, referenceNode1)



// replace child
const ul12 = document.querySelector(".todo-list")
const li = document.createElement("li");
li.textContent = "Replace Child";
const referenceNode12 = document.querySelector(".first-todo")
ul12.replaceChild(li, referenceNode)



// remove Child
const ul13 = document.querySelector(".todo-list")
const li = document.createElement("li");
const referenceNode = document.querySelector(".first-todo")
ul13.removeChild(referenceNode)



// static list vs live list
// querySelectorAll gives static list
// getElementBy"something" hamein live list degi


const ul14 = document.querySelector(".todo-list")
const listItemss = ul14.getElementsByTagName("li") //-> returns only li under the ul and ul is under the todo-list.
const listItems = document.getElementsByTagName("li") //-> it gives all the li's in the html page
const sixLi = document.createElement("li")
sixLi.textContent = "item 6"
// const ul = document.querySelector(".todo-list")
ul14.append(sixLi)
console.log(listItems)
console.log(listItemss)








// How to get the dimension of element
const sectionTodo = document.querySelector(".todo-list");
const dim = sectionTodo.getBoundingClientRect();
const dim1 = sectionTodo.getBoundingClientRect().height;
console.log(dim)
console.log(dim1)