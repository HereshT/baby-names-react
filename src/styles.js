// styles.js
import styled from "styled-components";

export const StyledButton = styled.button`
  margin: 10px;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  &:hover {
    background-color: #45a049;
  }
`;

export const Name = styled.p`
  cursor: pointer;
  color: ${(props) => (props.sex === "f" ? "#ea07f2" : "#010321")};
`;

export const StyledSearchBar = styled.input`
  width: 200px;
  height: 35px;
  margin: 10px 0;
  border: none;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
`;

export const NameGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;
