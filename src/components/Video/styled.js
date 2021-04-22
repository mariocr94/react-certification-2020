import styled from 'styled-components';

const Details = styled.div`
  text-align: center;
  line-height: 1.5;
  width: auto;
  @media (min-width: 900px) {
    width: 70%;
  }
`;

const Text = styled.div`
  width: auto;
  height: auto;
  margin: 10px;
  padding: 5px;
  border-top: 1px solid ${(props) => props.theme.textColor};
`;

const Desc = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Button = styled.button`
  float: right;
  margin-top: 15px;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.navColor};
  color: ${(props) => props.theme.menuColor};
  font-weight: bold;
  border-radius: 5px;
`;

const Styled = {
  Details,
  Text,
  Desc,
  Button,
};

export default Styled;
