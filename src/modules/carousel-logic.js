// Create a function that allows a img to go left
// create a function that allows a img to go right
// create a function that allows the little navigation rectangles to populate depending on amount of images
// create a function that gives the little navigtion rectangles logic

// import img1 from "../images/carousel-imgs/img-1.jpeg";
// import img2 from "../images/carousel-imgs/img-2.jpeg";
// import img3 from "../images/carousel-imgs/img-3.jpeg";
// import img4 from "../images/carousel-imgs/img-4.jpeg";
// import img5 from "../images/carousel-imgs/img-5.jpeg";

const carouselLogic = (() => {
  const img1 = document.querySelector(".img-1");
  const img2 = document.querySelector(".img-2");
  const img3 = document.querySelector(".img-3");
  const img4 = document.querySelector(".img-4");
  const img5 = document.querySelector(".img-5");

  // class ProgramImg {
  //   constructor(currImg, imgTag) {
  //     this.currImg = currImg;
  //     this.imgTag = imgTag;
  //   }

  //   applyToHTML() {
  //     this.imgTag.setAttribute("src", `${this.currImg}`);
  //   }

  //   applyEnteringImgAnim() {
  //     if (this.imgTag.classList.contains("exiting-img-anim")) {
  //       this.imgTag.classList.remove("exiting-img-anim");
  //     }
  //     this.imgTag.classList.add("entering-img-anim");
  //   }

  //   applyExitingImgAnim() {
  //     if (this.imgTag.classList.contains("entering-img-anim")) {
  //       this.imgTag.classList.remove("entering-img-anim");
  //     }
  //     this.imgTag.classList.add("exiting-img-anim");
  //   }

  //   updateImg(newImg) {
  //     this.imgTag.setAttribute("src", `${newImg}`);
  //   }

  //   getTag() {
  //     return this.imgTag;
  //   }
  // }

  class ProgramImg {
    constructor(imgTag) {
      this.imgTag = imgTag;
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

    getTag() {
      return this.imgTag;
    }

    get2ndClass(element) {
      return element && element.classList.length > 1
        ? this.imgTag.classList[1]
        : null;
    }

    setDefaultClasses() {
      this.imgTag.removeAttribute("class");
      this.imgTag.classList.add("program-img");
    }

    addClass(className) {
      this.imgTag.classList.add(className);
    }
  }

  function populateNavigationRects(imgArr) {
    const navRectContainer = document.querySelector(
      ".navigation-rectangles-container"
    );
    const numOfImgs = imgArr.length;
    for (let i = 0; i < numOfImgs; ++i) {
      const currNavRect = document.createElement("div");
      currNavRect.classList.add("navigation-rect");
      navRectContainer.appendChild(currNavRect);
    }
  }

  function initNavRectLogic() {
    const navRectContainer = document.querySelector(
      ".navigation-rectangles-container"
    );
    const navRectChildren = navRectContainer.childNodes;
    navRectChildren.forEach((rectChild) => {
      // If the current child is clicked rotate to that image
    });
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

  function nextImgBtnLogic(imgArr) {
    const nextBtn = document.querySelector(".right-arrow");
    const imgContainer = document.querySelector(".img-container");

    let count = 0;
    nextBtn.addEventListener("click", () => {
      const currImg = document.querySelector(".curr-img");
      const currImgItem = new ProgramImg(currImg);
      let newImg;
      let newImgItem;
      currImgItem.applyExitingImgAnim();
      currImg.addEventListener("animationend", () => {
        currImgItem.setDefaultClasses();
        currImgItem.addClass("new-img");
      });
      if (count === imgArr.length - 1) {
        newImg = imgContainer.firstChild.nextSibling;
        newImg.classList.add("curr-img");
        newImgItem = new ProgramImg(newImg);
        newImgItem.applyEnteringImgAnim();
        newImg.addEventListener("animationend", () => {
          newImgItem.setDefaultClasses();
          newImgItem.addClass("curr-img");
          count = 1;
        });
      } else {
        newImg = currImg.nextSibling.nextSibling;
        newImgItem = new ProgramImg(newImg);
        newImgItem.applyEnteringImgAnim();
        newImg.addEventListener("animationend", () => {
          newImgItem.setDefaultClasses();
          newImgItem.addClass("curr-img");
        });
      }
      count += 1;
    });
  }

  function prevImgBtnLogic() {
    // logic for the previous button that cycles to the previous image.
  }

  const imgArr = [img1, img2, img3, img4, img5];

  // initImgRotation(imgArr);
  populateNavigationRects(imgArr);
  nextImgBtnLogic(imgArr);
  // prevImgBtnLogic();
  // initNavRectLogic();
})();
