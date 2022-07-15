import { Container, CategoryItem } from "./CategoriesStyle";
import { CaretRight, CaretLeft } from "phosphor-react";
import { useContext, useEffect, useRef, useState } from "react";
import { AsideSwitcherContext } from "../../Contexts/AsideSwitcher";

export default function Categories() {
  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  const [scrollX, setScrollX] = useState(0);
  const [rightArrow, setRightArrow] = useState(true);
  const [leftArrow, setLeftArrow] = useState(false);
  const [widthComponent, setWidthComponent] = useState(null);
  const [widthUl, setWidthUl] = useState(null);

  const { aside } = useContext(AsideSwitcherContext);

  const ulRef = useRef();
  const componentRef = useRef();

  const maxLeft = widthComponent - widthUl;

  function handleRightArrow() {
    setLeftArrow(true);
    let leftNegative = scrollX - 100;
    if (scrollX <= maxLeft) {
      leftNegative = maxLeft - 130;
      setRightArrow(false);
    }
    setScrollX(leftNegative);
  }

  function handleLeftArrow() {
    setRightArrow(true);
    let leftPositive = scrollX + 100;
    if (scrollX >= -100) {
      leftPositive = 0;
      setLeftArrow(false);
    }
    setScrollX(leftPositive);
  }

  useEffect(() => {
    setWidthComponent(componentRef.current.offsetWidth);
    setWidthUl(ulRef.current.offsetWidth);
  }, [aside]);

  return (
    <Container
      scrollX={scrollX}
      rightArrow={rightArrow}
      leftArrow={leftArrow}
      ref={componentRef}
    >
      <CaretRight onClick={handleRightArrow} />
      <CaretLeft onClick={handleLeftArrow} />
      <div id="categories-list">
        <div className="first">
          <h2>Novo</h2>
        </div>
        <ul ref={ulRef}>
          {arr.map((item, index) => {
            return (
              <CategoryItem key={index}>
                <h2>Novo</h2>
              </CategoryItem>
            );
          })}
        </ul>
      </div>
    </Container>
  );
}
