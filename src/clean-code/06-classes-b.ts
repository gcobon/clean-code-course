(() => {
  type Gender = 'M' | 'F';

  interface PersonProps {
    name: string;
    gender: Gender;
    birthDate: Date;
  }

  // No aplicando el principio de responsabilidad única

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
    name: string;
    gender: Gender;
    birthDate: Date;
  }

  class User extends Person {
    public email: string;
    public role: string;
    public lastAccess: Date;

    constructor({ email, role, name, gender, birthDate }: UserProps) {
      super({ name, gender, birthDate });
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
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

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenDirectory: string;

    constructor({
      workingDirectory,
      lastOpenDirectory,
      email,
      role,
      name,
      gender,
      birthDate,
    }: UserSettingsProps) {
      super({ email, role, name, gender, birthDate });
      this.workingDirectory = workingDirectory;
      this.lastOpenDirectory = lastOpenDirectory;
    }
  }

  const userSettings = new UserSettings({
    workingDirectory: '/user/home',
    lastOpenDirectory: '/home/cursos',
    email: 'gudielcobon@gmail.com',
    role: 'admin',
    name: 'gudiel',
    gender: 'M',
    birthDate: new Date('1990-10-28'),
  });

  console.log({ userSettings });
})();
