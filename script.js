const devices = {
  led: false,
  fan: false,
  motor: false,
};

function toggleDevice(device) {
  devices[device] = !devices[device];
  const statusEl = document.getElementById(`${device}-status`);
  const card = document.getElementById(`${device}-card`);
  const icon = card.querySelector(".icon");

  if (devices[device]) {
    statusEl.textContent = "ON";
    statusEl.classList.remove("red");
    statusEl.classList.add("lime");

    if (device === "led") icon.classList.add("glow");
    if (device === "fan") icon.classList.add("fan-rotate");
  } else {
    statusEl.textContent = "OFF";
    statusEl.classList.remove("lime");
    statusEl.classList.add("red");

    if (device === "led") icon.classList.remove("glow");
    if (device === "fan") icon.classList.remove("fan-rotate");
  }
}

// Simulate live sensor readings
setInterval(() => {
  const temp = (20 + Math.random() * 10).toFixed(1);
  const hum = (40 + Math.random() * 20).toFixed(1);
  document.getElementById("temp").textContent = `${temp} °C`;
  document.getElementById("hum").textContent = `${hum} %`;
}, 1000);
