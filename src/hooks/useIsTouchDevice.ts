import { useEffect, useState } from "react";

function detectTouch(): boolean {
  if (typeof window === "undefined") return false;
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  const narrow = window.innerWidth < 768;
  return coarse || narrow;
}

export function useIsTouchDevice(): boolean {
  const [isTouch, setIsTouch] = useState(detectTouch);

  useEffect(() => {
    const onResize = () => setIsTouch(detectTouch());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return isTouch;
}
