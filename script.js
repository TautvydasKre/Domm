/** @format */
const doc = document;

// ketvirtos skaidres

// Div su nuotraukom
const imgContainer = document.createElement("div");

// Div su nuotrauku konteineriu
const konteineris = document.createElement("div");

// Div su nuotrauku konteineriu priskiriu i body
konteineris.appendChild(imgContainer);
document.body.appendChild(konteineris);

// Nuotrauku masyvas
const masiova = [
  "https://image.shutterstock.com/image-illustration/photorealistic-3d-illustration-futuristic-city-260nw-2000612981.jpg",
  "https://image.shutterstock.com/image-photo/cyberpunk-style-image-beautiful-brunette-260nw-1886182798.jpg",
  "https://image.shutterstock.com/image-illustration/3d-rendering-cyberpunk-girl-stylish-260nw-1360869662.jpg",
  "https://image.shutterstock.com/image-illustration/science-fiction-cyborg-female-kneeling-260nw-1367287115.jpg",
  "https://image.shutterstock.com/image-illustration/futuristic-samurai-standing-on-building-260nw-1798382134.jpg",
];

// Sirduciu skaicius ant nuotrauku
const iconsPerImage = 1;

// Ciklas pro nuotrauku url
for (let i = 0; i < masiova.length; i++) {
  // kiekvienai nuotraukai sukuria div
  const pElementas = document.createElement("div");
  pElementas.style.height = "300px";
  pElementas.style.width = "500px";

  // paima random url is masyvo
  const randomPic = random(masiova);
  pElementas.style.backgroundImage = `url('${randomPic}')`;
  pElementas.style.backgroundSize = "cover";

  // priskiria img div i img konteineri
  imgContainer.appendChild(pElementas);

  // kekvienai img opriskiria po sirdele
  for (let j = 0; j < iconsPerImage; j++) {
    // sukuriam sirdele
    const siorca2 = document.createElement("ion-icon");
    siorca2.setAttribute("name", "heart");
    siorca2.style.width = "50px";
    siorca2.style.height = "30px";
    siorca2.style.color = "white";

    // patikrina ar sirdele nebuvo liked
    const localStorageKey = `siorca2_${i}_${j}`;
    const isLiked = localStorage.getItem(localStorageKey);
    if (isLiked === "liked") {
      siorca2.style.color = "red";
      siorca2.classList.add("clicked");
    }

    // mouseover mouse out eventas
    siorca2.addEventListener("mouseover", function () {
      siorca2.style.color = "red";
    });

    siorca2.addEventListener("mouseout", function () {
      if (!siorca2.classList.contains("clicked")) {
        siorca2.style.color = "white";
      }
    });

    siorca2.addEventListener("click", function () {
      // leizdia paspaust sirdele
      siorca2.classList.toggle("clicked");
      if (siorca2.classList.contains("clicked")) {
        localStorage.setItem(localStorageKey, "liked");
      } else {
        localStorage.removeItem(localStorageKey);
      }
    });

    // priskiria sirdele kekvienam div
    pElementas.appendChild(siorca2);
  }
}

// random elemento funkcija
function random(array) {
  const randIndex = Math.floor(Math.random() * array.length);
  return array[randIndex];
}
