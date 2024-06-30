export default function initCarouselBehaviors(carousel) {
  addNavBtnBehavior(carousel);
  addSelectorBtnBehavior(carousel);
  updateWheel(carousel);
  startSlideshow(carousel);
}

function addNavBtnBehavior(carousel) {
  carousel.navBtns.left.addEventListener("click", () => prevImg(carousel));
  carousel.navBtns.right.addEventListener("click", () => nextImg(carousel));
}

function addSelectorBtnBehavior(carousel) {
  const btns = carousel.selector.querySelectorAll("button");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      carousel.currentImage = Number(btn.dataset.forImg);
      updateWheel(carousel);
    });
  });
}

function startSlideshow(carousel) {
  setInterval(() => nextImg(carousel), 5000);
}

function nextImg(carousel) {
  if (carousel.currentImage >= carousel.lastImgIndex) {
    carousel.currentImage = 0;
  } else {
    carousel.currentImage += 1;
  }
  updateWheel(carousel);
}

function prevImg(carousel) {
  if (carousel.currentImage <= 0) {
    carousel.currentImage = carousel.lastImgIndex;
  } else {
    carousel.currentImage -= 1;
  }
  updateWheel(carousel);
}

function updateWheel(carousel) {
  const selBtns = carousel.selector.querySelectorAll("button");
  const containerOffset = `-${carousel.currentImage}00%`;
  carousel.imageContainer.style.left = containerOffset;

  selBtns.forEach((btn) => btn.classList.remove("selected"));
  selBtns[carousel.currentImage].classList.add("selected");
}
