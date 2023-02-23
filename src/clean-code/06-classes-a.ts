(() => {
  type Gender = 'M' | 'F';

  // No aplicando el principio de responsabilidad única

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthDate: Date
    ) {}
  }

  class User extends Person {
    private lastAccess: Date;

    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthDate: Date
    ) {
      super(name, gender, birthDate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenDirectory: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthDate: Date
    ) {
      super(email, role, name, gender, birthDate);
    }
  }

  const userSettings = new UserSettings(
    '/user/home',
    '/home/cursos',
    'gudielcobon@gmail.com',
    'admin',
    'gudiel',
    'M',
    new Date('1990-10-28')
  );

  console.log({ userSettings });
})();
