window.addEventListener("DOMContentLoaded", function () {
  let userName = window.localStorage.getItem("UserName");
  if (userName) {
    document.getElementById("userName").innerHTML = `
    <img src="../../Assets/homepage_Featured_Cars_Person_Icon.png" alt="" />
    `;
    document.getElementById("log-but").style.display = "none";
    document.getElementById("logOut-but-span").style.display = "flex";
    document.getElementById("welcome-yessir").style.display = "flex";
    document.getElementById("welcome-user").innerHTML = `Welcome, ${userName}`;
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

let userName = document.getElementById("Usernameid");
let email = document.getElementById("Emailid");
let phone = document.getElementById("phoneid");
let pass = document.getElementById("passwordid");
let confirmPass = document.getElementById("confirmid");
let checkbox = document.getElementById("checkboxid");

document
  .getElementById("form-loginhehe")
  .addEventListener("submit", function (event) {
    if (
      userCheck() &&
      emailCheck() &&
      phoneCheck() &&
      passCheck() &&
      confirmCheck() &&
      checkboxCheck()
    ) {
      saveUser();
    } else {
      userCheck();
      emailCheck();
      phoneCheck();
      passCheck();
      confirmCheck();
      checkboxCheck();
      event.preventDefault();
    }
  });

function saveUser() {
  window.localStorage.setItem("UserName", userName.value);
}

function userCheck() {
  let userNameValue = userName.value;
  if (userNameValue.length > 10) {
    document.getElementById("namespan").innerHTML =
      "Username must be max 10 length!";
    return false;
  } else if (userNameValue.trim() === "") {
    document.getElementById("namespan").innerHTML =
      "This field must not be empty!";
    return false;
  } else {
    document.getElementById("namespan").innerHTML = " ";
    return true;
  }
}

function checkboxCheck() {
  if (checkbox.checked) {
    return true;
  } else {
    alert("You must agree to the terms and services!");
    return false;
  }
}

function emailCheck() {
  let counterAd = 0;
  let emailValue = email.value;
  if (emailValue.trim() === "") {
    document.getElementById("emailspan").innerHTML = "Field must not be empty!";
    return false;
  }
  for (let i = 0; i < emailValue.length; i++) {
    if (emailValue[i] === "@") {
      counterAd++;
    }
  }
  if (counterAd !== 1) {
    document.getElementById("emailspan").innerHTML = "Email must have 1 @!";
    return false;
  } else if (emailValue[emailValue.indexOf("@") - 1] === ".") {
    document.getElementById("emailspan").innerHTML =
      "Email can not have . right before @!";
    return false;
  } else {
    document.getElementById("emailspan").innerHTML = "";
    return true;
  }
}

function hasUpperCase(str) {
  return str !== str.toLowerCase();
}

function hasLowerCase(str) {
  return str !== str.toUpperCase();
}

function passCheck() {
  let passValue = pass.value;
  if (passValue.trim() === "") {
    document.getElementById("passwordspan").innerHTML =
      "Field must not be empty!";
    return false;
  } else if (!hasUpperCase(passValue)) {
    document.getElementById("passwordspan").innerHTML =
      "Add at least 1 Uppercase letter!";
    return false;
  } else if (!hasLowerCase(passValue)) {
    document.getElementById("passwordspan").innerHTML =
      "Add at least 1 Lowercase letter!";
    return false;
  } else {
    document.getElementById("passwordspan").innerHTML = "";
    return true;
  }
}

function confirmCheck() {
  let confirmPassValue = confirmPass.value;
  if (confirmPassValue.trim() === "") {
    document.getElementById("confirmpassspan").innerHTML =
      "Field must not be empty!";
    return false;
  } else if (confirmPassValue !== pass.value) {
    document.getElementById("confirmpassspan").innerHTML =
      "Password not matching!";
    return false;
  } else {
    document.getElementById("confirmpassspan").innerHTML = "";
    return true;
  }
}

function phoneCheck() {
  let phoneNum = phone.value;
  if (phoneNum.trim() === "") {
    document.getElementById("phonespan").innerHTML = "Field must not be empty!";
    return false;
  } else {
    for (let i = 0; i < phoneNum.length; i++) {
      if (phoneNum[i] < "0" || phoneNum[i] > "9") {
        document.getElementById("phonespan").innerHTML =
          "Phone can only contain number!";
        return false;
      }
    }
    document.getElementById("phonespan").innerHTML = "";
    return true;
  }
}

userName.addEventListener("input", userCheck);
email.addEventListener("input", emailCheck);
pass.addEventListener("input", passCheck);
confirmPass.addEventListener("input", confirmCheck);
phone.addEventListener("input", phoneCheck);
