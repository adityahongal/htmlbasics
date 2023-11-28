// CLICK EVENT
//document.querySelector("html").addEventListener("click", function () {
//    alert("Ouch! Stop poking me!");
//  });

// LOGO CHANGE ON CLICKING
// const myImage = document.querySelector("img");

// myImage.onclick = () => {
//   const mySrc = myImage.getAttribute("src");
//   if (mySrc === "images\firefoxlogo.png") {
// myImage.setAttribute("src", "images\firefoxlogo2.png");
//   } else {
// myImage.setAttribute("src", "images\firefoxlogo.png");
//   }
// };


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }
  

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }
  
  myButton.onclick = () => {
    setUserName();
  };