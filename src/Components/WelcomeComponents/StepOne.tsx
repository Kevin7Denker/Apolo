import React from "react";
import { Title, Subtitle, Submit, Text } from "./Styles";

interface Step1Props {
  onNext: () => void;
}

const Step1: React.FC<Step1Props> = ({ onNext }) => (
  <div>
    <Title>Hey👋</Title>
    <Subtitle>Welcome to Apolo!</Subtitle>
    <Text>
      Hello, my name is Kevin Denker, developer and creator of the Apolo
      platform. Thank you for participating in the open beta of Apolo. This
      project is still in the development phase, so if you encounter any bugs or
      have suggestions for improvements, please contact me. Welcome to Apolo,
      and enjoy the platform to the fullest!
    </Text>
    <Submit onClick={onNext}>Next</Submit>
  </div>
);

export default Step1;
