import styled from 'styled-components';
 
export const DivButton = styled.div`
    display: flex;
    align-items: center;
    border: solid 1px rgb(176, 175, 175);
    width: 48%;
    height: 40px;
    justify-content: center;
    border-radius: 08px;
    cursor: pointer;

    &:hover{
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

export const ButtonWithIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
`