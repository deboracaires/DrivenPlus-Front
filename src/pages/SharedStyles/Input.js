import styled from 'styled-components';

const Input = styled.input `
  background: #FFFFFF;
  border-radius: 8px;
  border: none;
  width: 299px;
  height: 52px;
  padding-left: 14px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #7E7E7E;
  margin-bottom: 16px;
  
  ::placeholder {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;

    color: #7E7E7E;
  }
  :focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
} 

`;

export default Input;
