import styled from 'styled-components';

export const PainelArea = styled.section`
    padding: 20px 0;
    h5{
        font-size: 1rem;
    }
`;

export const DetailsLink = styled.span`
    display: block;
    color: #fff;
    margin-top: 10px;
    cursor: pointer;
    background: #5c16c5;
    padding: 10px;
    border-radius: 5px; 
    transition: all .3s ease-in-out;

    &:hover{
        background: #2D0C5E;
    }
`;