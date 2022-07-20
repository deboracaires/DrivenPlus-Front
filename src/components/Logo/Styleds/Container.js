import styled from 'styled-components';

const Container = styled.div `
  display: flex;
  margin: 134.93px 0 100.93px 0;

  img {
    height: 47.14px;
  }
  .d {
    margin-right: 6.08px;
    width: 44.98px;
  }
  .r {
    margin-right: 6.95px;
    width: 30.29px;
  }
  .i {
    margin-right: 6.18px;
    width: 10.02px;
  }
  .v {
    margin-right: 0.95px;
    width: 47.05px;
  }
  .e {
    margin-right: 4.54px;
    width: 44.75px;
    height: 49px;
  }
  .n {
    margin-right: 29.68px;
    width: 41.08px;
    height: 48.13px;
  }

  .plus {
    position: relative;
    background-color: #FF4791;
  }

  .horizontal, .upright {
    width: 9.97px;
    height: 47.38px;
    background-color: #FF4791;
  }

  .upright {
    position: absolute;
    top: 0;
  }

  .horizontal {
    transform: rotate(90deg);
  }
`;

export default Container;
