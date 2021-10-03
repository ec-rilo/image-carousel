// Create a function that allows a img to go left
// create a function that allows a img to go right
// create a function that allows the little navigation rectangles to populate depending on amount of images
// create a function that gives the little navigtion rectangles logic

import img1 from "../images/carousel-imgs/img-1.jpeg";
import img2 from "../images/carousel-imgs/img-2.jpeg";
import img3 from "../images/carousel-imgs/img-3.jpeg";
import img4 from "../images/carousel-imgs/img-4.jpeg";
import img5 from "../images/carousel-imgs/img-5.jpeg";

const carouselLogic = (() => {
  class ProgramImg {
    constructor(currImg, imgTag) {
      this.currImg = currImg;
      this.imgTag = imgTag;
    }

    applyToHTML() {
      this.imgTag.setAttribute("src", `${this.currImg}`);
    }

    applyEnteringImgAnim() {
      if (this.imgTag.classList.contains("exiting-img-anim")) {
        this.imgTag.classList.remove("exiting-img-anim");
      }
      this.imgTag.classList.add("entering-img-anim");
    }

    applyExitingImgAnim() {
      if (this.imgTag.classList.contains("entering-img-anim")) {
        this.imgTag.classList.remove("entering-img-anim");
      }
      this.imgTag.classList.add("exiting-img-anim");
    }

    updateImg(newImg) {
      this.imgTag.setAttribute("src", `${newImg}`);
    }

    getTag() {
      return this.imgTag;
    }
  }

  function initImgRotation(imgArr) {
    let currImg = new ProgramImg(
      imgArr[0],
      document.querySelector(".curr-img")
    );
    currImg.applyToHTML();

    let count = 0;
    setInterval(() => {
      if (count === imgArr.length - 1) {
        // Made as -1 so that when the loop restarts the count
        // starts at 0 and not 1.
        count = -1;
      }
      count += 1;
      const updatedImgTag = document.createElement("img");
      updatedImgTag.classList.add("program-img");
      updatedImgTag.classList.add("new-img");
      updatedImgTag.setAttribute("src", `${imgArr[count]}`);
      const newImg = new ProgramImg(imgArr[count], updatedImgTag);
      const imgContainer = document.querySelector(".img-container");
      imgContainer.appendChild(updatedImgTag);
      currImg.applyExitingImgAnim();
      newImg.applyEnteringImgAnim();
      currImg = newImg;
    }, 5000);
  }
  const imgArr = [img1, img2, img3, img4, img5];
  initImgRotation(imgArr);
})();
