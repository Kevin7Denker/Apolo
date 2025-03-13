import React from "react";
import {
  Input,
  Submit,
  WelcomeSubmits,
  ModalContent,
  ImagePreview,
  ImageContainer,
} from "./Styles";

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
}) => {
  return (
    <ModalContent>
      <h2>Upload Profile Picture</h2>
      {imagePreview && (
        <ImageContainer>
          <ImagePreview>
            <img
              src={imagePreview}
              alt="Profile Preview"
              style={{
                maxWidth: "100%",
                maxHeight: "300px",
                marginTop: "20px",
              }}
            />
          </ImagePreview>
        </ImageContainer>
      )}

      <Input id="file" type="file" accept="image/*" onChange={onImageChange} />

      <WelcomeSubmits>
        <Submit onClick={onBack}>Back</Submit>
        <Submit onClick={onSubmit}>Submit</Submit>
      </WelcomeSubmits>
    </ModalContent>
  );
};

export default Step6;
