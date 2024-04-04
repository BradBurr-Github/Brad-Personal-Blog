// Grab all the references to the DOM elements
const userInput = document.querySelector('#user');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitBtn = document.querySelector('#submit-btn');

// Track the information entered in the form
let blogObject = [];

// Funtion to save blogObject into localStorage
function saveToLocalStorage() {
    localStorage.setItem('blogEntry', JSON.stringify(blogObject));
 }

 submitBtn.addEventListener('click', function (event) {
    event.preventDefault();

    localStorage.clear();
    // Read in all entries in the localstorage
    const storedData = JSON.parse(localStorage.getItem('blogEntry'));
    if (storedData) {
        blogObject = storedData;
    }
    // userInput.value = "Trent";
    // titleInput.value = "My FIRST Blog";
    // contentInput.value = "This is MY CONTENT";

    let user = userInput.value;
    let title = titleInput.value;
    let content = contentInput.value;

    // Make sure all 3 text boxes have values in them
    if(!user) {
        window.alert("Please enter a valid Username and then click the 'Submit' button again.");
        return;
    }
    if(!title) {
        window.alert("Please enter a valid Title and then click the 'Submit' button again.");
        return;
    }
    if(!content) {
        window.alert("Please enter valid Content and then click the 'Submit' button again.");
        return;
    }
    
    blogObject.push({user: user, title: title, content: content});


    //  userInput.value = "JEN";
    // titleInput.value = "My 2nd Blog";
    // contentInput.value = "This is MY CONTENT again...";

    // user = userInput.value;
    // title = titleInput.value;
    // content = contentInput.value;

    // blogObject.push({user: user, title: title, content: content});

    
    saveToLocalStorage();

    //showBlogDetailsPage();
  });
