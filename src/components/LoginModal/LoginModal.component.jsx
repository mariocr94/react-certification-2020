import React, { useEffect, useCallback } from 'react'
import Styled from './styled';
import { useHistory } from 'react-router-dom';

const LoginModal = () => {
    const history = useHistory();

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

    return (
        <Styled.ModalBG>
            <Styled.ModalContent >
                <Styled.CloseButton onClick={goBack}>&times;</Styled.CloseButton>
                <Styled.LoginForm>
                    <Styled.Label>Username</Styled.Label>
                    <Styled.Input />

                    <Styled.Label>Password</Styled.Label>
                    <Styled.Input />
                    <Styled.Button > Login! </Styled.Button>
                </Styled.LoginForm>
            </Styled.ModalContent>
        </Styled.ModalBG>
    )
}

export default LoginModal