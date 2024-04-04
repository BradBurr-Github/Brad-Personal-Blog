// add blog code here
// read object from local storage
// render blog's info
// footer

const backBtn = document.querySelector('#back-btn');


backBtn.addEventListener('click', function () {
    

    debugger;
    location.href = "index.html";

    showBlogLandingPage();
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