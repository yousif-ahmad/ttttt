let showCategroy = document.getElementById("select-box");
let categroy = document.getElementById("cate");
let overlay = document.getElementById("overlay");

// Show Categroy
showCategroy.onclick = function () {
  categroy.style.visibility = "visible";
  overlay.style.left = "0";
};

// Costom Categroy

document.addEventListener("click", function (e) {
  if (e.target.closest(".proj")) {
    showCategroy.firstElementChild.textContent =
      e.target.closest(".proj").textContent;
    categroy.style.visibility = "hidden";
    overlay.style.left = "-100%";
  }
});

// Disaper Categroy
overlay.onclick = function () {
  categroy.style.visibility = "hidden";
  overlay.style.left = "-100%";
  alert.style.visibility = "hidden";
};

// Check To Back To Main Page

// Allert
let backToMainPageBtn = document.getElementById("back");
let alert = document.getElementById("allaret");
let back = document.getElementById("yes");
let contenue = document.getElementById("no");

backToMainPageBtn.onclick = function () {
  overlay.style.left = 0;
  alert.style.visibility = "visible";
};

// To Contenue
contenue.onclick = function () {
  overlay.style.left = "-100%";
  alert.style.visibility = "hidden";
};
// To Back
back.onclick = function () {
  location.replace(
    "http://127.0.0.1:5500/Practise/Js/Achievement%20Authority/index.html"
  );
};

// Counting Down Time
window.onload = function () {
  countDownTime();
};
let arr = [2400];

let second = document.getElementById("sc");
let mints = document.getElementById("min");
function countDownTime() {
  let light = arr[arr.length - 1];

  let circleLight = document.getElementById("time");
  let zeroMin = document.getElementById("zerom");
  let zeroNum = document.getElementById("zero");
  let again = document.getElementById("again");

  let downSecond = setInterval(function () {
    if (parseInt(second.textContent) === 0) {
      second.textContent = "60";
      parseInt(--mints.textContent);
    }
    parseInt(--second.textContent);
    arr.push(light);
    if (arr[arr.length - 1] === 2400) {
      light = arr[arr.length - 2];
    }
    --light;
    let minLight = (light * 100) / 2400;
    circleLight.style.backgroundImage = `linear-gradient(to right, #a54f3e ${minLight}%, #1e2229 0%)`;

    if (parseInt(second.textContent.length) === 2) {
      zeroNum.style.display = "none";
    } else {
      zeroNum.style.display = "block";
    }
    if (parseInt(mints.textContent.length) === 2) {
      zeroMin.style.display = "none";
    } else {
      zeroMin.style.display = "block";
    }

    if (
      parseInt(mints.textContent) === 0 &&
      parseInt(second.textContent) === 0
    ) {
      again.style.display = "block";
      showCategroy.style.display = "none";
      let cl = document.getElementById("stop");
      cl.style.display = "none";
      circleLight.style.backgroundImage = `linear-gradient(to right, #a54f3e ${0}%, #1e2229 0%)`;
      clearInterval(downSecond);
    }
  }, 1000);
  let stop = document.getElementById("puse");
  let start = document.getElementById("start");

  document.onclick = function (e) {
    if (e.target.closest(".start")) {
      stop.style.display = "flex";
      clearInterval(downSecond);
      start.style.display = "none";
    }

    if (e.target.closest(".puse")) {
      stop.style.display = "none";
      countDownTime();
      start.style.display = "flex";
    }
  };
}

let cl = document.getElementById("stop");
again.onclick = function () {
  cl.style.display = "flex";
  again.style.display = "none";
  showCategroy.style.display = "flex";
  mints.textContent = 39;
  second.textContent = 60;
  location.reload();
};
