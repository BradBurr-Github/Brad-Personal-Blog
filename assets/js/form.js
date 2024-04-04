// Grab all the references to the DOM elements
const userInput = document.querySelector('#user');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitBtn = document.querySelector('#submit-btn');

// Track the information entered in the form
let blogObject = {
    user: [],
    title: [],
    content: [],
  };

// Funtion to save blogObject into localStorage
function saveToLocalStorage() {
    localStorage.setItem('blogEntry', JSON.stringify(blogObject));
 }

 submitBtn.addEventListener('click', function () {
    debugger;

    //location.href = "https://www.google.com";

    showBlogDetailsPage();
    // const imageUrl = imageUrlInput.value;
    // if (imageUrl) {
    //   const img = document.createElement('img');
    //   img.src = imageUrl;
    //   img.classList.add('draggable');
    //   document.body.appendChild(img);
    //   // TODO: Create an image element, add a class of draggable, set the src attribute to the image URL provided by the user, and append it to the body element
  
    //   // TODO: Set the `currentElement` to the image element you create.
    //   currentElement = img;
    //   // ? We attach the mouse move event listener to the document and the mood board div so that the element can be dragged anywhere on the screen and dropped only on the mood board div.
    //   attachMouseListeners();
    // }
  });
