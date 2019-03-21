const body = document.querySelector("body");
const IMG_COUNT = 3;

function paintImage(imgNumber){
    const img = new Image();
    img.src = `images/${imgNumber + 1}.jpg`;
    img.classList.add("bgImage");
    body.appendChild(img);
}

function generateRandom(){
    const number = Math.floor(Math.random() * IMG_COUNT);
    return number;
}

function init(){
    const randomNumber = generateRandom();
    paintImage(randomNumber);
}
init();