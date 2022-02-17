import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    width: 80%;
    margin: auto;

`;

export const Title = styled.h2`
    font-size: 35px;
    color: #ff0000;
    max-width: 900px
    line-height: 56px
`;

export const Form = styled.form`
    margin-top: 40px;
    max-width: 700px;
    display: flex;

    input{
        flex: 1;
        height: 35px;
        padding: 0 24px;
        border: none;
        border-radius: 8px 0px 0px 8px;
        color: #3a3a3a;
    }

    button{
        width: 110px;
        height: 35px;
        background: #ff0000;
        border-radius: 0 5px 5px 0;
        border: none;
        color: #fff;
        font-weight: bold;

        &:placeholder{
            color: a8a8b3;
        }
        
        transition: background-color 0.2s;

      
    }
        
`;
export const Cards = styled.div`

`;