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
      <CheckBox
        id="checkbox"
        type="checkbox"
        data-testid="Toggle"
        onClick={toggleTheme}
      />
      <CheckBoxLabel htmlFor="checkbox" data-testid="toggleLabel" />
    </CheckBoxWrapper>
  );
};

export default Toggle;
