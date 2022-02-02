import styled from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";

export const DropdownArea = styled(Dropdown)`
  button {
    background-color: #5c16c5;

    &:hover {
      background-color: #9350f9;
      color: #fff;
    }

    &:focus {
      background-color: #9350f9;
    }
  }

  button[aria-expanded="true"] {
    background-color: #9350f9 !important;
  }
`;

export const FilterArea = styled.section`
    background-color: #2D0C5E;
    color: #FFFFFF;
    padding: 25px;
    position: relative;
    top: -8px;
    height: 190px;

    @media (max-width: 768px) {
        
    }
}
`;

export const FilterSectionTitle = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  text-align: center;
  margin-right: 1rem;
  margin-top : 1rem;
`;

export const FilterSectionFilters = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
