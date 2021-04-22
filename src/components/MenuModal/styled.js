import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ModalBG = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background-color: ${(props) => props.theme.foregroundColor};
  padding: 0px;
  border: 1px solid #888;
  width: 20%;
`;

const CloseButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Section = styled(Link)`
  height: 2.5em;
  width: 100%;
  padding: 0.5em;
  border-bottom: 1px solid;
  color: ${(props) => props.theme.textColor};
  :hover {
    background-color: ${(props) => props.theme.cardColor};
  }
`;

const Button = styled.button`
  border-radius: 5px;
  margin-top: 15px;
  padding: 10px 15px;
  cursor: pointer;
  color: #eee;
  background-color: ${(props) => props.theme.primaryColor};
`;

const Styled = {
  ModalBG,
  ModalContent,
  CloseButton,
  LoginForm,
  Section,
  Button,
};

export default Styled;
