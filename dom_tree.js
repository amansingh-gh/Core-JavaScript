// Document -> Root Node
//          DOCUMENT   -> (Root Node)
//             |
//            HTML   ->  (Root Element)
//         /       \
//     head        body
//     /   \       /  \ 
// title script    div  
//                /  \
//               h1   p

// Browser set all the white spaces to normal
// *{
//     white-spaces:normal;  (byDefault)
//     white-space: pre;      (changedByMe)
// } 


// nextSibling = returns the next node (an element node, a text node or a comment node). Whitespace between elements are also text nodes.

// nextElementSibling = returns the next element (not text and comment nodes).

// Traversing the dom tree
const root = document.getRootNode();
console.log(root);
console.log(root.childNodes);

const htmlElemetNode = root.childNodes[0];
console.log(htmlElemetNode.childNodes);

// below line gives the html child nodes
console.log(htmlElemetNode.childNodes);

// below line traverse the upper line
const headNode = htmlElemetNode.childNodes[0]
console.log(headNode)
const headNode1 = htmlElemetNode.childNodes[1]
console.log(headNode1)
const headNode2 = htmlElemetNode.childNodes[2]
console.log(headNode2.childNodes[2])
// console.log(htmlElemetNode.childNodes[2])

console.log(htmlElemetNode.parentNode);

// Sibling relation
const sibling0 = headNode.nextElementSibling
console.log(sibling0) // output->  Text
const sibling1 = headNode1.previousSibling
console.log(sibling1) // output->  Head
const sibling2 = headNode1.nextSibling
console.log(sibling2) // output->  body



// Traversing child to parent
const h1 = document.querySelector("h1");
const hh = h1.parentNode.parentNode
hh.style.color = "red"
hh.style.backgroundColor = "blue"



// childNodes = returns child nodes (element nodes, text nodes, and comment nodes).
// children = returns child elements (not text and comment nodes).

const container = document.querySelector('.container')
console.log(container.childNodes)

