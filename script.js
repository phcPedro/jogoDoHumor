//Aqui usando o ForEach irei adicionar audio e movimento a porta com eventos de hover. e Declaro algumas variaveis
const playerContainers = document.querySelectorAll("#door");
const buttonRun = document.querySelector("#entrarB");
const buttonKey = document.querySelector("#key");
const soundSfx = document.querySelector("#primeiro");
let contador = 0;
const buttonwalking = document.querySelector("#btnAndar");
const teste = document.querySelector("#testeSom");
const final = document.querySelector('video');
//Botão de click para destravar a porta e os eventos do playerContainer
buttonKey.addEventListener("click", () => {
  soundSfx.play();
  playerContainers.forEach((container) => {
    container.addEventListener("mouseover", () => {
      const player = container.querySelector("lottie-player");
      const sound = container.querySelector("audio");
      sound.src = "./src/open.mp3";
      sound.playbackRate = 0.5;
      sound.play();
      player.setDirection(1);
      player.play();
    });

    container.addEventListener("mouseleave", () => {
      const sound = container.querySelector("audio");
      const player = container.querySelector("lottie-player");
      sound.src = "./src/close.mp3";
      sound.playbackRate = 0.8;
      player.setDirection(-1);
      player.play();
      sound.play();
    });
  });
  //Nesse bloco destrava a porta e some com a chave
  const player = document.querySelector("#door");
  player.style.display = "flex";
  buttonRun.style.display = "block";
  buttonKey.style.visibility = "hidden";
});
//Ações do botão para entrar na porta e mudar de div. E adicionar e mudar valores de elementos com timeout.
buttonRun.addEventListener("click", () => {
  soundSfx.src = "./src/passos.mp3";
  soundSfx.play();
  buttonKey.style.visibility = "hidden";
  document.querySelector("#door").style.display = "none";
  document.querySelector("#darkHouse").style.display = "flex";
  //bloco com timeouts para eventos de som e imagem
  setTimeout(() => {
    soundSfx.src = "./src/creepyPiano.mp3";
    soundSfx.play();
    document.querySelector("#eventos").style.display = "block";
  }, 10000);
  setTimeout(() => {
    document.querySelector("#btnAndar").style.display = "block";
    document.querySelector("#eventos").style.display = "none";
  }, 16000);
});
//Ação do botão de andar para mudarmos de div e elementos da tela.
buttonwalking.addEventListener("click", () => {
  if (contador == 0) {
    soundSfx.src = "./src/passos.mp3";
    soundSfx.play();
    document.querySelector("#btnAndar").style.display = "none";
    document.querySelector("#eventos").style.display = "none";
    document.querySelector("#darkHouse").style.animation = "walking 11s";
    setTimeout(() => {
      document.querySelector("#darkHouse").style.backgroundImage =
        "url(./src/personInDoor.jpg)";
      document.querySelector("#speak").style.display = "block";
      soundSfx.src = "./src/principal_sound.mp3";
      soundSfx.play();
    }, 11000);
    setTimeout(() => {
      document.querySelector("#speak").style.display = "none";
      document.querySelector("#eventos").style.display = "block";
      document.querySelector("#eventos").innerHTML="Esse cara é estranho.";
      
    }, 15000);
    setTimeout(() => {
      document.querySelector("#eventos").innerHTML="É melhor eu ir embora, não sei oq ele pode fazer comigo.";
      soundSfx.src = "./src/segundary_sound.mp3";
      soundSfx.play();
    }, 20000);
    setTimeout(() => {
      document.querySelector("#eventos").style.display = "none";
      document.querySelector("#btnAndar").style.display = "block";
    }, 25000);
    contador++;
  } else if (contador == 1) {
    document.querySelector("#btnAndar").style.display = "none";
    soundSfx.src = "./src/passos.mp3";
    soundSfx.play();
    document.querySelector("#darkHouse").style.backgroundImage ="url(./src/shadowMan.jpg)";
    document.querySelector("#darkHouse").style.animation = "zoom 11s";
    setTimeout(() => {
      document.querySelector("#eventos").innerHTML="Olá, poderia me ajudar? Preciso encontrar a saida."
      document.querySelector("#eventos").style.display = "block";
     
    }, 11000);
    setTimeout(() => {
      document.querySelector("#speak").style.display = "block";
      document.querySelector("#speak").innerHTML ='Vá em frente, ele te espera';
    }, 14000);
    setTimeout(() => {
      soundSfx.src = "./src/stranger.mp3";
      soundSfx.play();
      
    }, 15000);
    setTimeout(() => {
      document.querySelector("#speak").innerHTML ='Continue andandando.';
      document.querySelector("#eventos").style.display = "none";
    }, 20000);
    setTimeout(() => {
      document.querySelector("#btnAndar").style.display = "block";
      document.querySelector("#speak").style.display = "none";
    }, 25000);
    contador++;
  }else if(contador ==2){
    document.querySelector("#btnAndar").style.display = "none";
    document.querySelector("#darkHouse").style.backgroundImage =
    "url(./src/tv.jpg)";
    
  setTimeout(() => {
    document.querySelector("#eventos").style.display = "block";
    document.querySelector("#eventos").innerHTML ='Uma tv?';
  }, 11000);
  setTimeout(() => {
    document.querySelector("#eventos").innerHTML ='Não tem saida.';
  }, 15000);
  setTimeout(() => {
    document.querySelector("#eventos").innerHTML ='Só resta essa TV.';
  }, 18000);
  setTimeout(() => {
    document.querySelector("#eventos").innerHTML ='Ligar TV?';
    document.querySelector("#eventos").background ='#000080';
    document.querySelector("#btnAndar").style.display = "block";
  }, 20000);
  contador++;
}else{
  document.querySelector("#eventos").style.display = "none";
  final.style.display='block';
  final.play();
  
}
});
