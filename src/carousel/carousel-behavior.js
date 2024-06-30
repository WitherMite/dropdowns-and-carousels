let currentImage = 0;

export default function initCarouselBehaviors(carousel) {
  addNavBtnBehavior(carousel);
  addSelectorBtnBehavior(carousel);
  updateWheel(carousel);
}

function addNavBtnBehavior(carousel) {
  carousel.navBtns.left.addEventListener("click", () => prevImg(carousel));
  carousel.navBtns.right.addEventListener("click", () => nextImg(carousel));

  function nextImg() {
    if (currentImage >= carousel.lastImgIndex) {
      currentImage = 0;
    } else {
      currentImage += 1;
    }
    updateWheel(carousel);
  }

  function prevImg() {
    if (currentImage <= 0) {
      currentImage = carousel.lastImgIndex;
    } else {
      currentImage -= 1;
    }
    updateWheel(carousel);
  }
}

function addSelectorBtnBehavior(carousel) {
  const btns = carousel.selector.querySelectorAll("button");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentImage = Number(btn.dataset.forImg);
      updateWheel(carousel);
    });
  });
}

function updateWheel(carousel) {
  const selBtns = carousel.selector.querySelectorAll("button");
  const containerOffset = `-${currentImage}00%`;
  carousel.imageContainer.style.left = containerOffset;

  selBtns.forEach((btn) => btn.classList.remove("selected"));
  selBtns[currentImage].classList.add("selected");
}
