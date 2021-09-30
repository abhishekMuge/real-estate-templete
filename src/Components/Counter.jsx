import React from "react";
import { useSpring, animated, config } from "react-spring";

export default function Counter() {
  const { number } = useSpring({
    from: { number: 0 },
    number: 100,
    delay: 1000,
    config: config.molasses,
  });
  return <animated.span>{number.to((n) => n.toFixed())}</animated.span>;
}
