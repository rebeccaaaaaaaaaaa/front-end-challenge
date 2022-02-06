import styled from "styled-components";

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

export const Dropdown = styled.select`

  height: 40px;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #5c16c5;
  background-color: #5c16c5;
  color: #fff;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  text-transform: uppercase;

  option {
    text-transform: uppercase;
  }
`;
