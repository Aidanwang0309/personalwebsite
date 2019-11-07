export const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96]
};

export const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0,
    opacity: 0,
    x: -300,
    transition: { duration: 100, ...transition }
  }
};

export const imageVariants = {
  exit: { opacity: 0, scale: 0.5, x: 600, transition },
  enter: {
    opacity: 1,
    scale: 1,
    x: 400,
    y: -150,
    transition
  }
};

export const imageVariants2 = {
  exit: { opacity: 0, scale: 0.5, y: 200, transition },
  enter: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition
  }
};
