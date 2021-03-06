import styled from 'styled-components';

export const SectionArea = styled.section`
    background: #5c16c5;
    height: 500px;
    margin-top: -10px;
    color: #fff;

    @media (max-width: 768px) {
        height: auto;
    }

    ul{
        list-style: none;
        padding: 0;
        
    }
`;

export const DetailsTitle = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    margin: unset;
    margin-bottom: 1rem;
`;

export const DetailsText = styled.p`
    font-size: 1.5rem;
    margin-top: 4rem;
`;

export const DetaisList = styled.ul`
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;

    
    @media (max-width: 768px) {
        display: block;
    }

    li{
        margin-right: 1rem;

    }
`;

export const DetaisAverageArea = styled.div`
`;