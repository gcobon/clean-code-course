(() => {
  type Gender = 'M' | 'F';

  interface PersonProps {
    name: string;
    gender: Gender;
    birthDate: Date;
  }

  // Aplicando el principio de responsabilidad única
  // Priorizar la composición frente a la herencia

  class Person {
    public name: string;
    public gender: string;
    public birthDate: Date;

    constructor({ name, gender, birthDate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthDate = birthDate;
    }
  }

  interface UserProps {
    email: string;
    role: string;
  }

  class User {
    public email: string;
    public role: string;
    public lastAccess: Date;

    constructor({ email, role }: UserProps) {
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  interface settingsProps {
    workingDirectory: string;
    lastOpenDirectory: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenDirectory: string;

    constructor({ workingDirectory, lastOpenDirectory }: settingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenDirectory = lastOpenDirectory;
    }
  }

  interface UserSettingsProps {
    workingDirectory: string;
    lastOpenDirectory: string;
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthDate: Date;
  }

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      workingDirectory,
      lastOpenDirectory,
      email,
      role,
      name,
      gender,
      birthDate,
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthDate });
      this.user = new User({ email, role });
      this.settings = new Settings({ lastOpenDirectory, workingDirectory });
    }
  }

  const userSettings = new UserSettings({
    name: 'Gudiel',
    gender: 'M',
    birthDate: new Date('1990-10-28'),
    role: 'admin',
    email: 'gudielcobon@gmail.com',
    lastOpenDirectory: '/home/cursos',
    workingDirectory: '/user/home',
  });

  console.log({ userSettings });
})();
