document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("embers");

  function spawnEmber() {
    const ember = document.createElement("div");
    ember.className = "ember";

    ember.style.left = Math.random() * 100 + "vw";
    ember.style.animationDuration = (3 + Math.random() * 4) + "s";

    container.appendChild(ember);

    setTimeout(() => ember.remove(), 8000);
  }

  setInterval(spawnEmber, 150);

});
