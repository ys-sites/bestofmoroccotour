/**
 * Reusable Motion & Animation System for Best of Morocco Tours
 * High-agency taste directives: hardware-accelerated transforms, spring physics,
 * scroll-triggered reveals, and subtle micro-interactions.
 */

export const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export const fadeUp = (delay = 0, distance = 24) => ({
  initial: { opacity: 0, y: distance },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.65, delay, ease: easeOutExpo },
});

export const fadeUpBlur = (delay = 0, distance = 28) => ({
  initial: { opacity: 0, y: distance, filter: "blur(6px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.75, delay, ease: easeOutExpo },
});

export const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.6, delay, ease: easeOutExpo },
});

export const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.94 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, delay, ease: easeOutExpo },
});

export const staggerContainer = (staggerDelay = 0.1, delayChildren = 0.1) => ({
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
  viewport: { once: true, margin: "-50px" },
});

export const cardItemVariant = {
  initial: { opacity: 0, y: 30 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.65, ease: easeOutExpo }
  },
  viewport: { once: true, margin: "-40px" }
};

export const floatGentle = {
  animate: { 
    y: [0, -8, 0],
    transition: { 
      duration: 5.5, 
      repeat: Infinity, 
      ease: "easeInOut" as const
    } 
  }
};

export const lanternSway = {
  animate: {
    rotate: [-2.5, 2.5, -2.5],
    y: [0, -4, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
};

