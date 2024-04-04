// Grab all the references to the DOM elements
const toggleButton = document.querySelector('#toggle-btn');
const darkThemeImage = "../../assets/images/darkTheme.jpg"
const lightThemeImage = "../../assets/images/lightTheme.png"
let isDarkMode = false;

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
  blogEntryArray = JSON.parse(localStorage.getItem('blogEntry'));
}

// Toggle dark mode
function toggleDarkMode() {
  let bodyEl = document.body;
  isDarkMode = !isDarkMode;
  bodyEl.classList.toggle("dark-mode");
  toggleButton.setAttribute("src", isDarkMode ? darkThemeImage : lightThemeImage)
}

// Click event for Toggle button
toggleButton.addEventListener('click', function (event) {
  event.preventDefault;
  toggleDarkMode();
});

function clearAllEntries(blogEntryArray) {
  localStorage.clear();
}
