window.addEventListener("DOMContentLoaded", function () {
  let userName = window.localStorage.getItem("UserName");
  if (userName) {
    document.getElementById("userName").innerHTML = `
    <img src="../../Assets/homepage_Featured_Cars_Person_Icon.png" alt="" />
    `;
    document.getElementById("log-but").style.display = "none";
    document.getElementById("log-buts").style.display = "none";
    document.getElementById("logOut-but-span").style.display = "flex";
    document.getElementById("welcome-yessir").style.display = "flex";
    document.getElementById("welcome-user").innerHTML = `Welcome, ${userName}`;
    document.getElementById("welcome-users").innerHTML = `Welcome, ${userName}`;
  }
});

function spanOpen() {
  let spanContent = document.getElementById("open-span");
  spanContent.style.display = "flex";
}

function spanClose() {
  let spanContent = document.getElementById("open-span");
  spanContent.style.display = "none";
}

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("welcome-yessir");

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function logOut() {
  window.localStorage.removeItem("UserName");
  location.reload();
}

let counts = 0;
function autoSlide() {
  let image = document.getElementsByClassName("image-good");
  if (counts === 4) {
    for (let i = 0; i < image.length; i++) {
      image[i].style.transform = `translateX(0%)`;
    }
    counts = -1;
  } else {
    for (let i = 0; i < image.length; i++) {
      image[i].style.transform = `translateX(calc(-100% * ${counts + 1}))`;
    }
  }
}

setInterval(() => {
  autoSlide();
  counts++;
}, 5000);
