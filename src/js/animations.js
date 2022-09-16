export const fadeIn = [
  { opacity: 0, transform: "translateY(10px)", easing: "ease" },
  { opacity: 1, transform: "translateY(0px)", easing: "ease" },
];

export const slideInFromBottom = [
  { transform: "translateY(300px)", easing: "ease" },
  { transform: "translateY(-300px)", easing: "ease" },
  { transform: "translateY(-253px)", easing: "ease-out" },
];

export const slideOutToTop = [
  { transform: "translateY(-253px)", easing: "ease" },
  { transform: "translateY(-1000px)", easing: "ease-out" },
];

export const slideInFromRight = [
  { transform: "translateX(500px)", easing: "ease" },
  { transform: "translateX(-50px)", easing: "ease" },
  { transform: "translateX(0px)", easing: "ease" },
];

export const slideOutToLeft = [
  { transform: "translateX(0px)", easing: "ease" },
  { transform: "translateX(-1000px)", easing: "ease" },
];

export const pulseOnSpot = [
  { transform: "scale(1)", easing: "ease" },
  { transform: "scale(1.1)", easing: "ease" },
  { transform: "scale(1)", easing: "ease" },
];

export const fadeInAnimationTiming = {
  duration: 1200,
  iterations: 1,
};

export const slideInAnimationTiming = {
  duration: 1200,
  iterations: 1,
};

export const slideOutAnimationTiming = {
  duration: 500,
  iterations: 1,
};

export const PulseOnSpotTiming = {
  duration: 1000,
  iterations: 3,
};
