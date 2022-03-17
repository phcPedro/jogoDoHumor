//Aqui usando o ForEach irei adicionar audio e movimento a porta com eventos de hover.
const playerContainers = document.querySelectorAll("#door");
const textos = document.querySelector(".msg1");
const textos1 = document.querySelector(".msg2");
const buttonRun = document.querySelector("button");
const casa = document.querySelector("#house");

playerContainers.forEach((container) => {
  container.addEventListener("mouseover", () => {
    const player = container.querySelector("lottie-player");
    const sound = container.querySelector("audio");
    sound.src = "PRINCIPAL/src/open.mp3";
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
    sound.src = "PRINCIPAL/src/close.mp3";
    sound.playbackRate = 0.8;
    player.setDirection(-1);
    player.play();
    sound.play();
    textos.style.display = "none";
    textos1.style.display = "none";
  });
});

buttonRun.addEventListener("click", () => {
  const player = container.querySelector("#door");
  player.style.display = "none";
  textos.style.display = "none";
  textos1.style.display = "none";
  casa.style.display = "flex";
});

//Aqui criarei variaveis e manupularei o AUDIO da pagina e colocarei a musica para tocar no ritmo que eu escolhe.
const bgs1 = document.querySelector("#primeiro");
const bgs2 = document.querySelector("#segundo");
const bgs3 = document.querySelector("#terceiro");
const containersoundg = document.querySelectorAll("#soundg");

bgs1.play();
