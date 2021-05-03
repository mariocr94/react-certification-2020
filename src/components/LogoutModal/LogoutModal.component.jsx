import React, { useEffect, useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Styled from './styled';
import { useAppContext } from '../../context/AppProvider';

const LoginModal = () => {
  const outRef = useRef(null);
  const history = useHistory();
  const { dispatch } = useAppContext();

  const goBack = useCallback(() => {
    history.goBack();
  }, [history]);

  // Added functionality to close modal when pressing ESC key.
  const escFunction = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        goBack();
      }
    },
    [goBack]
  );

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [escFunction]);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    goBack();
  };

  const exit = (e) => {
    if (e.target === outRef.current) goBack();
  };

  return (
    <Styled.ModalBG ref={outRef} onClick={exit} data-testid="outside">
      <Styled.ModalContent data-testid="inside">
        <Styled.CloseButton onClick={goBack} data-testid="closing">
          &times;
        </Styled.CloseButton>
        <Styled.LoginForm>
          <Styled.Label>Are you sure you want to logout?</Styled.Label>
          <Styled.Button onClick={handleLogout} data-testid="logoutButton">
            Logout!
          </Styled.Button>
        </Styled.LoginForm>
      </Styled.ModalContent>
    </Styled.ModalBG>
  );
};

export default LoginModal;
