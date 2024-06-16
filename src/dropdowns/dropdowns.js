let [btnClass, mouseoverClass, openClass] = [
  ".dropdown-btn",
  ".dropdown-mouseover",
  "open",
];

export default function initDropdowns(classArr = null) {
  setClasses(classArr);

  const dropdownBtns = document.querySelectorAll(btnClass);
  const dropdownMouseovers = document.querySelectorAll(mouseoverClass);

  dropdownBtns.forEach((btn) => addButtonBehavior(btn));
  dropdownMouseovers.forEach((element) => addMouseoverBehavior(element));
}

function setClasses(classArr) {
  if (!classArr) return;
  const classes = sanitize(classArr);
  [btnClass, mouseoverClass, openClass] = classes;
}

function addButtonBehavior(btn) {
  const dropdown = document.querySelector(`.${btn.dataset.forClass}`);
  btn.addEventListener("click", () => dropdown.classList.toggle(openClass));
}

function addMouseoverBehavior(ele) {
  const dropdown = document.querySelector(`.${ele.dataset.forClass}`);
  const boundingBoxes = document.querySelectorAll(
    `.${dropdown.dataset.boundingClass}`
  );

  ele.addEventListener("mouseover", () => {
    dropdown.classList.add(openClass);
    boundingBoxes.forEach((box) => box.classList.add(openClass));
  });

  boundingBoxes.forEach((box) => {
    box.addEventListener("mouseout", () => {
      dropdown.classList.remove(openClass);
      boundingBoxes.forEach((box) => box.classList.remove(openClass));
    });
  });
}

function sanitize(classArr) {
  // make sure all are valid strings, fix if close enough
  return [...classArr];
}
