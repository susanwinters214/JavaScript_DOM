console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

let node1 = document.getElementById("node1");
node1.textContent =  'I used the getElementById("node1") method to access this';

let node2 = document.getElementsByClassName("node2")[0];
node2.textContent =  'I used the getElementsByClassName(\"node2\") method to access this';

let h3s = document.getElementsByTagName("h3");

for (let h3 of h3s) {
    h3.textContent ='I used the getElementByTagName("h3") method to access all of these';
}


/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/


let p = document.createElement("p");
p.textContent = "This node was created using the createElement() method";

let parent2 = document.querySelector("#parent");
parent2.appendChild(p);

let link = document.createElement("a");
link.textContent = "Google Search"; 
link.href = "https://google.com";

parent2.insertBefore(link, p);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/


let child = document.createElement("p");
child.textContent = "New Child Node";

let parent3 = document.querySelector("#exercise-container3");
let replaceChild = document.querySelector("#N1");

parent3.replaceChild(child, replaceChild);

setTimeout(() => {
    parent3.removeChild(child);
  }, 5000);



/*----------- Exercise #4: LIST ITEMS ----------- */

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];

let ul = document.createElement("ul");

for (let item of list) {
    let li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  }

let container4 = document.querySelector("#container");
container4.appendChild(ul);


/*----------- Exercise #5: DOM EVENTS --------------*/

function handleEsc(event) {
    if (event.key == "Escape") {
      document.body.removeChild(document.querySelector("#modal"));
    }
  }
  
  function show(event) {
    window.addEventListener("keyup", handleEsc);
  
    let modalContainer = document.createElement("div");
    let modalBody = document.createElement("div");
    let title = document.createElement("h2");
    let content = document.createElement("p");
    let closeButton = document.createElement("button");
  
    title.textContent = "Action Required";
    content.textContent = "You need to ...";
    closeButton.textContent = "Close";
    closeButton.addEventListener("click", (event) => {
      document.body.removeChild(modalContainer);
      window.removeEventListener("keyup", handleEsc);
    });
  
    modalContainer.id = "modal";
    modalBody.classList.add("modal-card");
  
    modalContainer.addEventListener("click", (event) => {
      console.log(event);
      if (event.target == modalContainer) {
        document.body.removeChild(modalContainer);
        window.removeEventListener("keyup", handleEsc);
      }
    });
  
    modalBody.append(title, content, closeButton);
    modalContainer.appendChild(modalBody);
    document.body.appendChild(modalContainer);
  }
  
  let btn = document.querySelector("#btn");
  
  btn.addEventListener("click", show);
