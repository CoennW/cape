import * as myAnimations from "./animations";

//INIT
//animation elements
const burgerImage = document.querySelector(".js-burger-images");
const burgerImages = document.querySelectorAll(".js-burger-images > *");
const backgroundGraphic = document.querySelector(".js-graphics-bg");
const buttonCTA = document.querySelector(".js-CTA");
const textElements = document.querySelector(".js-text-elements");
const textNodes = document.querySelectorAll(".js-text-elements > *");

//input fields
const headlineTextField = document.querySelectorAll(".js-headline-text")[0];
const colorButtons = document.querySelectorAll(".js-color-buttons > *");
const form = document.querySelector(".input").addEventListener("click", (e) => {
  e.preventDefault();
});
const imageSizeRange = document.querySelector(".js-image-size-range");

//play again button
const playAgainBtn = document.querySelector(".js-play-again-button");

//ANIMATION
const prepareSecondFrame = () => {
  textNodes[0].innerHTML = "And side dishes delivered to your doorstep";

  burgerImages.forEach((burger, i) => {
    i == 0 ? (burger.style.display = "none") : (burger.style.display = "block");
  });
  playAnimation(true);
};

//The animations that are played on refresh
const playAnimation = (isSecondFrame) => {
  backgroundGraphic.animate(
    myAnimations.slideInFromBottom,
    myAnimations.slideInAnimationTiming
  );
  burgerImage.animate(
    myAnimations.slideInFromRight,
    myAnimations.slideInAnimationTiming
  );
  textElements.animate(myAnimations.fadeIn, myAnimations.fadeInAnimationTiming);
  setTimeout(() => {
    burgerImage.animate(
      myAnimations.pulseOnSpot,
      myAnimations.PulseOnSpotTiming
    );
    buttonCTA.animate(myAnimations.pulseOnSpot, myAnimations.PulseOnSpotTiming);
  }, 1200);
  if (isSecondFrame) {
    buttonCTA.classList.add("preview__iframe--hover");
    burgerImage.classList.add("preview__iframe--hover");
    return;
  }
  setTimeout(() => {
    burgerImage.animate(
      myAnimations.slideOutToLeft,
      myAnimations.slideOutAnimationTiming
    );
    backgroundGraphic.animate(
      myAnimations.slideOutToTop,
      myAnimations.slideOutAnimationTiming
    );
    textElements.animate(
      myAnimations.slideOutToTop,
      myAnimations.slideOutAnimationTiming
    );
  }, 4200);
  setTimeout(() => {
    prepareSecondFrame();
  }, 4700);
};

playAnimation();

// INPUT  CONTROLS
//Changes the header text
headlineTextField.addEventListener("input", (event) => {
  textNodes[0].innerHTML = event.target.value;
});

//Add eventlisteners for header color change
colorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    handleColorChange(button.value);
  });
});

//Logic for header color change
const handleColorChange = (color) => {
  textNodes[0].style.color = color;
};

//Uses the slider to change the picture size
imageSizeRange.addEventListener("input", (e) => {
  burgerImages.forEach((image) => {
    image.style.width = e.target.value + "%";
  });
});

// PLAY AGAIN
//Play again button resets all the timeouts and fires the animation
const prepAnimation = () => {
  burgerImages.forEach((burger, i) => {
    i == 0 ? (burger.style.display = "block") : (burger.style.display = "none");
  });
};

playAgainBtn.addEventListener("click", () => {
  // Clear all timeout
  var highestTimeoutId = setTimeout(";");
  for (var i = 0; i < highestTimeoutId; i++) {
    clearTimeout(i);
  }
  prepAnimation();
  playAnimation();
});
