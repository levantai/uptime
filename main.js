setInterval(function upTime() {
  const now = new Date();
  console.log(now);
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const time = `${hours} : ${minutes} : ${seconds}`;
  const layGiatri = document.getElementById("clock");
  layGiatri.textContent = time;
}, 1000);

const clockContainers = document.getElementById("clock-container");
const newsAppen = document.createElement("p");
newsAppen.textContent = "Hello All";
clockContainers.append(newsAppen);
