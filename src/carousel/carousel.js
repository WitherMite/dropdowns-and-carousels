export default function initCarousel(obj) {
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
    imageContainer.appendChild(img);
    const selBtn = createSelectButton(index);
    selector.appendChild(selBtn);
  });
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

function createSelectButton(imgIndex) {
  const button = document.createElement("button");
  button.classList.add("carousel-selector-node");
  button.dataset.forImg = imgIndex;
  return button;
}
