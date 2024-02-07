import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 0 20px;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 40px;
  align-items: center;
`;

export const Button = styled.button`
    margin-top: 10px;
  width: 100px;
  padding: 0px;
  height: 25px;
  color: #black;
  border: 1px solid #black;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.25s linear 0s;
  &:hover,
  &:focus {
    border: 1px solid #white; background: #4682B4;
    transform: scale(1.1);
`;