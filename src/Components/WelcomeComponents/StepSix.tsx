import React from "react";
import { Input, Submit, WelcomeSubmits } from "./Styles";

interface Step6Props {
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  imagePreview: string | null;
  onBack: () => void;
  onSubmit: () => void;
}

const Step6: React.FC<Step6Props> = ({
  onImageChange,
  imagePreview,
  onBack,
  onSubmit,
}) => (
  <div>
    <h2>Upload Profile Picture</h2>
    <Input type="file" accept="image/*" onChange={onImageChange} />
    {imagePreview && (
      <div>
        <img
          src={imagePreview}
          alt="Profile Preview"
          style={{ maxWidth: "100%", maxHeight: "300px", marginTop: "20px" }}
        />
      </div>
    )}
    <WelcomeSubmits>
      <Submit onClick={onBack}>Back</Submit>
      <Submit onClick={onSubmit}>Submit</Submit>
    </WelcomeSubmits>
  </div>
);

export default Step6;
