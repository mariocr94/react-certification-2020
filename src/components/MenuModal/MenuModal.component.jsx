import React, { useEffect, useCallback, useRef } from 'react';
import Styled from './styled';
import { useHistory } from 'react-router-dom';
import { useAppContext } from '../../context/AppProvider';

const MenuModal = () => {
    const { state }  = useAppContext();
    const { isLogged } = state;
    const outRef = useRef(null);
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

    const exit = (e) => {
        if (e.target === outRef.current)
            goBack();
    }

    return (
        <Styled.ModalBG ref={outRef} onClick={exit}>
            <Styled.ModalContent>
                <Styled.LoginForm>
                    <Styled.Section to="/">Home</Styled.Section>
                    {isLogged && <Styled.Section to="/"> Favourites </Styled.Section>}
                </Styled.LoginForm>
            </Styled.ModalContent>
        </Styled.ModalBG>
    )
}

export default MenuModal;