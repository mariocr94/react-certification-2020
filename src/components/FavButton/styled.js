import styled from 'styled-components';

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
  Button,
};

export default Styled;
