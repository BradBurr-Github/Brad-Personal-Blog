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

        const contentText = document.createElement('h5');
        contentText.textContent = blog.content;
        contentText.style.fontStyle = "italic";
        li.appendChild(contentText);

        // Append a 'Posted By' user at the bottom
        const userPost = document.createElement('h6');
        userPost.textContent = (`Posted by:  ${blog.user}`);
        //const hrLine = document.createElement('hr');
        //const contentText = document.createElement('button');
        //hrLine.setAttribute("margin-top","-11px")
        li.appendChild(userPost);
        //li.appendChild(hrLine);
        
        
        //li.appendChild(contentText);

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