console.log("🔥 Script started");

const container = document.getElementById("embers");

console.log("📦 Ember container:", container);

if (!container) {
  console.log("❌ #embers NOT FOUND");
} else {
  setInterval(() => {
    const e = document.createElement("div");

    e.style.position = "absolute";
    e.style.width = "6px";
    e.style.height = "6px";
    e.style.background = "orange";
    e.style.left = Math.random() * 100 + "vw";
    e.style.top = "100vh";

    document.body.appendChild(e);

    setTimeout(() => e.remove(), 3000);
  }, 200);
}
