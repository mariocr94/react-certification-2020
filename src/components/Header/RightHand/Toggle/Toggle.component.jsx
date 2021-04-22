import React from 'react';
import { CheckBoxWrapper, CheckBoxLabel, CheckBox } from '../../styled';
import { useAppContext } from '../../../../context/AppProvider';

const Toggle = () => {
  const { dispatch } = useAppContext();

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };
  return (
    <CheckBoxWrapper>
      <CheckBox id="checkbox" type="checkbox" onClick={toggleTheme} />
      <CheckBoxLabel htmlFor="checkbox" />
    </CheckBoxWrapper>
  );
};

export default Toggle;
