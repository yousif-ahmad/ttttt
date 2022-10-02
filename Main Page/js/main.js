// Control Page Height
let theBody = document.body.getBoundingClientRect().height;
let body = document.getElementById("body");
let footer = document.getElementById("footer");
let bodyHeight = body.getBoundingClientRect().height;
let headHeight = head.getBoundingClientRect().height;
footer.style.height = `${theBody - (headHeight + bodyHeight)}px`;

// Open And Close Aside Par
let menue = document.getElementById("menue");
let overlay = document.getElementById("overlay");
let asdie = document.getElementById("aside");

menue.onclick = function () {
  overlay.style.left = "0";
  asdie.style.right = "0";
};

overlay.onclick = function () {
  asdie.style.right = "-100%";
  overlay.style.left = "-100%";
};

// Open Pages
let zetonPage = document.getElementById("zeton");

zetonPage.onclick = function () {
  location.replace(
    "http://127.0.0.1:5500/Practise/Js/Achievement%20Authority/Main%20Page/anthor%20page/zeton%20page/index.html"
  );
};

let lemonPage = document.getElementById("lemon");

lemonPage.onclick = function () {
  location.replace(
    "http://127.0.0.1:5500/Practise/Js/Achievement%20Authority/Main%20Page/anthor%20page/lemon%20page/inde.html"
  );
};

let kiarPage = document.getElementById("kiar");

kiarPage.onclick = function () {
  location.replace(
    "http://127.0.0.1:5500/Practise/Js/Achievement%20Authority/Main%20Page/anthor%20page/kiar%20page/inde.html"
  );
};

let flflPage = document.getElementById("flfl");

flflPage.onclick = function () {
  location.replace(
    "http://127.0.0.1:5500/Practise/Js/Achievement%20Authority/Main%20Page/anthor%20page/flfl%20page/index.html"
  );
};

let tmatemPage = document.getElementById("tmatem");

tmatemPage.onclick = function () {
  location.replace(
    "http://127.0.0.1:5500/Practise/Js/Achievement%20Authority/Main%20Page/anthor%20page/tmatem%20page/index.html"
  );
};

let gzarPage = document.getElementById("gzar");

gzarPage.onclick = function () {
  location.replace(
    "http://127.0.0.1:5500/Practise/Js/Achievement%20Authority/Main%20Page/anthor%20page/gzar%20page/index.html"
  );
};

let afkadoPage = document.getElementById("afkado");

afkadoPage.onclick = function () {
  location.replace(
    "http://127.0.0.1:5500/Practise/Js/Achievement%20Authority/Main%20Page/anthor%20page/afkado%20page/index.html"
  );
};

let fglPage = document.getElementById("fgl");

fglPage.onclick = function () {
  location.replace(
    "http://127.0.0.1:5500/Practise/Js/Achievement%20Authority/Main%20Page/anthor%20page/fgl%20page/inde.html"
  );
};

let kronbPage = document.getElementById("kronb");

kronbPage.onclick = function () {
  location.replace(
    "http://127.0.0.1:5500/Practise/Js/Achievement%20Authority/Main%20Page/anthor%20page/kronb%20page/index.html"
  );
};
