// Logic Code for the Blog App
const blogLandingPage = "index.html";
const blogDetailsPage = "blog.html";

function showBlogLandingPage() {
  location.href = blogLandingPage;
}

function showBlogDetailsPage() {
  location.href = blogDetailsPage;
}

// Funtion to read blogObject from localStorage
function readFromLocalStorage(blogEntryArray) {
  debugger;
  console.log(blogEntryArray);
  blogEntryArray = JSON.parse(localStorage.getItem('blogEntry'));
}