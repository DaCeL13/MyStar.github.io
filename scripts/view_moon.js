document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#yes-btn").addEventListener("click", handleYes);
});
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#no-btn").addEventListener("click", handleNo);
});

const luna = document.getElementById('moon');
const ground = document.getElementById('ground');
const stars = document.getElementsByClassName('space');
const dialog = document.querySelector(".dialog");
const dialogText = document.querySelector(".text");
const yesButton = document.querySelector("#yes-btn");
const noButton = document.querySelector("#no-btn");
const image = document.querySelector("#astronaut-img");
const astronaut = document.querySelector("#astronaut");
const astronautCont = document.querySelector(".astronaut-container");
const message = document.querySelector(".message");
const starsCont = document.querySelector('.stars-container');
const audio = document.querySelector('#song');
const lyricsEng = document.querySelector("#lyrics-eng");
const lyricsEsp = document.querySelector("#lyrics-esp");
const lyrics = document.querySelector(".lyrics");

let enCentro = false;
let currentStep = 0;

const messages = [
    { text: "Oye tú, niña hermosa 😍. ¿Quieres hacer un viaje a la luna? 🚀😎", showButtonSi: true, showButtonNo: true },
    { text: "Siii 🤩. Allá vamos, sujétate fuerteee 😼 ...", showButtonSi: false, showButtonNo: false },
    { text: "Vale, ahora que estamos aquí te quería mostrar algo.", showButtonSi: false, showButtonNo: false },
    { text: "Cuando te diga, cierra los ojos por 5 segundos...", showButtonSi: false, showButtonNo: false },
    { text: "¿Lista? 🫣...", showButtonSi: false, showButtonNo: false },
    { text: "Yaaa 😝", showButtonSi: false, showButtonNo: false },
    { text: "Ciérralos 😑😁", showButtonSi: false, showButtonNo: false },
    { text: "¿Qué dices? Hasta que no respondas no podremos volver 😋 ...", showButtonSi: true, showButtonNo: false },
    { text: "Sabía que no te ibas negar 🤭💘 ...", showButtonSi: false, showButtonNo: false },
    { text: "Bien, volvamos...", showButtonSi: false, showButtonNo: false },
    { text: "Espero que te haya gustado nuestro viaje 🤗...", showButtonSi: false, showButtonNo: false },
    { text: "Solo te quiero recordar lo mucho que te quiero y lo importante que eres para mí...", showButtonSi: false, showButtonNo: false },
    { text: "Y ten presente también que... en mi cielo, TÚ eres la Estrella que más brilla siempre...", showButtonSi: false, showButtonNo: false },
    { text: "Por eso esta canción es para vos...", showButtonSi: false, showButtonNo: false },
    { text: "Te quiero mucho, mucho, muchísimo, demasiadooooo. Nunca lo olvides...", showButtonSi: false, showButtonNo: false },
    { text: "Y si por tí debo recorrer cada galaxia del universo, no lo pienso dos veces...", showButtonSi: false, showButtonNo: false },
    { text: "No quiero a nadie que no seas tú...", showButtonSi: false, showButtonNo: false },
    { text: "Siempre te elegiré a tí, siempre eligiré esos ojitos bonitos...", showButtonSi: false, showButtonNo: false },
    { text: "Es momento de irme...", showButtonSi: false, showButtonNo: false },
    { text: "Nos vemos pronto. Te quiero un montón... Mi estrella hermosa 💞💫.", showButtonSi: false, showButtonNo: false },
];

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
const lyricsData = [
  { eng: `Look at the stars`, esp: `Mira las estrellas`, time: 34 },
  { eng: `Look how they shine for you`, esp: `Mira cómo brillan por ti`, time: 37 },
  { eng: `And everything you do`, esp: `Y todo lo que haces`, time: 43 },
  { eng: `Yeah, they were all yellow`, esp: `Sí, eran todas amarillos`, time: 48 },
  { eng: `I came along`, esp: `Yo llegué`, time: 51 },
  { eng: `I wrote a song for you`, esp: `Escribí una canción para ti`, time: 54 },
  { eng: `And all the things you do`, esp: `Y todas las cosas que haces`, time: 59 },
  { eng: `And it was called "Yellow"`, esp: `Y se llamaba "Amarillo"`, time: 65 },
  { eng: `So then I took my turn`, esp: `Entonces tomé mi turno`, time: 70 },
  { eng: `Oh, what a thing to have done`, esp: `Oh, qué cosa había hecho`, time: 76 },
  { eng: `And it was all Yellow`, esp: `Y era todo amarillo`, time: 82 },
  { eng: `Your skin`, esp: `Tu piel`, time: 90 },
  { eng: `Oh yeah, your skin and bones`, esp: `Oh sí, tu piel y tus huesos`, time: 92 },
  { eng: `Turn into something beautiful`, esp: `Se convierten en algo hermoso`, time: 95 },
  { eng: `You know`, esp: `Tú sabes`, time: 101 },
  { eng: `You know I love you so`, esp: `Tú sabes que te amo tanto`, time: 104 },
  { eng: `You know I love you so`, esp: `Tú sabes que te amo tanto`, time: 109 },
  { eng: ``, esp: ``, time: 111 },
  { eng: `I swam across`, esp: `Nadé al otro lado`, time: 134 },
  { eng: `I jumped across for you`, esp: `Salté al otro lado por ti`, time: 137 },
  { eng: `Oh, what a thing to do`, esp: `Oh, qué cosa por hacer`, time: 143 },
  { eng: `'Cause you were all Yellow`, esp: `Porque tú eras toda amarilla`, time: 148 },
  { eng: `I drew a line`, esp: `Dibujé una línea`, time: 150 },
  { eng: `I drew a line for you`, esp: `Dibujé una línea para ti`, time: 153 },
  { eng: `Oh, what a thing to do`, esp: `Oh, qué cosa por hacer`, time: 159 },
  { eng: `And it was all Yellow`, esp: `Y era todo amarillo`, time: 164 },
  { eng: `Your skin`, esp: `Tu piel`, time: 173 },
  { eng: `Oh yeah, your skin and bones`, esp: `Oh sí, tu piel y tus huesos`, time: 175 },
  { eng: `Turn into something beautiful`, esp: `Se convierten en algo hermoso`, time: 178 },
  { eng: `And you know`, esp: `Y tú sabes`, time: 184 },
  { eng: `For you I'd bleed myself dry`, esp: `Por ti me desangraría`, time: 187 },
  { eng: `For you I'd bleed myself dry`, esp: `Por ti me desangraría`, time: 192 },
  { eng: ``, esp: ``, time: 195 },
  { eng: `It's true`, esp: `Es verdad`, time: 216 },
  { eng: `Look how they shine for you`, esp: `Mira cómo brillan por ti`, time: 220 },
  { eng: `Look how they shine for you`, esp: `Mira cómo brillan por ti`, time: 225 },
  { eng: `Look how they shine for`, esp: `Mira cómo brillan por`, time: 231 },
  { eng: `Look how they shine for you`, esp: `Mira cómo brillan por ti`, time: 236 },
  { eng: `Look how they shine for you`, esp: `Mira cómo brillan por ti`, time: 242 },
  { eng: `Look how they shine`, esp: `Mira cómo brillan`, time: 247 },
  { eng: `Look at the stars`, esp: `Mira las estrellas`, time: 250 },
  { eng: `Look how they shine for you`, esp: `Mira cómo brillan por ti`, time: 253 },
  { eng: `And all the things that you do`, esp: `Y todas las cosas que haces`, time: 259 },
  { eng: `I love so much my beautiful star`, esp: `Te quiero mucho mi estrella hermosa`, time: 266 },
  { eng: ``, esp: ``, time: 272 }
]
// Animar las letras
function updateLyrics() {
  const time = Math.floor(audio.currentTime);
  const currentLine = lyricsData.find(
      (line, index) => {
          const nextLine = lyricsData[index + 1];
          return nextLine ? time >= line.time && time < nextLine.time : time >= line.time;
      }
  );

  if (currentLine) {
      // const nextLine = lyricsData[lyricsData.indexOf(currentLine) + 1];
      const fadeInDuration = 0.1; // Duración basada en la diferencia de tiempo entre líneas
      const opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

      lyricsEng.style.opacity = opacity;
      lyricsEsp.style.opacity = opacity;
      lyricsEng.innerHTML = currentLine.eng;
      lyricsEsp.innerHTML = currentLine.esp;
  } else {
      lyrics.style.opacity = 0;
      lyrics.innerHTML = "";
  }
}

