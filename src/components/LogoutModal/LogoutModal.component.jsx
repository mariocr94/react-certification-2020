import React, { useEffect, useCallback } from 'react'
import Styled from './styled';
import { useHistory } from 'react-router-dom';
import { useAppContext } from '../../context/AppProvider';

const LoginModal = () => {
    const history = useHistory();
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


    const handleLogout = () => {
        dispatch({ type: "LOGOUT"});
        goBack();
    }


    return (
        <Styled.ModalBG>
            <Styled.ModalContent >
                <Styled.CloseButton onClick={goBack}>&times;</Styled.CloseButton>
                <Styled.LoginForm>
                    <Styled.Label>Are you sure you want to logout?</Styled.Label>
                    <Styled.Button onClick={handleLogout}> Logout! </Styled.Button>
                </Styled.LoginForm>
            </Styled.ModalContent>
        </Styled.ModalBG>
    )
}

export default LoginModal