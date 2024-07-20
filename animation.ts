import { animate } from "framer-motion"

export const FadeUp={
    initial:{
      opacity:0,
      y:60
    },
    animate:{
      opacity:1,
      y:0
    }
  }

  export const stagger={
    initial:{},
    animate:{
      transition:{
        staggerChildren:0.1,
      },
    },
    
  }