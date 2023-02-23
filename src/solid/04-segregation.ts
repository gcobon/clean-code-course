/**
 * PRINCIPIO DE SEGREGACIÓN NO IMPLEMENTADO
 */

// interface Bird {
//   fly(): void;
//   eat(): void;
//   run(): void;
//   swim(): void;
// }

// class Tucan implements Bird {
//   public fly(): void {}
//   public eat(): void {}
//   public run(): void {}
//   public swim(): void {
//     throw new Error('Esta ave no nada');
//   }
// }
// class HumminBird implements Bird {
//   public fly(): void {}
//   public eat(): void {}
//   public run(): void {}
//   public swim(): void {}
// }
// class Ostrich implements Bird {
//   public fly(): void {
//     throw new Error('Esta ave no vuela');
//   }
//   public eat(): void {}
//   public run(): void {}
//   public swim(): void {
//     throw new Error('Esta ave no nada');
//   }
// }
// class Penguin implements Bird {
//   public fly(): void {
//     throw new Error('Esta ave no vuela');
//   }
//   public eat(): void {}
//   public run(): void {}
//   public swim(): void {}
// }

/**
 * IMPLEMENTANDO PRINCIPIO DE SEGREGACION DE INTERFAZ
 */

interface Bird {
  eat(): void;
}

interface FlyingBird {
  fly(): void;
}

interface RunningBird {
  run(): void;
}

interface SwimmingBird {
  swim(): void;
}

class Tucan implements Bird, FlyingBird {
  public fly(): void {}
  public eat(): void {}
}

class HumminBird implements Bird, FlyingBird {
  public fly(): void {}
  public eat(): void {}
}
class Ostrich implements Bird, RunningBird {
  public eat(): void {}
  public run(): void {}
}
class Penguin implements Bird, SwimmingBird {
  public eat(): void {}
  public swim(): void {}
}
