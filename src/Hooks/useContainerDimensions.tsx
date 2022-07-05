import { useEffect, useState } from "react";

export function useContainerDimensions(myRef: {
  current: { offsetWidth: number };
}) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getDimensions = () => ({
    widthUl: myRef.current.offsetWidth,
    widthComponent: myRef.current.offsetWidth,
  });

  const [dimensions, setDimensions] = useState({
    widthUl: 0,
    widthComponent: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions(getDimensions());
    };

    if (myRef.current) {
      setDimensions(getDimensions());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myRef]);

  return dimensions;
}
