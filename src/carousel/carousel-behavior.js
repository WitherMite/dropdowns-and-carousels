let currentImage = 0;

function nextImg(imgContainer) {
  currentImage += 1;
  updateWheel(imgContainer);
}

function prevImg(imgContainer) {
  currentImage -= 1;
  updateWheel(imgContainer);
}

function updateWheel(imgContainer) {
  const containerOffset = `-${currentImage}00%`;
  imgContainer.style.left = containerOffset;
}

export { nextImg, prevImg };
