import React from "react";
import {
  InputContent,
  InputContainer,
  Input,
  Label,
  Submit,
  WelcomeSubmits,
} from "./Styles";

interface Step3Props {
  identity: string;
  onIdentityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onNext: () => void;
  onBack: () => void;
}

const Step3: React.FC<Step3Props> = ({
  identity,
  onIdentityChange,
  onNext,
  onBack,
}) => (
  <div>
    <h2>Select your ID</h2>
    <InputContent>
      <InputContainer>
        <Input
          type="text"
          placeholder="Name"
          required
          value={identity}
          onChange={onIdentityChange}
        />
        <Label>@example</Label>
      </InputContainer>
    </InputContent>
    <WelcomeSubmits>
      <Submit onClick={onBack}>Back</Submit>
      <Submit onClick={onNext} disabled={!identity}>
        Next
      </Submit>
    </WelcomeSubmits>
  </div>
);

export default Step3;
