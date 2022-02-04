import styled from 'styled-components';

export const PainelArea = styled.section`
    padding: 20px 0;
    h5{
        font-size: 1rem;
    }
`;

export const MovieCard = styled.div`
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover{
        opacity: 0.8;
    }

    span{
        width: 40px;
        height: 40px;
        border-radius: 40px;
        background: linear-gradient(to top right, #5c16c5, #2d0c5e);
        color: #fff;
        font-size: 12px;
        line-height: 40px;
        position: absolute;
        text-align: center;
        right: -15px;
        top: 0;

      
    }
`;