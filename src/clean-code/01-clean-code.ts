(() => {
  // Ejemplo
  // Archivos a evaluar - files to evaluate
  const filesToEvaluate = [
    { id: 1, checked: false },
    { id: 2, checked: false },
    { id: 3, checked: true },
    { id: 4, checked: false },
    { id: 5, checked: false },
    { id: 7, checked: true },
  ];

  // Archivos marcados para borrar - files to delete
  const filesToDelete = filesToEvaluate.map((file) => file.checked);

  class AbstractUser {}
  class UserMixin {}
  class UserImplementation {}
  interface IUser {}

  // Mejor
  class User {}
  interface User {}

  // Todo: Tarea

  // día de hoy - today
  const today = new Date();

  // días transcurridos - elapsed time in days
  const elapsedTimeInDays: number = 23;

  // número de archivos en un directorio - number of files in directory
  const numberOfFilesInDirectory = 33;

  // primer nombre - first name
  const firstName = 'Gudiel';

  // primer apellido - last name
  const lastName = 'Cobon';

  // días desde la última modificación - days since modification
  const daysSiceModification = 12;

  // cantidad máxima de clases por estudiante - max classes per student
  const maxClassesPerStudent = 6;
})();
