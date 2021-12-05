import React, { useState, useLayoutEffect } from "react";
import SplitText from "gsap/SplitText";
import { useEffect } from "react/cjs/react.development";

export default function useResize() {
	const [windowResizing, setWindowResizing] = useState(false);

  useEffect(() => {
    let timeout;
    const handleResize = () => {
      clearTimeout(timeout);

      setWindowResizing(true);

      timeout = setTimeout(() => {
        setWindowResizing(false);
      }, 200);
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
	return { windowResizing };
}
