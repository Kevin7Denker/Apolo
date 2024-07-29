import React from "react";
import { Submit, WelcomeSubmits, Text, Subtitle } from "./Styles";

interface Step5Props {
  selectedItem: string | null;
  identity: string;
  selectedGenres: string[];
  onBack: () => void;
  onNext: () => void;
}

const Step5: React.FC<Step5Props> = ({
  selectedItem,
  identity,
  selectedGenres,
  onBack,
  onNext,
}) => (
  <div>
    <Subtitle>Review Information</Subtitle>
    <Text>Selected Country: {selectedItem}</Text>
    <Text>Input Value: {identity}</Text>
    <Text>Selected Genres: {selectedGenres.join(", ")}</Text>
    <WelcomeSubmits>
      <Submit onClick={onBack}>Back</Submit>
      <Submit onClick={onNext}>Next</Submit>
    </WelcomeSubmits>
  </div>
);

export default Step5;
