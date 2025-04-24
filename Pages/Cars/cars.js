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

function move(x) {
  let image = document.getElementById("image-lesgo");
  let carTitle = document.getElementById("car-title-id");
  let carLogo = document.getElementById("car-logo");
  let price = document.getElementById("pricetag");
  carTitle.style.animation = "removeOpacity 0.2s linear forwards";
  price.style.animation = "removeOpacity 0.2s linear forwards";
  carLogo.style.animation = "removeOpacity 0.2s linear forwards";
  if (x == 1) {
    startBest += 1;
    startBest += 4;
    startBest %= 4;
    image.style.animation = "moveLeft 0.2s linear forwards";
    image.addEventListener("animationend", function end() {
      image.src = `${bestSellerImg[startBest]}`;
      carTitle.innerHTML = `${bestSellerTitle[startBest]}`;
      carLogo.src = `${bestSellerLogo[startBest]}`;
      price.innerHTML = `${bestSellerPrice[startBest]}`;
      image.style.animation = "moveLeft2 0.2s linear forwards";
      carTitle.style.animation = "addOpacity 0.2s linear forwards";
      price.style.animation = "addOpacity 0.2s linear forwards";
      carLogo.style.animation = "addOpacity 0.2s linear forwards";
      image.removeEventListener("animationend", end);
    });
  } else if (x == 0) {
    startBest -= 1;
    startBest += 4;
    startBest %= 4;
    image.style.animation = "moveRight 0.2s linear forwards";
    image.addEventListener("animationend", function end() {
      image.src = `${bestSellerImg[startBest]}`;
      carTitle.innerHTML = `${bestSellerTitle[startBest]}`;
      carLogo.src = `${bestSellerLogo[startBest]}`;
      price.innerHTML = `${bestSellerPrice[startBest]}`;
      image.style.animation = "moveRight2 0.2s linear forwards";
      carTitle.style.animation = "addOpacity 0.2s linear forwards";
      price.style.animation = "addOpacity 0.2s linear forwards";
      carLogo.style.animation = "addOpacity 0.2s linear forwards";
      image.removeEventListener("animationend", end);
    });
  }
}

