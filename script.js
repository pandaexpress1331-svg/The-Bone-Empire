document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("embers");

  console.log("🔥 Script started");
  console.log("📦 Ember container:", container);

  if (!container) {
    alert("ERROR: #embers not found in HTML");
    return;
  }

  function spawnEmber() {
    const ember = document.createElement("div");
    ember.className = "ember";

    ember.style.left = Math.random() * 100 + "vw";
    ember.style.animationDuration = (3 + Math.random() * 4) + "s";

    const size = Math.random() * 4 + 2;
    ember.style.width = size + "px";
    ember.style.height = size + "px";

    container.appendChild(ember);

    setTimeout(() => ember.remove(), 8000);
  }

  setInterval(() => {
    console.log("🔥 spawning ember");
    spawnEmber();
  }, 300);
});
