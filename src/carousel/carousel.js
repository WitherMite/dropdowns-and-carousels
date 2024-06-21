import addCarouselBehavior from "./carousel-behavior.js";

export default function initCarousel(obj) {
  const carousel = typeof obj === "object" ? obj : JSON.parse(obj);
  const carouselElement = document.querySelector(`.${carousel.class}`);
  const wheel = createWheel();
  const imageContainer = document.createElement("div");
  const selector = document.createElement("div");

  imageContainer.classList.add("carousel-img-container");
  selector.classList.add("carousel-selector");
  carouselElement.appendChild(wheel);
  carouselElement.appendChild(selector);
  wheel.appendChild(imageContainer);

  carousel.images.forEach((image, index) => {
    const img = createImg(image);
    const imgClass = `${carousel.class}-img-${index}`;
    img.classList.add(imgClass);
    imageContainer.appendChild(img);
    const selBtn = createSelectButton(imgClass);
    selector.appendChild(selBtn);
  });

  addCarouselBehavior({
    carouselElement,
    wheel,
    imageContainer,
    selector,
    imageCount: carousel.images.length,
  });
}

function createWheel() {
  const wheel = document.createElement("div");
  const leftBtn = document.createElement("button");
  const rightBtn = leftBtn.cloneNode();

  leftBtn.textContent = "<";
  leftBtn.classList.add("carousel-nav-left");
  rightBtn.textContent = ">";
  rightBtn.classList.add("carousel-nav-right");
  wheel.appendChild(leftBtn);
  wheel.appendChild(rightBtn);
  wheel.classList.add("carousel-wheel");

  return wheel;
}

function createImg(src) {
  const div = document.createElement("div");
  const img = document.createElement("img");
  img.src = src;
  div.appendChild(img);
  return div;
}

function createSelectButton(imgClass) {
  const button = document.createElement("button");
  button.classList.add("carousel-selector-node");
  button.dataset.forImg = imgClass;
  return button;
}
