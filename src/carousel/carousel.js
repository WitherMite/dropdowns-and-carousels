import initCarouselBehaviors from "./carousel-behavior";

export default function initCarousel(obj) {
  const carousel = typeof obj === "object" ? obj : JSON.parse(obj);

  const carouselElement = document.querySelector(`.${carousel.class}`);
  const wheel = document.createElement("div");
  const imageContainer = document.createElement("div");
  const selector = document.createElement("div");
  const navBtns = createNavBtns();

  imageContainer.classList.add("carousel-img-container");
  selector.classList.add("carousel-selector");
  wheel.classList.add("carousel-wheel");
  carouselElement.appendChild(wheel);
  carouselElement.appendChild(selector);
  carouselElement.appendChild(navBtns.left);
  carouselElement.appendChild(navBtns.right);
  wheel.appendChild(imageContainer);

  carousel.images.forEach((image, index) => {
    const img = createImg(image);
    imageContainer.appendChild(img);
    const selBtn = createSelectButton(index);
    selector.appendChild(selBtn);
  });

  initCarouselBehaviors({
    imageContainer,
    selector,
    navBtns,
    lastImgIndex: carousel.images.length - 1,
  });
}

function createNavBtns() {
  const leftBtn = document.createElement("button");
  leftBtn.classList.add("carousel-nav");
  const rightBtn = leftBtn.cloneNode();

  leftBtn.textContent = "<";
  leftBtn.classList.add("carousel-nav-left");
  rightBtn.textContent = ">";
  rightBtn.classList.add("carousel-nav-right");
  return {
    left: leftBtn,
    right: rightBtn,
  };
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
