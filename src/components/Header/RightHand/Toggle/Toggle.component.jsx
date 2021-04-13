import React from 'react';
import {CheckBoxWrapper, CheckBoxLabel, CheckBox} from '../../styled';

const Toggle = () => {
    return (
        <>
            <CheckBoxWrapper>
                <CheckBox id="checkbox" type="checkbox" />
                <CheckBoxLabel htmlFor="checkbox" />
            </CheckBoxWrapper>
        </>
    );
}

export default Toggle;