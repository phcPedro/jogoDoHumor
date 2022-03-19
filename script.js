//Aqui usando o ForEach irei adicionar audio e movimento a porta com eventos de hover.
const playerContainers = document.querySelectorAll("#door");
const textos = document.querySelector(".msg1");
const textos1 = document.querySelector(".msg2");
const buttonRun = document.querySelector("#entranceDoor");
// const newPage = document.querySelectorAll("#house");
const buttonKey = document.querySelector("#key");
const bgs1 = document.querySelector("#primeiro");
let value = document.getElementById("#key");


  
  buttonKey.addEventListener("click", () => {
    playerContainers.forEach((container) => {
      container.addEventListener("mouseover", () => {
        const player = container.querySelector("lottie-player");
        const sound = container.querySelector("audio");
        sound.src = "./src/open.mp3";
        sound.playbackRate = 0.5;
        sound.play();
        player.setDirection(1);
        player.play();
        textos.style.display = "block";
        textos1.style.display = "block";
      });
  
      container.addEventListener("mouseleave", () => {
        const sound = container.querySelector("audio");
        const player = container.querySelector("lottie-player");
        sound.src = "./src/close.mp3";
        sound.playbackRate = 0.8;
        player.setDirection(-1);
        player.play();
        sound.play();
        textos.style.display = "none";
        textos1.style.display = "none";
      });
    });
    const player = container.querySelector("#door");
    player.style.display = "flex";
    buttonRun.style.display ='block'
    bgs1.play();
    buttonKey.style.display ='none';

  });
buttonRun.addEventListener("click", () => {
  const player = container.querySelector("#door");
  // const casa = house.querySelector('#house');
  player.style.display = "none";
  textos.style.display = "none";
  textos1.style.display = "none";
  // casa.style.display = "flex";
});


const bgs2 = document.querySelector("#segundo");
const bgs3 = document.querySelector("#terceiro");

