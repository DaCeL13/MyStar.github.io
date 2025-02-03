const generatedSpaceLayer = (size, selector, totalStars, twinkleDuration, delay) => {
  const layer = [];
  // const totalStars = 200;
  for (let i = 0; i < totalStars; i++) {
    const x = Math.floor(Math.random()*100);
    const y = Math.floor(Math.random()*100);
    layer.push(`${x}vw ${y}vh 0 white, ${x + 100}vw ${y}vh 0 white`);
  }
  const container = document.querySelector(selector);
  container.style.setProperty("--space-layer", layer.join(","));
  container.style.setProperty("--size", size);
  container.style.setProperty("--delay", `${delay}s`);
  container.style.setProperty("--twinkle-duration", `${twinkleDuration}s`);
  // container.style.animationDelay = `${delay}s`;
}

function getRandomGreen() {
  const greens = ['#4caf50', '#66bb6a', '#81c784', '#a5d6a7', '#388e3c'];
  return greens[Math.floor(Math.random() * greens.length)];
}

function createGrass(layerId, bladeHeight, grassDensity, swaySpeed) {
  const grassContainer = document.getElementById(layerId)
  for(let i = 0; i < grassDensity; i++) {
    const blade = document.createElement("div");
    blade.classList.add("blade");
    blade.style.left = `${Math.random()*100}vw`;
    blade.style.height = `${
      bladeHeight - Math.random() * (bladeHeight / 1.2)
    }px`;
    blade.style.backgroundColor = getRandomGreen();

    const startAngle = -10 - Math.random()*10;
    const endAngle = 10 + Math.random()*10;
    const delayGrass = Math.random()*2;

    blade.style.setProperty("--start-angle", `${startAngle}deg`);
    blade.style.setProperty("--end-angle", `${endAngle}deg`);
    blade.style.animationDelay = `-${delayGrass}`;
    blade.style.animationDuration = `${swaySpeed + Math.random()}s`;
    grassContainer.appendChild(blade);

    if(Math.random() > 0.80) {
      const flower = document.createElement("div");
      flower.classList.add("flower");
      flower.style.transform = `rotate(${360*Math.random()}deg)`
      blade.appendChild(flower);
    }
  }
}

generatedSpaceLayer("0.2vw", ".space-1", 300, 5, 1.7);
generatedSpaceLayer("0.4vw", ".space-2", 100, 4, 0.5);
generatedSpaceLayer("0.6vw", ".space-3", 30, 3, 2);
createGrass("grass-layer", 140, window.innerWidth/3.5, 8);