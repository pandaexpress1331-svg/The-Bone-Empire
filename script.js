const emberContainer = document.getElementById("embers");

function createEmber() {
  const ember = document.createElement("div");
  ember.classList.add("ember");

  // random horizontal position
  ember.style.left = Math.random() * 100 + "vw";

  // random size (tiny ash particles)
  const size = Math.random() * 4 + 2;
  ember.style.width = size + "px";
  ember.style.height = size + "px";

  // random speed
  ember.style.animationDuration = (3 + Math.random() * 5) + "s";

  emberContainer.appendChild(ember);

  // remove after animation
  setTimeout(() => {
    ember.remove();
  }, 8000);
}

// keep spawning embers constantly
setInterval(createEmber, 120);
