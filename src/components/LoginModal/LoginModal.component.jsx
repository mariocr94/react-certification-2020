import React, { useEffect, useCallback, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Styled from './styled';
import loginApi from '../../apis/login.api';
import { AppContext } from '../../context/AppProvider';

const LoginModal = () => {
  const history = useHistory();
  const outRef = useRef(null);
  const userRef = useRef(null);
  const pwRef = useRef(null);
  const { dispatch } = useContext(AppContext);

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

  useEffect(() => {
    userRef.current.select();
  }, []);

  const handleLogin = () => {
    const username = userRef.current.value;
    const password = pwRef.current.value;
    const loginResponse = loginApi(username, password);
    loginResponse
      .then((value) => {
        dispatch({ type: 'LOGIN', payload: value });
        goBack();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleKeyDown = (evt) => {
    if (evt.key === 'Enter') {
      handleLogin();
    }
  };

  const exit = (e) => {
    if (e.target === outRef.current) goBack();
  };

  return (
    <Styled.ModalBG ref={outRef} onClick={exit} data-testid="outside">
      <Styled.ModalContent data-testid="inside">
        <Styled.CloseButton onClick={goBack}>&times;</Styled.CloseButton>
        <Styled.LoginForm>
          <Styled.Label>Username</Styled.Label>
          <Styled.Input
            ref={userRef}
            type="text"
            placeholder="Username"
            data-testid="username"
            required
          />

          <Styled.Label>Password</Styled.Label>
          <Styled.Input
            ref={pwRef}
            type="password"
            placeholder="Password"
            data-testid="password"
            onKeyDown={handleKeyDown}
            required
          />
          <Styled.Button onClick={handleLogin} data-testid="loginButton">
            Login!
          </Styled.Button>
        </Styled.LoginForm>
      </Styled.ModalContent>
    </Styled.ModalBG>
  );
};

export default LoginModal;
