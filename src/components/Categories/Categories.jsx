import { Container, CategoryItem } from "./CategoriesStyle";
import { CaretRight, CaretLeft } from "phosphor-react";
import { useContext, useRef, useState } from "react";
import { useContainerDimensions } from "../../Hooks/useContainerDimensions";
import { AsideSwitcherContext } from "../../Contexts/AsideSwitcher";

export default function Categories() {
  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  const [scrollX, setScrollX] = useState(0);
  const [rightArrow, setRightArrow] = useState(true);
  const [leftArrow, setLeftArrow] = useState(false);

  const { aside } = useContext(AsideSwitcherContext);

  const ulRef = useRef();
  const { widthUl } = useContainerDimensions(ulRef);
  const componentRef = useRef();
  const { widthComponent } = useContainerDimensions(componentRef);

  const maxLeft =
    aside === "true"
      ? widthComponent - widthUl
      : aside === "false"
      ? widthComponent - widthUl - 10
      : aside === "none"
      ? widthComponent - widthUl - 10
      : "";
  console.log(widthUl, widthComponent, maxLeft);

  function handleRightArrow() {
    setLeftArrow(true);
    let leftNegative = scrollX - 100;
    if (scrollX <= maxLeft) {
      leftNegative = maxLeft - 70;
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
