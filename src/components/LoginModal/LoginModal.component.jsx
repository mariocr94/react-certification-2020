import React, { useEffect, useCallback, useRef } from 'react'
import Styled from './styled';
import { useHistory } from 'react-router-dom';
import loginApi from '../../apis/login.api';
import { useAppContext } from '../../context/AppProvider';

const LoginModal = () => {
    const history = useHistory();
    const outRef = useRef(null);
    const userRef = useRef(null);
    const pwRef = useRef(null);
    const { dispatch } = useAppContext();

    const goBack = useCallback(() => {
        history.goBack();
    }, [history]);

    // Added functionality to close modal when pressing ESC key.
    const escFunction = useCallback((event) => {
        if(event.keyCode === 27) {
          goBack();
        }
      }, [goBack]);
    
    useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
        document.removeEventListener("keydown", escFunction, false);
    };
    }, [escFunction]);

    useEffect(() => {
        userRef.current.select();
    }, [])

    const handleLogin = () => {
        const username = userRef.current.value;
        const password = pwRef.current.value;
        const loginResponse = loginApi(username, password);
        loginResponse.then((value) => {
            dispatch({ type: "LOGIN", payload: value });
            goBack();
        }).catch((err) => {
            console.log(err);
        });
    }

    const handleKeyDown = (evt) => {
        if(evt.key === 'Enter') {
            handleLogin();
        }
    }

    const exit = (e) => {
        if (e.target === outRef.current)
            goBack();
    }

    return (
        <Styled.ModalBG ref={outRef} onClick={exit}>
            <Styled.ModalContent >
                <Styled.CloseButton onClick={goBack}>&times;</Styled.CloseButton>
                <Styled.LoginForm>
                    <Styled.Label>Username</Styled.Label>
                    <Styled.Input ref={userRef} type="text" placeholder="Username" required/>

                    <Styled.Label>Password</Styled.Label>
                    <Styled.Input ref={pwRef} type="password" placeholder="Password" onKeyDown={handleKeyDown} required/>
                    <Styled.Button onClick={handleLogin}> Login! </Styled.Button>
                </Styled.LoginForm>
            </Styled.ModalContent>
        </Styled.ModalBG>
    )
}

export default LoginModal