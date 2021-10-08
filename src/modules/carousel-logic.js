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

  class ProgramImg {
    constructor(imgTag) {
      this.imgTag = imgTag;
    }

    applyEnteringImgAnimNextBtn() {
      if (this.imgTag.classList.contains("exiting-img-anim-next-btn")) {
        this.imgTag.classList.remove("exiting-img-anim-next-btn");
      }
      this.imgTag.classList.add("entering-img-anim-next-btn");
    }

    applyExitingImgAnimNextBtn() {
      if (this.imgTag.classList.contains("entering-img-anim-next-btn")) {
        this.imgTag.classList.remove("entering-img-anim-next-btn");
      }
      this.imgTag.classList.add("exiting-img-anim-next-btn");
    }

    applyExitingImgAnimPrevBtn() {
      if (this.imgTag.classList.contains("entering-img-anim-prev-btn")) {
        this.imgTag.classList.remove("entering-img-anim-prev-btn");
      }
      this.imgTag.classList.add("exiting-img-anim-prev-btn");
    }

    applyEnteringImgAnimPrevBtn() {
      if (this.imgTag.classList.contains("exiting-img-anim-prev-btn")) {
        this.imgTag.classList.remove("exiting-img-anim-prev-btn");
      }
      this.imgTag.classList.add("entering-img-anim-prev-btn");
    }

    applyEnteringImgAnimAppear() {
      if (this.imgTag.classList.contains("exiting-img-anim-disappear-btn")) {
        this.imgTag.classList.remove("exiting-img-anim-disappear-btn");
      }
      this.imgTag.classList.add("entering-img-anim-appear-btn");
    }

    applyExitingImgAnimDisappear() {
      if (this.imgTag.classList.contains("entering-img-anim-appear-btn")) {
        this.imgTag.classList.remove("entering-img-anim-appear-btn");
      }
      this.imgTag.classList.add("exiting-img-anim-disappear-btn");
    }

    setDefaultClasses() {
      this.imgTag.removeAttribute("class");
      this.imgTag.classList.add("program-img");
    }

    addClass(className) {
      this.imgTag.classList.add(className);
    }
  }

  // function initImgRotation(imgArr) {
  //   let currImg = new ProgramImg(
  //     imgArr[0],
  //     document.querySelector(".curr-img")
  //   );
  //   currImg.applyToHTML();

  //   let count = 0;
  //   setInterval(() => {
  //     if (count === imgArr.length - 1) {
  //       // Made as -1 so that when the loop restarts the count
  //       // starts at 0 and not 1.
  //       count = -1;
  //     }
  //     count += 1;
  //     const updatedImgTag = document.createElement("img");
  //     updatedImgTag.classList.add("program-img");
  //     updatedImgTag.classList.add("new-img");
  //     updatedImgTag.setAttribute("src", `${imgArr[count]}`);
  //     const newImg = new ProgramImg(imgArr[count], updatedImgTag);
  //     const imgContainer = document.querySelector(".img-container");
  //     imgContainer.appendChild(updatedImgTag);
  //     currImg.applyExitingImgAnim();
  //     newImg.applyEnteringImgAnim();
  //     currImg = newImg;
  //   }, 5000);
  // }

  const btnLogic = (() => {
    const nextBtn = document.querySelector(".right-arrow");
    const prevBtn = document.querySelector(".left-arrow");

    const imgContainer = document.querySelector(".img-container");
    let count = 0;

    function disableBtns() {
      const navRectContainer = document.querySelector(
        ".navigation-rectangles-container"
      );
      const navRectsArr = [...navRectContainer.children];
      nextBtn.style.pointerEvents = "none";
      prevBtn.style.pointerEvents = "none";
      navRectsArr.forEach((rect) => {
        rect.style.pointerEvents = "none";
      });
    }

    function enableBtns() {
      const navRectContainer = document.querySelector(
        ".navigation-rectangles-container"
      );
      const navRectsArr = [...navRectContainer.children];
      nextBtn.style.pointerEvents = "auto";
      prevBtn.style.pointerEvents = "auto";
      navRectsArr.forEach((rect) => {
        rect.style.pointerEvents = "auto";
      });
    }

    function styleCurrNavRect() {
      const navRectContainer = document.querySelector(
        ".navigation-rectangles-container"
      );
      const navRectsArr = [...navRectContainer.children];

      navRectsArr.forEach((rect) => {
        if (rect.classList.contains(`nav-rect-${count}`)) {
          rect.classList.add("curr-nav-rect");
        } else if (count === imgArr.length) {
          rect.classList.add("curr-nav-rect");
        } else if (count === "undefined") {
          navRectsArr[0].classList.add("curr-nav-rect");
        } else {
          rect.classList.remove("curr-nav-rect");
        }
      });
    }

    function populateNavigationRects(imgArr) {
      const navRectContainer = document.querySelector(
        ".navigation-rectangles-container"
      );

      const numOfImgs = imgArr.length;
      for (let i = 0; i < numOfImgs; ++i) {
        const currNavRect = document.createElement("div");
        currNavRect.classList.add("navigation-rect");
        currNavRect.classList.add(`nav-rect-${i}`);
        navRectContainer.appendChild(currNavRect);
      }
      styleCurrNavRect();
    }

    function initNavRectLogic(imgArr) {
      populateNavigationRects(imgArr);
    }

    function goToNextImg(imgArr) {
      count += 1;
      disableBtns(nextBtn, prevBtn);
      const currImg = document.querySelector(".curr-img");
      const currImgItem = new ProgramImg(currImg);

      let newImg;
      let newImgItem;
      currImgItem.applyExitingImgAnimNextBtn();
      currImg.addEventListener("animationend", () => {
        currImgItem.setDefaultClasses();
        currImgItem.addClass("new-img");
      });
      if (count === imgArr.length) {
        newImg = imgContainer.firstChild.nextSibling;
        newImg.classList.add("curr-img");
        newImgItem = new ProgramImg(newImg);
        newImgItem.applyEnteringImgAnimNextBtn();
        newImg.addEventListener("animationend", () => {
          enableBtns();
          newImgItem.setDefaultClasses();
          newImgItem.addClass("curr-img");
        });
        count = 0;
      } else {
        newImg = currImg.nextSibling.nextSibling;
        newImgItem = new ProgramImg(newImg);
        newImgItem.applyEnteringImgAnimNextBtn();
        newImg.addEventListener("animationend", () => {
          enableBtns();
          newImgItem.setDefaultClasses();
          newImgItem.addClass("curr-img");
        });
      }
      styleCurrNavRect();
    }

    function nextImgBtnLogic(imgArr) {
      nextBtn.addEventListener("click", () => {
        goToNextImg(imgArr);
      });
    }

    function goToPrevImg(imgArr) {
      count -= 1;
      disableBtns();
      const currImg = document.querySelector(".curr-img");
      const currImgItem = new ProgramImg(currImg);
      let newImg;
      let newImgItem;
      currImgItem.applyExitingImgAnimPrevBtn();
      currImg.addEventListener("animationend", () => {
        currImgItem.setDefaultClasses();
        currImgItem.addClass("new-img");
      });
      if (count === -1) {
        newImg = imgContainer.lastChild.previousSibling;
        newImg.classList.add("curr-img");
        newImgItem = new ProgramImg(newImg);
        newImgItem.applyEnteringImgAnimPrevBtn();
        newImg.addEventListener("animationend", () => {
          enableBtns();
          newImgItem.setDefaultClasses();
          newImgItem.addClass("curr-img");
        });
        count = imgArr.length - 1;
      } else {
        newImg = currImg.previousSibling.previousSibling;
        newImgItem = new ProgramImg(newImg);
        newImgItem.applyEnteringImgAnimPrevBtn();
        newImg.addEventListener("animationend", () => {
          enableBtns();
          newImgItem.setDefaultClasses();
          newImgItem.addClass("curr-img");
        });
      }
      styleCurrNavRect();
    }

    function prevImgBtnLogic(imgArr) {
      prevBtn.addEventListener("click", () => {
        goToPrevImg(imgArr);
      });
    }

    function goToClickedImg() {
      const imgContainerChildren = [...imgContainer.children];

      const navRectContainer = document.querySelector(
        ".navigation-rectangles-container"
      );
      const navRectsArr = [...navRectContainer.children];

      navRectsArr.forEach((rect) => {
        rect.addEventListener("click", () => {
          const rectIndex = navRectsArr.indexOf(rect);

          if (rectIndex !== count) {
            count = rectIndex;
            disableBtns();
            const currImg = document.querySelector(".curr-img");
            const currImgItem = new ProgramImg(currImg);

            let newImg;
            let newImgItem;
            currImgItem.applyExitingImgAnimDisappear();
            currImg.addEventListener("animationend", () => {
              currImgItem.setDefaultClasses();
              currImgItem.addClass("new-img");
            });

            newImg = imgContainerChildren[count];
            newImgItem = new ProgramImg(newImg);
            newImgItem.applyEnteringImgAnimAppear();
            newImg.addEventListener("animationend", () => {
              enableBtns();
              newImgItem.setDefaultClasses();
              newImgItem.addClass("curr-img");
            });

            styleCurrNavRect();
          }
        });
      });
    }

    return {
      nextImgBtnLogic,
      prevImgBtnLogic,
      initNavRectLogic,
      goToClickedImg,
    };
  })();

  function initBtnLogic(imgArr) {
    btnLogic.initNavRectLogic(imgArr);
    btnLogic.nextImgBtnLogic(imgArr);
    btnLogic.prevImgBtnLogic(imgArr);
    btnLogic.goToClickedImg();
  }

  const imgArr = [img1, img2, img3, img4, img5];

  initBtnLogic(imgArr);
  // initImgRotation(imgArr);

  // initNavRectLogic();
})();
