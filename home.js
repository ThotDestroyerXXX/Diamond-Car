let toptier = 1;
topcar = [
  "Bugatti W16 Mistral",
  "Porsche 718 Cayman",
  "Mercedes Benz S Class S560",
  "Audi R8",
];
topimg = [
  "../../Assets/homepage_FeaturedCars_Bugatti_W16_Mistral.jpg",
  "../../Assets/homepage_FeaturedCars_Porsche_718_Cayman.webp",
  "../../Assets/homepage_FeaturedCars_MercedesBenz_S_Class.avif",
  "../../Assets/homepage_FeaturedCars_Audi_R8.jpg",
];

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

for (let i = 0; i < 4; i++) {
  document.getElementById("top-yessir").innerHTML += `
    <div class='top-tier${i + 1}'>
        <img src="${topimg[i]}" alt='' />
        <h3>${topcar[i]}</h3>
    </div>
`;
  toptier++;
}

let featured = 0;
featuredCarsTitle = [
  "Chevrolet Camaro",
  "Porsche Taycan",
  "BMW 735i M Sport",
  "Audi A6",
  "Lexus ES 300h Ultra Luxury",
];
featuredCarsDesc = [
  "Camaro offers three powertrains with Direct Injection that pack some serious punch, giving you the horsepower you want to rule the track or run the streets. Each comes with a standard 6-speed manual transmission or an available 10-speed automatic transmission with paddle shifters.",
  "In the ever-evolving realm of automobiles, the Porsche Taycan has emerged as a beacon of innovation, redefining what anelectric vehicle (EV) can achieve. Winning the accolades of the World Luxury Carand World Performance Car at the 2020 World Car Awards, the Taycan has cemented its place among the elite.",
  "Simply lean back - in the new BMW 7 Series Sedan everything is tailored precisely to your needs: High-quality, superbly handcrafted materials, Ergonomically perfected, every function is exactly where you need it, Carefully devised technologies turn every journey into an unforgettable experience",
  "When design meets efficiency and sportiness meets style. When innovation and precision go hand-in-hand and progressive elegance becomes palpable in every line. When form and function become a statement and progress stands above all else. That's when executive class has a new pace setter: the Audi A6 Saloon. More athletic than ever. As supreme as always.",
  "The hybrid battery charges itself while you drive, slow down and brake. The ES 300h Ultra Luxury pairs a 2.5-liter direct injection engine with a powerful, self-charging electric motor to deliver 215 horsepower with maximum fuel efficiency.",
];

featuredCarsPerson = [4, 5, 4, 5, 5];
featuredCarsSteer = ["Automatic"];
featuredCarsFuel = ["72L", "93.4kWh", "88L", "63L", "50L"];
featuredCarsImage = [
  "../../Assets/homepage_Featured_Cars_Chevrolet_Camaro.avif",
  "../../Assets/homepage_Featured_Cars_Porsche_Taycan.jpg",
  "../../Assets/homepage_Featured_Cars_BMW_735i_M_Sport.webp",
  "../../Assets/homepage_Featured_Cars_Audi_A6.jpg",
  "../../Assets/homepage_Featured_Cars_Lexus_ES.jpg",
];

function updateContent() {
  document.getElementById("featured-yessir").innerHTML = `
    <div class="featured-wrap">
      <h1>Featured Cars</h1>
      <div class="featured-slide-cont">
        <div class="featuredcars">
          <img
            src="${featuredCarsImage[featured]}"
            alt=""
          />
        </div>
        <div class="arrows">
          <div class="arrow-left">
            <img src="../../Assets/arrow_left_right.png" alt="" id="lefts" onclick="changeFeatured(0)" />
          </div>
          <div class="arrow-right">
            <img
              src="../../Assets/arrow_left_right.png"
              alt=""
              id="rotated" onclick="changeFeatured(1)"
            />
          </div>
        </div>
        <div class="title-desc">
          <div class="title-spec">
            <h2>${featuredCarsTitle[featured]}</h2>
            <div class="specwrap">
              <div class="person-wrap">
                <div class="personIcon">
                  <img
                    src="../../Assets/homepage_Featured_Cars_Person_Icon.png"
                    alt=""
                  />
                </div>
                <p>${featuredCarsPerson[featured]}</p>
              </div>
              <div class="vertical-line"></div>
              <div class="person-wrap">
                <div class="personIcon">
                  <img
                    src="../../Assets/homepage_Featured_Cars_Steer_Icon.png"
                    alt=""
                  />
                </div>
                <p>${featuredCarsSteer[0]}</p>
              </div>
              <div class="vertical-line"></div>
              <div class="person-wrap">
                <div class="personIcon">
                  <img
                    src="../../Assets/homepage_Featured_Cars_Fuel_Tank_Icon.png"
                    alt=""
                  />
                </div>
                <p>${featuredCarsFuel[featured]}</p>
              </div>
            </div>
          </div>
          <p>${featuredCarsDesc[featured]}</p>
        </div>
      </div>
    </div>
  `;
}

function changeFeatured(direction) {
  if (direction === 1) {
    featured = (featured + 1) % 5;
  } else {
    featured = (featured - 1 + 5) % 5;
  }

  const featuredContainer = document.getElementById("featured-yessir");
  featuredContainer.style.filter = "brightness(0%)";

  featuredContainer.addEventListener(
    "transitionend",
    function onEnd() {
      updateContent();
      featuredContainer.style.filter = "brightness(100%)";
      featuredContainer.removeEventListener("transitionend", onEnd);
    },
    { once: true }
  );
}

updateContent();
// Initial content load
setInterval(() => {
  changeFeatured(1);
}, 10000);

function spanOpen() {
  let spanContent = document.getElementById("open-span");
  spanContent.style.display = "flex";
}

function spanClose() {
  let spanContent = document.getElementById("open-span");
  spanContent.style.display = "none";
}
