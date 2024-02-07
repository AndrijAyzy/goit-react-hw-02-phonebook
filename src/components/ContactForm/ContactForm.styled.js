import styled from '@emotion/styled';
import { Field } from 'formik';

export const Label = styled.label`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled(Field)`
  margin: 0;
  outline: none;
  width: 200px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 1px solid #black;
`;

export const Button = styled.button`
  margin-top: 10px;
  width: 100px;
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
