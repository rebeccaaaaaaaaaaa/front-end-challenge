import styled from 'styled-components';
import { FaSearch } from "react-icons/fa";


export const IconButton = styled(FaSearch)`
    cursor: pointer;
`;

export const SearchArea = styled.section`
    padding: 20px 0;
    background: #5c16c5;
    margin-top: -10px;

    &:focus {
        outline: none;
        
    }
`;