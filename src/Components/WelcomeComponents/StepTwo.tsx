import React from "react";
import { countries } from "../../Utils/Data/Countries";
import { ListStyle, Submit, ModalContent } from "./Styles";

interface Step2Props {
  selectedItem: string | null;
  onSelect: (item: string) => void;
  onNext: () => void;
}

const Step2: React.FC<Step2Props> = ({ selectedItem, onSelect, onNext }) => (
  <ModalContent>
    <h2>Select a Country</h2>
    <ListStyle>
      <ul>
        {countries.map((country) => (
          <li
            key={country.code}
            onClick={() => onSelect(country.name)}
            className={selectedItem === country.name ? "selected" : ""}
          >
            {country.name}
          </li>
        ))}
      </ul>
    </ListStyle>
    <Submit onClick={onNext} disabled={!selectedItem}>
      Next
    </Submit>
  </ModalContent>
);

export default Step2;
