export const transition = { type: "spring", duration: 0.8 };

export const slideAnimation = (direction: string) => {
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: 0 },
    },
    exit: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      transition: { ...transition, delay: 0 },
    },
  };
};
export const fadeAnimation = {
  initial: {
    opacity: 0,
    transition: { ...transition, delay: 0.5 },
  },
  animate: {
    opacity: 1,
    transition: { ...transition, delay: 0 },
  },
  exit: {
    opacity: 0,
    y: "50%",
    transition: { ...transition, delay: 0 },
  },
};
export const cartMobile = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
  transition: { duration: 0.3 },
};
export const dropdownContainer = {
  initial: { opacity: 0, y: -40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 40 },
  transition: { duration: 0.3 },
};
export const dropdownList = {
  initial: "closed",
  animate: "open",
  exit: "closed",
  variants: {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  },
  transition: { duration: 0.3, staggerChildren: 0.1 },
};
export const dropdownItem = {
  variants: {
    open: { opacity: 1, y: 4 },
    closed: { opacity: 0, y: -30 },
  },
};
