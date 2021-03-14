import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const DefaultBtn = styled.button`
  width: 40px;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 50%;

  transition: all 0.3s ease-in-out;

  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const TodoText = styled.p`
  color: ${(props) => (props.done ? "#91969c" : "#2e3131")};
  font-size: 14px;
  font-weight: 400;
  text-decoration: ${(props) => props.done && "line-through"};
`;

export const DoneCheckBtn = styled(DefaultBtn)`
  background: yellowgreen;
`;
export const ModifyBtn = styled(DefaultBtn)`
  background: skyblue;
`;
export const DeleteBtn = styled(DefaultBtn)`
  background: tomato;
`;
