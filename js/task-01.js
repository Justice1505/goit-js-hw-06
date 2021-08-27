const categoryEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoryEl.length}`);

categoryEl.forEach((el) => {
  console.log(
    `Category: ${el.firstElementChild.textContent}\nElements: ${el.lastElementChild.children.length}`
  );
});
