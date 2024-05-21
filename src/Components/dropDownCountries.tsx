import React from "react";
import styled from "styled-components";
import { countries } from "../Utils/Data/Countries";

const DropdownWrapper = styled.div`
  position: relative;
  width: 100%;
  border: none;
  outline: none;
`;

const DropdownLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  border: none;
  outline: none;
  background-color: black;
`;

const DropdownSelect = styled.select`
  width: 100%;
  padding: 1rem;
  background-color: black;
  font-size: 0.8rem;
  border: 1px solid white;
  outline: none;
  border-radius: 5px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  background: url("/path/to/arrow-down.png") no-repeat right 10px center;
  background-size: 16px; /* Ajuste conforme necessário */
  padding-right: 30px; /* Espaço para a seta */
`;

const CountryDropdown = ({
  label,
  name,
  onChange,
}: {
  label: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
  return (
    <DropdownWrapper>
      <DropdownLabel htmlFor={name}>{label}</DropdownLabel>
      <DropdownSelect id={name} name={name} onChange={onChange}>
        <option value="">{label}</option>
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </DropdownSelect>
    </DropdownWrapper>
  );
};

export default CountryDropdown;
