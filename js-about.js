const brand = document.querySelector(".brand"),
  logo = document.querySelector(".logo"),
  art = document.querySelector(".art"),
  sd = document.querySelector(".sd"),
  dp = document.querySelector(".dp"),
  wd = document.querySelector(".wd"),
  imgbrand = document.querySelector(".img-brand"),
  imglogo = document.querySelector(".img-logo"),
  imgart = document.querySelector(".img-art"),
  imgsd = document.querySelector(".img-sd"),
  imgdp = document.querySelector(".img-dp"),
  imgwd = document.querySelector(".img-wd");

  window.addEventListener("mousemove", (e) => {
  let x = e.offsetX,
    y = e.offsetY;

  if (e.target.classList.contains("brand")) {
    imgbrand.style.left = `${x}px`;
    imgbrand.style.top = `${y}px`;
  }
  if (e.target.classList.contains("logo")) {
    imglogo.style.left = `${x}px`;
    imglogo.style.top = `${y}px`;
  }
	if (e.target.classList.contains("art")) {
    imgart.style.left = `${x}px`;
    imgart.style.top = `${y}px`;
  }
	if (e.target.classList.contains("sd")) {
    imgsd.style.left = `${x}px`;
    imgsd.style.top = `${y}px`;
  }
	if (e.target.classList.contains("dp")) {
    imgdp.style.left = `${x}px`;
    imgdp.style.top = `${y}px`;
  }
	if (e.target.classList.contains("wd")) {
    imgwd.style.left = `${x}px`;
    imgwd.style.top = `${y}px`;
  }
});

brand.addEventListener("mouseover", () => {
  imgbrand.style.display = "block";
});

brand.addEventListener("mouseleave", () => {
  imgbrand.style.display = "";
});

logo.addEventListener("mouseover", () => {
  imglogo.style.display = "block";
});

logo.addEventListener("mouseleave", () => {
  imglogo.style.display = "";
});
art.addEventListener("mouseover", () => {
  imgart.style.display = "block";
});

art.addEventListener("mouseleave", () => {
  imgart.style.display = "";
});
sd.addEventListener("mouseover", () => {
  imgsd.style.display = "block";
});

sd.addEventListener("mouseleave", () => {
  imgsd.style.display = "";
});
dp.addEventListener("mouseover", () => {
  imgdp.style.display = "block";
});

dp.addEventListener("mouseleave", () => {
  imgdp.style.display = "";
});
wd.addEventListener("mouseover", () => {
  imgwd.style.display = "block";
});

wd.addEventListener("mouseleave", () => {
  imgwd.style.display = "";
});
