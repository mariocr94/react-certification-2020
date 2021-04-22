import styled from 'styled-components';

const Card = styled.button`
  position: relative;
  text-align: center;
  height: 320px;
  width: 320px;
  border-radius: 5px;
  padding: 10;
  margin: 10px auto 10px 20px;
  border: none;
  cursor: pointer;
  overflow: hidden;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.cardColor};
  box-shadow: 5px 5px ${(props) => props.theme.primaryColor};
  :hover {
    border: 2px solid;
  }
`;

const Thumbnail = styled.div`
  width: 100%;
  height: 45%;
  background-image: url(${(props) => props.thumb});
`;

const Text = styled.div`
  padding: 0 10px;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Styled = {
  Card,
  Text,
  Thumbnail,
};

export default Styled;
