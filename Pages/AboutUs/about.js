let historyTitle = [
  "Birth of DiamondCut",
  "The Launch of Website",
  "The Rise of Online Marketplace",
  "Top Reseller Award",
  "Maintaining Perfection",
];

let historyDesc = [
  "In 1985, with the burgeoning success of the Ford Model T, used cars began to become a significant part of the automotive market. Ford's mass production techniques made new cars affordable for many Americans, which led to a growing market for second-hand vehicles. In this year, the owner of DiamondCut, Ade Chandra, saw an opportunity to create an affordable yet premium quality of car reseller shop, thus DiamondCut was created.",
  "In 1990, DiamondCut published its first website, revolutionizing its market by providing reliable pricing information online. This guide became an essential tool for both sellers and consumers, bringing more transparency and trust to car transactions. It established standardized pricing, making it easier for consumers to understand the value of their vehicles and negotiate better deals.",
  "In 2005, online car marketplace became a boom for both customers and car sellers. DiamondCut has built its trust and safety for over the years, even before online marketplace became a boom. This allows DiamondCut to be one of the top car resellers to come to, thus skyrocketing its revenue stream. This marked the beginning of a new era where DiamondCut focuses its business on quality and service.",
  "In 2014, DiamondCut won its first award for the best car reseller, best quality, and the best service. This marks the peak Era of DiamondCut where it became one of the best car resellers in the world. Aside from that, it also won the Top 10 Car Reseller Who Has the Most Car Brand Award. Although DiamondCut won so many awards, we always maintain our quality and service so that DiamondCut can be everyone's favorite.",
  "Our journey goes a long way before we finally be one of the best car reseller. At first, gaining award was just a dream we couldn't even imagine happening. But right now, we finally achieve it. As we progress through our journey, we will always maintain our service and quality so that DiamondCut can always be the perfect place to buy and sell cars. We hope YOU can be our loyal customers too!",
];

document
  .getElementById("video-id-about")
  .addEventListener("ended", function () {
    const video = document.getElementById("video-id-about");
    const image = document.getElementById("image-id-about");

    video.style.display = "none";
    video.style.visibility = "hidden";
    video.style.zIndex = "1";
    image.style.position = "relative";
    image.style.visibility = "visible";
    image.style.filter = "brightness(90%)";
    image.style.zIndex = "2";
  });

let lego = 1;

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
  modal.style.display = "initial";
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

function missionChange() {
  document.getElementById("mission1").style.color = "white";
  document.getElementById("horizontal2").style.backgroundColor = "white";
  document.getElementById("horizontal2").style.height = "4px";
  document.getElementById("vision1").style.color = "grey";
  document.getElementById("horizontal1").style.backgroundColor = "grey";
  document.getElementById("horizontal1").style.height = "2px";
  document.getElementById("visionimg").style.position = "absolute";
  document.getElementById("visionimg").style.visibility = "hidden";
  document.getElementById("visionimg").style.opacity = "0";
  document.getElementById("missionimg").style.position = "initial";
  document.getElementById("missionimg").style.visibility = "visible";
  document.getElementById("missionimg").style.marginTop = "0";
  document.getElementById("missionimg").style.opacity = "1";
  document.getElementById("missionimg").style.display = "initial";
  document.getElementById("visionimg").style.display = "none";
  document.getElementById("visionimg").style.marginTop = "-12vh";
  removeProperty();
}

function visionChange() {
  document.getElementById("vision1").style.color = "white";
  document.getElementById("horizontal1").style.backgroundColor = "white";
  document.getElementById("horizontal1").style.height = "4px";
  document.getElementById("mission1").style.color = "grey";
  document.getElementById("horizontal2").style.backgroundColor = "grey";
  document.getElementById("horizontal2").style.height = "2px";
  document.getElementById("missionimg").style.position = "absolute";
  document.getElementById("missionimg").style.visibility = "hidden";
  document.getElementById("missionimg").style.display = "none";
  document.getElementById("missionimg").style.opacity = "0";
  document.getElementById("visionimg").style.position = "initial";
  document.getElementById("visionimg").style.visibility = "visible";
  document.getElementById("visionimg").style.opacity = "1";
  document.getElementById("visionimg").style.display = "initial";
  document.getElementById("missionimg").style.marginTop = "-12vh";
  document.getElementById("visionimg").style.marginTop = "0";

  removeProperty();
}

