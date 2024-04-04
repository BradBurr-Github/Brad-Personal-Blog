// Grab all the references to the DOM elements
const userInput = document.querySelector('#user');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitBtn = document.querySelector('#submit-btn');

// Blog Array
let blogObject = [];

// Funtion to save blogObject into localStorage
function saveToLocalStorage() {
    localStorage.setItem('blogEntry', JSON.stringify(blogObject));
 }

 submitBtn.addEventListener('click', function (event) {
    event.preventDefault();

    // Read in all entries from the localstorage
    const storedData = JSON.parse(localStorage.getItem('blogEntry'));
    if (storedData) {
        blogObject = storedData;
    }

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

    // Add new entries to our array
    blogObject.push({user: user, title: title, content: content});
    
    // Save all entries to our localStorage
    saveToLocalStorage();

    // Redirect to the Blog Details page
    showBlogDetailsPage();
  });
