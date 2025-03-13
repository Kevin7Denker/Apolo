import UserInterface from "../Interfaces/User.interface";

class User {
  private profile: UserInterface["profile"];
  private data: UserInterface["data"];
  private config: UserInterface["config"];
  private validation: UserInterface["validation"];

  constructor(
    profile: UserInterface["profile"],
    data: UserInterface["data"],
    config: UserInterface["config"],
    validation: UserInterface["validation"]
  ) {
    this.profile = profile;
    this.data = data;
    this.config = config;
    this.validation = validation;
  }

  public getProfile(): UserInterface["profile"] {
    return this.profile;
  }

  public setProfile(profile: UserInterface["profile"]): void {
    this.profile = profile;
  }

  public getData(): UserInterface["data"] {
    return this.data;
  }

  public setData(data: UserInterface["data"]): void {
    this.data = data;
  }

  public getConfig(): UserInterface["config"] {
    return this.config;
  }

  public setConfig(config: UserInterface["config"]): void {
    this.config = config;
  }

  public getValidation(): UserInterface["validation"] {
    return this.validation;
  }

  public setValidation(validation: UserInterface["validation"]): void {
    this.validation = validation;
  }

  public getNationality(): UserInterface["profile"]["nationality"] {
    return this.profile.nationality;
  }

  public setNationality(
    nationality: UserInterface["profile"]["nationality"]
  ): void {
    this.profile.nationality = nationality;
  }

  public getImage(): UserInterface["profile"]["image"] {
    return this.profile.image;
  }

  public setImage(image: UserInterface["profile"]["image"]): void {
    this.profile.image = image;
  }

  public getGenres(): UserInterface["data"]["genres"] {
    return this.data.genres;
  }

  public setGenres(genres: UserInterface["data"]["genres"]): void {
    this.data.genres = genres;
  }

  public getTheme(): UserInterface["config"]["theme"] {
    return this.config.theme;
  }

  public setTheme(theme: UserInterface["config"]["theme"]): void {
    this.config.theme = theme;
  }

  public getLanguage(): UserInterface["config"]["language"] {
    return this.config.language;
  }

  public setLanguage(language: UserInterface["config"]["language"]): void {
    this.config.language = language;
  }

  public getEmailValidation(): UserInterface["validation"]["email"] {
    return this.validation.email;
  }

  public setEmailValidation(email: UserInterface["validation"]["email"]): void {
    this.validation.email = email;
  }

  public getPhoneValidation(): UserInterface["validation"]["phone"] {
    return this.validation.phone;
  }

  public setPhoneValidation(phone: UserInterface["validation"]["phone"]): void {
    this.validation.phone = phone;
  }

  public getName(): UserInterface["profile"]["name"] {
    return this.profile.name;
  }

  public setName(name: UserInterface["profile"]["name"]): void {
    this.profile.name = name;
  }

  public getSurname(): UserInterface["profile"]["surname"] {
    return this.profile.surname;
  }

  public setSurname(surname: UserInterface["profile"]["surname"]): void {
    this.profile.surname = surname;
  }

  public getEmail(): UserInterface["profile"]["email"] {
    return this.profile.email;
  }

  public setEmail(email: UserInterface["profile"]["email"]): void {
    this.profile.email = email;
  }

  public getPhone(): UserInterface["profile"]["phone"] {
    return this.profile.phone;
  }

  public setPhone(phone: UserInterface["profile"]["phone"]): void {
    this.profile.phone = phone;
  }

  public getPassword(): UserInterface["profile"]["password"] {
    return this.profile.password;
  }

  public setPassword(password: UserInterface["profile"]["password"]): void {
    this.profile.password = password;
  }

  public getIdentity(): UserInterface["profile"]["identity"] {
    return this.profile.identity;
  }

  public setIdentity(identity: UserInterface["profile"]["identity"]): void {
    this.profile.identity = identity;
  }

  public getLastLogin(): UserInterface["profile"]["lastLogin"] {
    return this.profile.lastLogin;
  }

  public setLastLogin(lastLogin: UserInterface["profile"]["lastLogin"]): void {
    this.profile.lastLogin = lastLogin;
  }

  public getLastUpdate(): UserInterface["profile"]["lastUpdate"] {
    return this.profile.lastUpdate;
  }

  public setLastUpdate(
    lastUpdate: UserInterface["profile"]["lastUpdate"]
  ): void {
    this.profile.lastUpdate = lastUpdate;
  }

  public getDateCriation(): UserInterface["profile"]["dateCriation"] {
    return this.profile.dateCriation;
  }

  public setDateCriation(
    dateCriation: UserInterface["profile"]["dateCriation"]
  ): void {
    this.profile.dateCriation = dateCriation;
  }
}

export default User;
