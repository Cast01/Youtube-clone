import styled from "styled-components";

interface CategoriesProps {
  scrollX: number;
  leftArrow: boolean;
  rightArrow: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 50px;
  border-top: 1px solid #c7c7c7;
  border-bottom: 1px solid #c7c7c7;
  background: white;
  position: relative;

  svg {
    position: absolute;
    cursor: pointer;
    z-index: 99;
    top: 50%;
    transform: translateY(-50%);
    width: 25px;
    height: 25px;
    background: #00fff3;
    transform: translateY(-50%);
    top: 50%;
    border-radius: 50%;

    &:nth-child(1) {
      right: 15px;
      display: ${({ rightArrow }: CategoriesProps) =>
        rightArrow ? "block" : "none"};
    }

    &:nth-child(2) {
      left: 15px;
      display: ${({ leftArrow }: CategoriesProps) =>
        leftArrow ? "block" : "none"};
    }
  }

  #categories-list {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 15px;
    position: relative;
    left: ${({ scrollX }: CategoriesProps) => (scrollX ? `${scrollX}px` : ``)};
    transition: 0.3s;

    h2 {
      font-size: 11px;
      padding: 5px 10px;
      background: #c7c7c7;
      border-radius: 30px;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        background: #afafaf;
      }
    }

    .first {
      margin-right: 10px;

      h2 {
        background-color: black;
        color: white;
      }
    }

    ul {
      display: flex;
      align-items: center;
      list-style-type: none;
      border-left: 1px solid #c7c7c7;
    }
  }
`;

export const CategoryItem = styled.li`
  width: fit-content;
  margin: 0 10px;
`;
