import styled from 'styled-components';

const ButtonReturn = styled.button`
  background-color: #0E0E13;
  border: none;
  color: #ffffff;
  text-decoration: underline;
  margin-top: 24px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  :hover {
    cursor: pointer;
  }

  :active {
    transform: translateY(2px);
  }
`;

export default ButtonReturn;
