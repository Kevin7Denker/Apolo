import React from "react";
import { welcomeGenres } from "../../Utils/Data/Genres";
import {
  ScrollableContainer,
  CardContainer,
  Card,
  Submit,
  WelcomeSubmits,
} from "./Styles";

interface Step4Props {
  selectedGenres: string[];
  onGenreSelect: (genre: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const Step4: React.FC<Step4Props> = ({
  selectedGenres,
  onGenreSelect,
  onNext,
  onBack,
}) => (
  <div>
    <h2>Explore Genres</h2>
    <ScrollableContainer>
      <CardContainer>
        {welcomeGenres.map((genre, index) => (
          <Card
            key={index}
            onClick={() => onGenreSelect(genre)}
            className={selectedGenres.includes(genre) ? "selected" : ""}
          >
            {genre}
          </Card>
        ))}
      </CardContainer>
    </ScrollableContainer>
    <div>
      <WelcomeSubmits>
        <Submit onClick={onBack}>Back</Submit>
        <Submit onClick={onNext} disabled={selectedGenres.length < 3}>
          Next
        </Submit>
      </WelcomeSubmits>
    </div>
  </div>
);

export default Step4;
