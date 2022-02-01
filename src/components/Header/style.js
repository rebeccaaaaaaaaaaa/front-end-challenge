import styled from 'styled-components';

export const TitleHeader = styled.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    text-align: center;
    letter-spacing: -0.005em;
    color: #FFFFFF;
    padding: 60px;
    width: 77%;
    margin: auto;
    margin-top: 2rem;

    @media (max-width: 768px) {
        font-size: 18px;
        width: 97%;
        line-height: 40px;
        padding: 3rem 0;
    }
`;

export const TitleHeaderSection = styled.section`
    background-color: #2D0C5E;
`;