let offsetBig = 0, offsetLittle = 0;
document.querySelector(".slider-next").addEventListener("click", scrollRight);
document.querySelector(".slider-prev").addEventListener("click", scrollLeft);
const sliderLine = document.querySelector(".slider-line");



let listOfPagesItems = document.querySelectorAll(".pages-list__item");
for (let i = 0; i < listOfPagesItems.length; i++) {
  listOfPagesItems[i].addEventListener("click", function() {
    let scrollSize = 2 * parseInt(window.getComputedStyle(document.querySelector(".slider-line__item")).width) + 
                    parseInt(window.getComputedStyle(document.querySelector(".slider-line__item")).marginRight);
    offsetLittle = -scrollSize * (i);
    sliderLine.style.left = offsetLittle + "px";
    listOfPagesItems.forEach(element => {
      if (element.classList.length != 1) {
        element.className = "pages-list__item";
      }
    });
    listOfPagesItems[i].classList.add("using-pages-list__item");
  });
}

window.onresize = function() {
  if (parseInt(window.innerWidth) > 1380)
    sliderLine.style.left = offsetBig + "px";
  else
    sliderLine.style.left = offsetLittle + "px";
};

function scrollRight() {
  let elementOfSliderWidth = parseInt(window.getComputedStyle(document.querySelector(".slider-line__item")).width) + 
                    parseInt(window.getComputedStyle(document.querySelector(".slider-line__item")).marginRight);
  let sliderBlockWidth = parseInt(window.getComputedStyle(document.querySelector(".slider")).width);
  let sliderLineWidth = parseInt(window.getComputedStyle(sliderLine).width);
  if (offsetBig >= sliderBlockWidth - sliderLineWidth) { 
    offsetBig -= elementOfSliderWidth;
    sliderLine.style.left = offsetBig + "px";
  }
}

function scrollLeft() {
  const sliderLine = document.querySelector(".slider-line");
  let elementOfSliderWidth = parseInt(window.getComputedStyle(document.querySelector(".slider-line__item")).width) + 
                    parseInt(window.getComputedStyle(document.querySelector(".slider-line__item")).marginRight);
  if (offsetBig < 0) { 
    offsetBig += elementOfSliderWidth;
    sliderLine.style.left = offsetBig + "px";
  }
}
