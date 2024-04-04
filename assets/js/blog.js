// add blog code here
// read object from local storage
// render blog's info
// footer
const backBtn = document.querySelector('#back-btn');

backBtn.addEventListener('click', function (event) {
    event.preventDefault;
    showBlogLandingPage();
  });