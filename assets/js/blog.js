// Grab all the references to the DOM elements
const backBtn = document.querySelector('#back-btn');
const blogList = document.querySelector('#blog-list');

// Blog Array
let blogObject = [];

backBtn.addEventListener('click', function (event) {
    event.preventDefault;
    showBlogLandingPage();
  });

// Function to add elements into the container
function showBlogDetailsPage() {
    for (let i = 0; i < blogObject.length; i++) {
        const blog = blogObject[i];

        // Create new li element for each blog entry
        const li = document.createElement('li');
        li.textContent = blog.title;

        // Create h5 element for the Content
        const contentText = document.createElement('h5');
        contentText.textContent = blog.content;
        contentText.style.fontStyle = "italic";
        li.appendChild(contentText);

        // Create h6 element for username
        const userPost = document.createElement('h6');
        userPost.textContent = (`Posted by:  ${blog.user}`);
        li.appendChild(userPost);

        // Append to the #blog-list
        blogList.appendChild(li);
    }
  }

// Read in all entries from the localstorage
const storedData = JSON.parse(localStorage.getItem('blogEntry'));
if (storedData) {
    blogObject = storedData;
}

// Show the Blog Details
showBlogDetailsPage();