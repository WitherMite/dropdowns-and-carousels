export default function initCarousel(obj) {
  const carousel = typeof obj === "object" ? obj : JSON.parse(obj);
  const carouselElement = document.querySelector(`.${carousel.class}`);
  carouselElement.appendChild(createCarousel(carousel));
}

function createCarousel(carousel) {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("carousel-image-container");
  carousel.images.forEach((image) => {
    const img = createImg(image);
    imageContainer.appendChild(img);
  });
  return imageContainer;
}

function createImg(src) {
  const div = document.createElement("div");
  const img = document.createElement("img");
  img.src = src;
  div.appendChild(img);
  return div;
}
