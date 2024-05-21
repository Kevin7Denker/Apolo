import React from "react";
import styled from "styled-components";
import { countries } from "../Utils/Data/Countries";

const DropdownWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const DropdownLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  border: none;
  outline: none;
  width: 100%;
  background-color: black;
`;

const DropdownSelect = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  padding: 10px;
  border: 1px solid white;
  background-color: black;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSI2IiB2aWV3Qm94PSIwIDAgMTAgNiI+PHBvbHlnb24gcG9pbnRzPSIwLDAgNSw2IDEwLDAiIHN0eWxlPSJmaWxsOiM2NjY7IiAvPjwvc3ZnPg==");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 10px;
  border-radius: 4px;
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
        <option className="option" value="">
          {label}
        </option>
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
