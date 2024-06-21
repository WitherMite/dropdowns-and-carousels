import addCarouselBehavior from "./carousel-behavior.js";

export default function initCarousel(obj, visibleImgCount) {
  const carousel = typeof obj === "object" ? obj : JSON.parse(obj);
  const carouselElement = document.querySelector(`.${carousel.class}`);
  const wheel = document.createElement("div");
  const imageContainer = document.createElement("div");
  const selector = document.createElement("div");

  imageContainer.classList.add("carousel-img-container");
  selector.classList.add("carousel-selector");
  wheel.classList.add("carousel-wheel");
  carouselElement.appendChild(wheel);
  carouselElement.appendChild(selector);
  wheel.appendChild(imageContainer);
  addNavBtns(carouselElement);

  carousel.images.forEach((image, index) => {
    const img = createImg(image);
    const imgClass = `${carousel.class}-img-${index}`;
    img.classList.add(imgClass);
    imageContainer.appendChild(img);
    const selBtn = createSelectButton(imgClass);
    selector.appendChild(selBtn);
  });

  addCarouselBehavior(
    {
      carouselElement,
      wheel,
      imageContainer,
      selector,
      imageCount: carousel.images.length,
    },
    visibleImgCount
  );
}

function addNavBtns(carousel) {
  const leftBtn = document.createElement("button");
  leftBtn.classList.add("carousel-nav");
  const rightBtn = leftBtn.cloneNode();

  leftBtn.textContent = "<";
  leftBtn.classList.add("carousel-nav-left");
  rightBtn.textContent = ">";
  rightBtn.classList.add("carousel-nav-right");
  carousel.appendChild(leftBtn);
  carousel.appendChild(rightBtn);
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
