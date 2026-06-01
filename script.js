document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("embers");

  if (!container) {
    console.log("No #embers found");
    return;
  }

  function spawn() {
    const e = document.createElement("div");
    e.classList.add("ember");

    e.style.left = Math.random() * 100 + "vw";
    e.style.animationDuration = (3 + Math.random() * 4) + "s";

    const size = Math.random() * 4 + 2;
    e.style.width = size + "px";
    e.style.height = size + "px";

    container.appendChild(e);

    setTimeout(() => e.remove(), 8000);
  }

  setInterval(spawn, 120);
});