dialog.classList.add("hidden");
message.classList.add("hidden");
await sleep(4800);
dialog.classList.remove("hidden");

function showMessage(index) {
  dialogText.textContent = messages[index].text;
  
  if (messages[index].showButtonSi) {
      yesButton.classList.remove("hidden");
  } else {
      
    yesButton.classList.add("hidden");
  }
  if (messages[index].showButtonNo) {
      noButton.classList.remove("hidden");
  } else {
      noButton.classList.add("hidden");
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function handleYes() {
  if (currentStep === 0) {
    currentStep += 1;
    // dialog.style.animation = "none";
    // await sleep(2000);
    showMessage(1); // Cambia el mensaje a "Agrandando..."
    await sleep(3000);
    dialog.classList.add("hidden");
    viewMoon(); // Llama la animación después de un breve tiempo
    astronaut.style.animation = 'none';
    astronaut.style.left = '-40px';
    astronaut.style.transition = 'transform 3.3s ease-in-out';
    astronaut.offsetHeight; 
    astronaut.style.transform = 'translateY(-40px) scale(0.6)';
    await sleep(3700);
    showMessage(2);
    image.src = "img/jade-guilbot-astronaute-idle-gif.gif"
    dialog.classList.remove("hidden");
    await sleep(3500);
    showMessage(3);
    await sleep(3500);
    showMessage(4);
    await sleep(2000);
    showMessage(5);
    await sleep(1000);
    dialog.classList.add("hidden");
    image.src = "img/jade-guilbot-astronaute-walk-gif.gif"
    astronautCont.style.transition = 'transform 3s linear';
    astronautCont.offsetHeight; 
    astronautCont.style.transform = 'translateX(80%)';;
    await sleep(700);
    showMessage(6);
    dialog.classList.remove("hidden");
    await sleep(1700);
    dialog.classList.add("hidden");
    image.src = "img/jade-guilbot-astronaute-dash-gif.gif"
    astronaut.style.transition = 'transform 1s ease-in-out';
    astronaut.offsetHeight; 
    astronaut.style.transform = 'translateX(100%) translateY(-40px) scaleX(-0.6) scaleY(0.6)';
    await sleep(500);
    message.classList.remove("hidden");
    await sleep(2000);
    astronautCont.style.transition = 'bottom 2s linear, left 2s linear';
    astronautCont.offsetHeight; 
    astronautCont.style.bottom = '15%';
    astronautCont.style.left = '-10%';
    astronaut.style.transform = 'translateY(8px) scale(1.2)';
    await sleep(3000);
    yesButton.innerText = 'ACEPTO';
    dialog.classList.remove("hidden");
    showMessage(7);
  } else {
    if (currentStep === 1) {
      showMessage(8);
      await sleep(4000);
      showMessage(9);
      await sleep(3000);
      dialog.classList.add("hidden");
      astronautCont.style.transition = 'bottom 2s linear, left 2s linear';
      astronautCont.offsetHeight; 
      astronautCont.style.bottom = '50%';
      astronautCont.style.left = '-10%';
      astronaut.style.transform = 'scale(0.8)';
      await sleep(3000);
      viewMoon();
      astronautCont.style.transition = 'transform 2s linear';
      astronaut.offsetHeight; 
      astronaut.style.transform = 'scale(1)';
      message.style.transition = 'opacity 0.7s linear';
      message.offsetHeight; 
      message.style.opacity = 0;
      await sleep(3000);
      showMessage(10);
      dialog.classList.remove("hidden");
      await sleep(3000);
      showMessage(11);
      await sleep(6000);
      showMessage(12);
      await sleep(7000);
      showMessage(13);
      await sleep(800);
      setInterval(updateLyrics, 1000);
      audio.play().catch(error => {
          console.log('La reproducción automática fue bloqueada:', error);
      });
      await sleep(2000);
      starsCont.classList.remove("hidden");
      await sleep(5000);
      showMessage(14);
      await sleep(3000);
      showMessage(15);
      await sleep(6000);
      showMessage(16);
      await sleep(3000);
      showMessage(17);
      await sleep(6800);
      showMessage(18);
      await sleep(2000);
      showMessage(19);
      await sleep(5000);
      dialog.classList.add("hidden");
      astronautCont.style.transition = 'transform 4s linear';
      astronautCont.offsetHeight; 
      astronautCont.style.transform = 'translateX(150vw)';
      showMessage(20);
      await sleep(2000);
      astronautCont.classList.add("hidden");
    }
  }
}

function handleNo() {
  dialogText.textContent = "Pues no me iré de aquí hasta que digas que sí...";
  noButton.classList.add("hidden"); // Oculta el botón "No"
}
// Función para mover la luna a lo largo de la línea imaginaria hacia el centro
function viewMoon() {
  const pantallaCentroX = window.innerWidth / 2;
  const pantallaCentroY = window.innerHeight / 2;

  // Obtener las coordenadas de la luna
  const lunaRect = luna.getBoundingClientRect();
  const lunaCentroX = lunaRect.left + lunaRect.width / 2;
  const lunaCentroY = lunaRect.top + lunaRect.height / 2;

  if (!enCentro) {
      // Calcular la distancia entre la luna y el centro de la pantalla
      const distanciaX = pantallaCentroX - lunaCentroX;
      const distanciaY = pantallaCentroY - lunaCentroY;

      // Mover la luna a lo largo de la línea
      luna.style.transition = 'transform 2s ease-in-out';
      luna.style.transform = `translate(${distanciaX}px, ${distanciaY}px) scale(15)`;

      //  Desplazar el suelo hacia abajo y hacerlo desaparecer
      ground.style.transition = 'transform 2s ease-in-out, opacity 2s ease-in-out';
      ground.style.transform = 'translate(-20vw, 100vh) scale(2.5)';  // Mover el suelo hacia abajo
      // ground.style.opacity = 0;  // Desaparecer el suelo
      // Aumentar tamaño estrellas
      for (let i = 0; i < stars.length; i++) {
        let size = getComputedStyle(stars[i]).getPropertyValue('--size');
        let newSize = parseFloat(size)*4;
        // stars[i].style.setProperty("--size", `${newSize}vw`);
        stars[i].style.transition = "width 1s ease-in-out, height 1s ease-in-out";
        stars[i].style.width = `${newSize}vw`;
        stars[i].style.height = `${newSize}vw`;
        // stars[i].style.transition = 'transform 2s ease-in-out';
      }
      // Cambiar el estado para indicar que la luna está en el centro
      enCentro = true;
  } else {
      // Si ya está en el centro, moverla a su posición original
      luna.style.transition = 'transform 2s ease-in-out';
      luna.style.transform = 'translate(0, 0) scale(1)';

      // Mover el suelo a su posición original y hacerlo visible nuevamente
      ground.style.transition = 'transform 2s ease-in-out, opacity 2s ease-in-out';
      ground.style.transform = 'translateY(0)';  // Volver el suelo a su posición original
      ground.style.opacity = 1;  // Hacer visible el suelo
      // Volver al tamaño inicial estrellas
      for (let i = 0; i < stars.length; i++) {
        let size = getComputedStyle(stars[i]).getPropertyValue('--size');
        let newSize = parseFloat(size);
        // stars[i].style.setProperty("transition", 'transform 9s ease-in-out !important');
        // stars[i].style.setProperty("--size", `${newSize}vw`);
        stars[i].style.transition = "width 2s ease-in-out, height 2s ease-in-out";
        stars[i].style.width = `${newSize}vw`;
        stars[i].style.height = `${newSize}vw`;
      }

      // Cambiar el estado para indicar que la luna no está en el centro
      enCentro = false;
  }
}

showMessage(0);