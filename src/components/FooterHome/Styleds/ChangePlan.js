import styled from 'styled-components';

const ChangePlan = styled.button `
  width: 299px;
  height: 52px;
  background: #FF4791;
  border-radius: 8px;
  border: none;
  margin-bottom: 8px;

  :active {
    box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
    transform: translateY(2px);
  }

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;

  :hover {
    cursor: pointer;
  }
`;

export default ChangePlan;