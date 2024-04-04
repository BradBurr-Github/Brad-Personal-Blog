// Logic Code for the Blog App
const toggleButton = document.querySelector('#toggle-btn');

// Redirect to landing page
function showBlogLandingPage() {
  window.location.href = "../../index.html";
}

// Redirect to Blog Details page
function showBlogDetailsPage() {
  window.location.href = "../../blog.html";
}

// Funtion to read blogObject from localStorage
function readFromLocalStorage(blogEntryArray) {

  console.log(blogEntryArray);
  blogEntryArray = JSON.parse(localStorage.getItem('blogEntry'));
}

// Toggle dark mode
function toggleDarkMode() {
  let bodyEl = document.body;
  bodyEl.classList.toggle("dark-mode");
  toggleButton.setAttribute("src","../../assets/images/darkTheme.jpg")
}

toggleButton.addEventListener('click', function (event) {
  event.preventDefault;
  toggleDarkMode();
});