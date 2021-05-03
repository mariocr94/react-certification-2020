import styled from 'styled-components';

export const HeaderBox = styled.div`
  position: sticky;
  display: flex;
  width: 100%;
  padding: 0.2em;
  background-color: ${(props) => props.theme.navColor};
`;

export const MenuBox = styled.div`
  align-self: center;
  border-radius: 50%;
  height: 2em;
  width: 2em;
  margin: 10px;
  cursor: pointer;
`;

export const MiniBox = styled.div`
  background-color: ${(props) => props.theme.menuColor};
  align-self: center;
  margin: 0 auto;
  margin-top: ${(props) => props.space};
  height: 2px;
  width: 1em;
`;

export const SearchBox = styled.div`
  background-color: ${(props) => props.theme.foregroundColor};
  margin-right: auto;
  margin-top: 0.5em;
  height: 2em;
  border: none;
  display: flex;
  border-radius: 0.5em;
`;

export const Input = styled.input`
  border: none;
  background-color: ${(props) => props.theme.foregroundColor};
  font-size: 0.9em;
  color: ${(props) => props.theme.textColor};
  outline: none;
  width: 80%;
  .focus {
    color: purple;
  }
`;

export const Container = styled.div`
  padding: 0.3em;
  margin: 0.2em;
  align-self: center;
  display: flex;
`;

export const CheckBoxWrapper = styled.div`
  position: relative;
  top: 0.4em;
`;

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: ${(props) => props.theme.foregroundColor};
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: ${(props) => props.theme.primaryColor};
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: ${(props) => props.theme.foregroundColor};
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

export const Icon = styled.div`
  border-radius: 50%;
  height: 2em;
  width: 2em;
  margin: 10% 10%;
  background-color: ${(props) => props.theme.foregroundColor};
  cursor: pointer;
  overflow: hidden;
`;

export const Head = styled.div`
  position: relative;
  border-radius: 50%;
  width: 0.7em;
  height: 0.7em;
  margin: auto;
  top: 10%;
  background-color: ${(props) => props.theme.primaryColor};
`;

export const Body = styled.div`
  border-radius: 50%;
  width: 1.1em;
  height: 0.55em;
  margin: auto;
  margin-top: 20%;
  background-color: ${(props) => props.theme.primaryColor};
`;
