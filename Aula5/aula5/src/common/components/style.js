import styled from 'styled-components';

export const Button = styled.button`
    height: 40px;
    width: 110px; 
    background: ${props => {
        let color = "";

        switch(props.type) {
            case 'sucess':
                color = '#03fc4e';
                break;
            case 'warning':
                color = '#fccf03';
                break;
            case 'error':
                color = '#a32d18';
                break;
            default:
                color = '#fff';
        }

        return color;
    }}; 
    color: #000; 
    cursor: pointer;
    border-radius: 5px;
`;

export const Input = styled.input`
    padding: 10px 15px;
    border: none;
    width: 100%;
    outline: none;
    color: #fff;
    background: ${props => {
        let color = '';

        props.state === 'error' ? color = '#a32d18' : color = '#000';

        return color;
    }};
`;