function initialDisplay() {
  document.getElementById("cont-cars").innerHTML = "";
  if (document.getElementById("bmwid").checked) {
    let descCount = 0;
    for (let i = 0; i < 6; i++) {
      document.getElementById("cont-cars").innerHTML += `
      <div class="car-card">
        <img
          src="${bmwImage[i]}"
          alt=""
          id="image-car"
        />
        <h3>${bmwTitle[i]}</h3>
        <p class="fuel-p">${bmwFuelType[i]}</p>
        <div class="hr-car-card"></div>
        <div class="person-steer-fuel-cont">
          <div class="person-cont">
            <img
              src="../../Assets/homepage_Featured_Cars_Person_Icon.png"
              alt=""
            />
            <p>${bmwPerson[i]}</p>
          </div>
          <div class="vr-person-steer-fuel"></div>
          <div class="steer-cont">
            <img
              src="../../Assets/homepage_Featured_Cars_Steer_Icon.png"
              alt=""
            />
            <p>Automatic</p>
          </div>
          <div class="vr-person-steer-fuel"></div>
          <div class="fuel-cont">
            <img
              src="../../Assets/homepage_Featured_Cars_Fuel_Tank_Icon.png"
              alt=""
            />
            <p>${bmwFuel[i]}</p>
          </div>
        </div>
        <div class="hr-car-card"></div>
        <div class="car-spec" id="addspec${i}">
          
        </div>
        <div class="hr-car-card"></div>
        <div class="logo-price">
          <img src="../../Assets/logo-bmw.png" alt="" id="image-logo"/>
          <p>${bmwPrice[i]}</p>
        </div>
      </div>
    `;

      for (let j = descCount; j < descCount + 4; j++) {
        const yes = document.createElement("p");
        yes.innerHTML = `${bmwDesc[j]}`;
        document.getElementById(`addspec${i}`).appendChild(yes);
      }
      descCount += 4;
    }
  } else if (document.getElementById("porscheid").checked) {
    let descCount = 0;
    for (let i = 0; i < 3; i++) {
      document.getElementById("cont-cars").innerHTML += `
      <div class="car-card">
        <img
          src="${porscheImage[i]}"
          alt=""
          id="image-car"
        />
        <h3>${porscheTitle[i]}</h3>
        <p class="fuel-p">${porscheFuelType[i]}</p>
        <div class="hr-car-card"></div>
        <div class="person-steer-fuel-cont">
          <div class="person-cont">
            <img
              src="../../Assets/homepage_Featured_Cars_Person_Icon.png"
              alt=""
            />
            <p>${porschePerson[i]}</p>
          </div>
          <div class="vr-person-steer-fuel"></div>
          <div class="steer-cont">
            <img
              src="../../Assets/homepage_Featured_Cars_Steer_Icon.png"
              alt=""
            />
            <p>Automatic</p>
          </div>
          <div class="vr-person-steer-fuel"></div>
          <div class="fuel-cont">
            <img
              src="../../Assets/homepage_Featured_Cars_Fuel_Tank_Icon.png"
              alt=""
            />
            <p>${porscheFuel[i]}</p>
          </div>
        </div>
        <div class="hr-car-card"></div>
        <div class="car-spec" id="addspec${i}">
          
        </div>
        <div class="hr-car-card"></div>
        <div class="logo-price">
          <img src="../../Assets/logo-porsche.webp" alt="" id="image-logo" />
          <p>Start From ${porschePrice[i]}</p>
        </div>
      </div>
    `;

      for (let j = descCount; j < descCount + 4; j++) {
        const yes = document.createElement("p");
        yes.innerHTML = `${porscheDesc[j]}`;
        document.getElementById(`addspec${i}`).appendChild(yes);
      }
      descCount += 4;
    }
  } else if (document.getElementById("chevroletid").checked) {
    let descCount = 0;
    for (let i = 0; i < 1; i++) {
      document.getElementById("cont-cars").innerHTML += `
      <div class="car-card">
        <img
          src="../../Assets/carsPage_Chevrolet_Camaro.avif"
          alt=""
          id="image-camaro"
        />
        <h3>Chevrolet Camaro</h3>
        <p class="fuel-p">Gasoline</p>
        <div class="hr-car-card"></div>
        <div class="person-steer-fuel-cont">
          <div class="person-cont">
            <img
              src="../../Assets/homepage_Featured_Cars_Person_Icon.png"
              alt=""
            />
            <p>4</p>
          </div>
          <div class="vr-person-steer-fuel"></div>
          <div class="steer-cont">
            <img
              src="../../Assets/homepage_Featured_Cars_Steer_Icon.png"
              alt=""
            />
            <p>Manual</p>
          </div>
          <div class="vr-person-steer-fuel"></div>
          <div class="fuel-cont">
            <img
              src="../../Assets/homepage_Featured_Cars_Fuel_Tank_Icon.png"
              alt=""
            />
            <p>72L</p>
          </div>
        </div>
        <div class="hr-car-card"></div>
        <div class="car-spec" id="addspec${i}">
          
        </div>
        <div class="hr-car-card"></div>
        <div class="logo-price">
          <img src="../../Assets/logo-chevrolet.png" alt="" id="image-logo" />
          <p>Start From Rp 1.500.000.000</p>
        </div>
      </div>
    `;

      for (let j = descCount; j < descCount + 4; j++) {
        const yes = document.createElement("p");
        yes.innerHTML = `${chevroletDesc[j]}`;
        document.getElementById(`addspec${i}`).appendChild(yes);
      }
      descCount += 4;
    }
  } else if (document.getElementById("bugattiid").checked) {
    let descCount = 0;
    for (let i = 0; i < 1; i++) {
      document.getElementById("cont-cars").innerHTML += `
      <div class="car-card">
        <img
          src="../../Assets/carsPage_Bugatti_W16_Mistral.png"
          alt=""
          id="image-car"
        />
        <h3>Bugatti W16 Mistral</h3>
        <p class="fuel-p">Gasoline</p>
        <div class="hr-car-card"></div>
        <div class="person-steer-fuel-cont">
          <div class="person-cont">
            <img
              src="../../Assets/homepage_Featured_Cars_Person_Icon.png"
              alt=""
            />
            <p>2</p>
          </div>
          <div class="vr-person-steer-fuel"></div>
          <div class="steer-cont">
            <img
              src="../../Assets/homepage_Featured_Cars_Steer_Icon.png"
              alt=""
            />
            <p>Automatic</p>
          </div>
          <div class="vr-person-steer-fuel"></div>
          <div class="fuel-cont">
            <img
              src="../../Assets/homepage_Featured_Cars_Fuel_Tank_Icon.png"
              alt=""
            />
            <p>100L</p>
          </div>
        </div>
        <div class="hr-car-card"></div>
        <div class="car-spec" id="addspec${i}">
          
        </div>
        <div class="hr-car-card"></div>
        <div class="logo-price">
          <img src="../../Assets/logo-bugatti.png" alt="" id="image-bugatti"/>
          <p>Start From Rp 9.999.999.999</p>
        </div>
      </div>
    `;

      for (let j = descCount; j < descCount + 4; j++) {
        const yes = document.createElement("p");
        yes.innerHTML = `${bugattiDesc[j]}`;
        document.getElementById(`addspec${i}`).appendChild(yes);
      }
      descCount += 4;
    }
  } else if (document.getElementById("mercedesid").checked) {
    let descCount = 0;
    for (let i = 0; i < 5; i++) {
      document.getElementById("cont-cars").innerHTML += `
      <div class="car-card">
        <img
          src="${mercedesImage[i]}"
          alt=""
          id="image-car"
        />
        <h3>${mercedesTitle[i]}</h3>
        <p class="fuel-p">${mercedesFuelType[i]}</p>
        <div class="hr-car-card"></div>
        <div class="person-steer-fuel-cont">
          <div class="person-cont">
            <img
              src="../../Assets/homepage_Featured_Cars_Person_Icon.png"
              alt=""
            />
            <p>${mercedesPerson[i]}</p>
          </div>
          <div class="vr-person-steer-fuel"></div>
          <div class="steer-cont">
            <img
              src="../../Assets/homepage_Featured_Cars_Steer_Icon.png"
              alt=""
            />
            <p>Automatic</p>
          </div>
          <div class="vr-person-steer-fuel"></div>
          <div class="fuel-cont">
            <img
              src="../../Assets/homepage_Featured_Cars_Fuel_Tank_Icon.png"
              alt=""
            />
            <p>${mercedesFuel[i]}</p>
          </div>
        </div>
        <div class="hr-car-card"></div>
        <div class="car-spec" id="addspec${i}">
          
        </div>
        <div class="hr-car-card"></div>
        <div class="logo-price">
          <img src="../../Assets/logo-mercedes.png" alt="" id="image-logo" />
          <p>Start From ${mercedesPrice[i]}</p>
        </div>
      </div>
    `;

      for (let j = descCount; j < descCount + 4; j++) {
        const yes = document.createElement("p");
        yes.innerHTML = `${mercedesDesc[j]}`;
        document.getElementById(`addspec${i}`).appendChild(yes);
      }
      descCount += 4;
    }
  } else if (document.getElementById("lexusid").checked) {
    let descCount = 0;
    for (let i = 0; i < 4; i++) {
      document.getElementById("cont-cars").innerHTML += `
      <div class="car-card">
        <img
          src="${lexusImage[i]}"
          alt=""
          id="image-car"
        />
        <h3>${lexusTitle[i]}</h3>
        <p class="fuel-p">${lexusFuelType[i]}</p>
        <div class="hr-car-card"></div>
        <div class="person-steer-fuel-cont">
          <div class="person-cont">
            <img
              src="../../Assets/homepage_Featured_Cars_Person_Icon.png"
              alt=""
            />
            <p>${lexusPerson[i]}</p>
          </div>
          <div class="vr-person-steer-fuel"></div>
          <div class="steer-cont">
            <img
              src="../../Assets/homepage_Featured_Cars_Steer_Icon.png"
              alt=""
            />
            <p>Automatic</p>
          </div>
          <div class="vr-person-steer-fuel"></div>
          <div class="fuel-cont">
            <img
              src="../../Assets/homepage_Featured_Cars_Fuel_Tank_Icon.png"
              alt=""
            />
            <p>${lexusFuel[i]}</p>
          </div>
        </div>
        <div class="hr-car-card"></div>
        <div class="car-spec" id="addspec${i}">
          
        </div>
        <div class="hr-car-card"></div>
        <div class="logo-price">
          <img src="../../Assets/logo-lexus.png" alt="" id="image-logo" />
          <p>Start From ${lexusPrice[i]}</p>
        </div>
      </div>
    `;

      for (let j = descCount; j < descCount + 4; j++) {
        const yes = document.createElement("p");
        yes.innerHTML = `${lexusDesc[j]}`;
        document.getElementById(`addspec${i}`).appendChild(yes);
      }
      descCount += 4;
    }
  } else if (document.getElementById("audiid").checked) {
    let descCount = 0;
    for (let i = 0; i < 5; i++) {
      document.getElementById("cont-cars").innerHTML += `
      <div class="car-card">
        <img
          src="${audiImage[i]}"
          alt=""
          id="image-car"
        />
        <h3>${audiTitle[i]}</h3>
        <p class="fuel-p">${audiFuelType[i]}</p>
        <div class="hr-car-card"></div>
        <div class="person-steer-fuel-cont">
          <div class="person-cont">
            <img
              src="../../Assets/homepage_Featured_Cars_Person_Icon.png"
              alt=""
            />
            <p>${audiPerson[i]}</p>
          </div>
          <div class="vr-person-steer-fuel"></div>
          <div class="steer-cont">
            <img
              src="../../Assets/homepage_Featured_Cars_Steer_Icon.png"
              alt=""
            />
            <p>Automatic</p>
          </div>
          <div class="vr-person-steer-fuel"></div>
          <div class="fuel-cont">
            <img
              src="../../Assets/homepage_Featured_Cars_Fuel_Tank_Icon.png"
              alt=""
            />
            <p>${audiFuel[i]}</p>
          </div>
        </div>
        <div class="hr-car-card"></div>
        <div class="car-spec" id="addspec${i}">
          
        </div>
        <div class="hr-car-card"></div>
        <div class="logo-price">
          <img src="../../Assets/logo-audi.png" alt="" id="image-logo" />
          <p>Start From ${audiPrice[i]}</p>
        </div>
      </div>
    `;

      for (let j = descCount; j < descCount + 4; j++) {
        const yes = document.createElement("p");
        yes.innerHTML = `${audiDesc[j]}`;
        document.getElementById(`addspec${i}`).appendChild(yes);
      }
      descCount += 4;
    }
  } else if (document.getElementById("teslaid").checked) {
    let descCount = 0;
    for (let i = 0; i < 3; i++) {
      document.getElementById("cont-cars").innerHTML += `
      <div class="car-card">
        <img
          src="${teslaImage[i]}"
          alt=""
          id="image-car"
        />
        <h3>${teslaTitle[i]}</h3>
        <p class="fuel-p">${teslaFuelType[i]}</p>
        <div class="hr-car-card"></div>
        <div class="person-steer-fuel-cont">
          <div class="person-cont">
            <img
              src="../../Assets/homepage_Featured_Cars_Person_Icon.png"
              alt=""
            />
            <p>${teslaPerson[i]}</p>
          </div>
          <div class="vr-person-steer-fuel"></div>
          <div class="steer-cont">
            <img
              src="../../Assets/homepage_Featured_Cars_Steer_Icon.png"
              alt=""
            />
            <p>Automatic</p>
          </div>
          <div class="vr-person-steer-fuel"></div>
          <div class="fuel-cont">
            <img
              src="../../Assets/homepage_Featured_Cars_Fuel_Tank_Icon.png"
              alt=""
            />
            <p>${teslaFuel[i]}</p>
          </div>
        </div>
        <div class="hr-car-card"></div>
        <div class="car-spec" id="addspec${i}">
          
        </div>
        <div class="hr-car-card"></div>
        <div class="logo-price">
          <img src="../../Assets/logo-tesla.png" alt="" id="image-logo" />
          <p>Start From ${teslaPrice[i]}</p>
        </div>
      </div>
    `;

      for (let j = descCount; j < descCount + 4; j++) {
        const yes = document.createElement("p");
        yes.innerHTML = `${teslaDesc[j]}`;
        document.getElementById(`addspec${i}`).appendChild(yes);
      }
      descCount += 4;
    }
  } else if (document.getElementById("bentleyid").checked) {
    let descCount = 0;
    for (let i = 0; i < 3; i++) {
      document.getElementById("cont-cars").innerHTML += `
      <div class="car-card">
        <img
          src="${bentleyImage[i]}"
          alt=""
          id="image-car"
        />
        <h3>${bentleyTitle[i]}</h3>
        <p class="fuel-p">${bentleyFuelType[i]}</p>
        <div class="hr-car-card"></div>
        <div class="person-steer-fuel-cont">
          <div class="person-cont">
            <img
              src="../../Assets/homepage_Featured_Cars_Person_Icon.png"
              alt=""
            />
            <p>${bentleyPerson[i]}</p>
          </div>
          <div class="vr-person-steer-fuel"></div>
          <div class="steer-cont">
            <img
              src="../../Assets/homepage_Featured_Cars_Steer_Icon.png"
              alt=""
            />
            <p>Automatic</p>
          </div>
          <div class="vr-person-steer-fuel"></div>
          <div class="fuel-cont">
            <img
              src="../../Assets/homepage_Featured_Cars_Fuel_Tank_Icon.png"
              alt=""
            />
            <p>${bentleyFuel[i]}</p>
          </div>
        </div>
        <div class="hr-car-card"></div>
        <div class="car-spec" id="addspec${i}">
          
        </div>
        <div class="hr-car-card"></div>
        <div class="logo-price">
          <img src="../../Assets/logo-bentley.png" alt="" id="image-logo" />
          <p>Start From ${bentleyPrice[i]}</p>
        </div>
      </div>
    `;

      for (let j = descCount; j < descCount + 4; j++) {
        const yes = document.createElement("p");
        yes.innerHTML = `${bentleyDesc[j]}`;
        document.getElementById(`addspec${i}`).appendChild(yes);
      }
      descCount += 4;
    }
  } else if (document.getElementById("ferrariid").checked) {
    let descCount = 0;
    for (let i = 0; i < 2; i++) {
      document.getElementById("cont-cars").innerHTML += `
      <div class="car-card">
        <img
          src="${ferrariImage[i]}"
          alt=""
          id="image-car"
        />
        <h3>${ferrariTitle[i]}</h3>
        <p class="fuel-p">${ferrariFuelType[i]}</p>
        <div class="hr-car-card"></div>
        <div class="person-steer-fuel-cont">
          <div class="person-cont">
            <img
              src="../../Assets/homepage_Featured_Cars_Person_Icon.png"
              alt=""
            />
            <p>${ferrariPerson[i]}</p>
          </div>
          <div class="vr-person-steer-fuel"></div>
          <div class="steer-cont">
            <img
              src="../../Assets/homepage_Featured_Cars_Steer_Icon.png"
              alt=""
            />
            <p>Automatic</p>
          </div>
          <div class="vr-person-steer-fuel"></div>
          <div class="fuel-cont">
            <img
              src="../../Assets/homepage_Featured_Cars_Fuel_Tank_Icon.png"
              alt=""
            />
            <p>${ferrariFuel[i]}</p>
          </div>
        </div>
        <div class="hr-car-card"></div>
        <div class="car-spec" id="addspec${i}">
          
        </div>
        <div class="hr-car-card"></div>
        <div class="logo-price">
          <img src="../../Assets/logo-ferrari.png" alt="" id="image-logo" />
          <p>Start From ${ferrariPrice[i]}</p>
        </div>
      </div>
    `;

      for (let j = descCount; j < descCount + 4; j++) {
        const yes = document.createElement("p");
        yes.innerHTML = `${ferrariDesc[j]}`;
        document.getElementById(`addspec${i}`).appendChild(yes);
      }
      descCount += 4;
    }
  }
}

function usedNew() {
  if (document.getElementById("newcarid").checked) {
    var usedCar = document.getElementsByClassName("input-label-used");
    for (let i = 0; i < usedCar.length; i++) {
      usedCar[i].style.display = "none";
    }

    var newCar = document.getElementsByClassName("input-label-new");
    for (let i = 0; i < newCar.length; i++) {
      newCar[i].style.display = "flex";
    }
    document.getElementById("bmwid").checked = true;
    initialDisplay();
  } else if (document.getElementById("usedcarid").checked) {
    var usedCar = document.getElementsByClassName("input-label-used");
    for (let i = 0; i < usedCar.length; i++) {
      usedCar[i].style.display = "flex";
    }

    var newCar = document.getElementsByClassName("input-label-new");
    for (let i = 0; i < newCar.length; i++) {
      newCar[i].style.display = "none";
    }
    document.getElementById("teslaid").checked = true;
    initialDisplay();
  }
}

usedNew();

initialDisplay();
