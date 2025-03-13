interface UserInterface {
  profile: Profile;
  data: Data;
  config: Config;
  validation: Validation;
}

interface Profile {
  name: string;
  surname: string;
  email: string;
  phone: string;
  password: string;
  identity: string;
  nationality: Nationality;
  image: Image;
  lastLogin: Date;
  lastUpdate: Date;
  dateCriation: Date;
}

interface Data {
  genres: string[];
}

interface Config {
  theme: string;
  language: string;
}

interface Validation {
  email: boolean;
  phone: boolean;
}

interface Nationality {
  country: string;
  code: string;
}

interface Image {
  type: Buffer;
  default: "";
  required: false;
}

export default UserInterface;
