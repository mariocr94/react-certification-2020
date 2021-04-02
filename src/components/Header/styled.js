import styled from 'styled-components';

export const HeaderBox = styled.div`
    position: sticky;
    display: flex;
    margin: 0px;
    background-color: purple;
    flex-direction: row;
`;

export const MenuBox = styled.div `
    align-self: center;
    border-radius: 50%;
    height: 2em;
    width: 2em;
    margin: 10px;
    background-color: purple;
    :hover{
        background-color: lightgrey;
        cursor: pointer;
    }
`;

export const MiniBox = styled.div`
    background-color: white;
    align-self: center;
    margin: 0 auto;
    margin-top: ${props => props.space};
    height: 2px;
    width: 1em;
    
`;

export const SearchBox = styled.div`
    background-color:lightgrey;
    align-self: center;
    margin-left: 1em;
    margin-right: 1em;
    height: 2em;
    border: none;
    flex-direction: row;
    border-radius: 0.5em;
`;

export const Input = styled.input `
    border: none;
    margin-top: 0.5em;
    background-color: lightgrey;
    font-size: 0.9em;
    outline: none;
    .focus{
        color: purple;
    }
`;

export const Container = styled.div`
    position:absolute;
    align-self: center;
    display: flex;
    float: right;
    right: 0px;
    margin: 10px;
`;

export const CheckBoxWrapper = styled.div`
    position: relative;
    top: 0.4em;
`;

export const CheckBoxLabel = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    width: 42px;
    height: 26px;
    border-radius: 15px;
    background: lightgrey;
    cursor: pointer;
    &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        margin: 3px;
        background: purple;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
        transition: 0.2s;
    }
`;

export const CheckBox = styled.input`
    opacity: 0;
    z-index: 1;
    border-radius: 15px;
    width: 42px;
    height: 26px;
    &:checked + ${CheckBoxLabel} {
        background: #c90297;
        &::after {
            content: "";
            display: block;
            border-radius: 50%;
            width: 18px;
            height: 18px;
            margin-left: 21px;
            transition: 0.2s;
        }
    }
`;

export const Icon = styled.div `
    border-radius: 50%;
    height: 2em;
    width: 2em;
    margin: 10% 10%;
    background-color: lightgrey;
    cursor:pointer;
`;

export const Head = styled.div`
    position:   relative;
    border-radius: 50%;
    width: 0.7em;
    height: 0.7em;
    margin: auto;
    top: 10%;
    background-color: purple;
`;

export const Body = styled.div`
    border-radius: 50%;
    width: 1.1em;
    height: 0.55em;
    margin: auto;
    margin-top: 20%;
    background-color: purple;
`;