function removeProperty() {
  document.getElementById("visionimg").style.removeProperty("display");
  document.getElementById("missionimg").style.removeProperty("display");
}

setInterval(() => {
  if (lego % 2 === 0) {
    visionChange();
    lego++;
  } else {
    missionChange();
    lego++;
  }
}, 5000);

let displayImg = 0;

function initialDisplayImg() {
  if (displayImg === 4) {
    document.getElementById("mt-id").style.visibility = "hidden";
  } else if (displayImg === 0) {
    document.getElementById("lt-id").style.visibility = "hidden";
  } else {
    document.getElementById("mt-id").style.visibility = "visible";
    document.getElementById("lt-id").style.visibility = "visible";
  }
  document.getElementById("history-wrap-id").innerHTML += `
  <div class="image-div-id">
    <img
      src="../../Assets/aboutUs_Image_History_0.webp"
      alt=""
      id="image-preview-next0"
    />
  </div>
  <div class="image-div-id">
    <img
      src="../../Assets/aboutUs_Image_History_1.webp"
      alt=""
      id="image-preview-next1"
    />
  </div>
  <div class="image-div-id">
    <img
      src="../../Assets/aboutUs_Image_History_2.avif"
      alt=""
      id="image-preview-next2"
    />
  </div>
  <div class="image-div-id">
    <img
      src="../../Assets/aboutUs_Image_History_3.webp"
      alt=""
      id="image-preview-next3"
    />
  </div>
  <div class="image-div-id">
    <img
      src="../../Assets/aboutUs_Image_History_4.avif"
      alt=""
      id="image-preview-next4"
    />
  </div>
  `;
  document.getElementById(
    "h2-history"
  ).innerHTML = `${historyTitle[displayImg]}`;
  document.getElementById("p-history").innerHTML = `${historyDesc[displayImg]}`;
}

function changeDisplay(x) {
  if (x === 1) {
    const currentImage = document.getElementsByClassName("image-div-id");

    for (let i = 0; i < currentImage.length; i++) {
      currentImage[i].style.transform = `translateX(calc(-100%*(${
        displayImg + 1
      })))`;
    }
    // Apply all changes to the current image

    // Update displayImg and ensure it loops correctly
    displayImg += 1;
    displayImg += 5;
    displayImg %= 5;

    // Manage visibility of elements based on the displayImg value
    if (displayImg === 4) {
      document.getElementById("mt-id").style.visibility = "hidden";
    } else if (displayImg === 0) {
      document.getElementById("lt-id").style.visibility = "hidden";
    } else {
      document.getElementById("mt-id").style.visibility = "visible";
      document.getElementById("lt-id").style.visibility = "visible";
    }
  } else if (x === 0) {
    const currentImage = document.getElementsByClassName("image-div-id");

    for (let i = 0; i < currentImage.length; i++) {
      currentImage[i].style.transform = `translateX(calc(-100%*(${
        displayImg - 1
      })))`;
    }
    // Apply all changes to the current image

    // Update displayImg and ensure it loops correctly
    displayImg -= 1;
    displayImg += 5;
    displayImg %= 5;

    // Manage visibility of elements based on the displayImg value
    if (displayImg === 4) {
      document.getElementById("mt-id").style.visibility = "hidden";
    } else if (displayImg === 0) {
      document.getElementById("lt-id").style.visibility = "hidden";
    } else {
      document.getElementById("mt-id").style.visibility = "visible";
      document.getElementById("lt-id").style.visibility = "visible";
    }
  }
  let idHistory = document.getElementById("history-ids");
  idHistory.style.opacity = "0";
  idHistory.addEventListener(
    "transitionend",
    function onEnd() {
      document.getElementById(
        "h2-history"
      ).innerHTML = `${historyTitle[displayImg]}`;
      document.getElementById(
        "p-history"
      ).innerHTML = `${historyDesc[displayImg]}`;
      idHistory.style.opacity = "1";
      idHistory.removeEventListener("transitionend", onEnd);
    },
    { once: true }
  );
}

initialDisplayImg();
