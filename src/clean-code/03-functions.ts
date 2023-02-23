(() => {
  // función para obtener información de una película por Id
  function getMovieById(id: string) {
    console.log({ movieId: id });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getActorsByMovie(id: string) {
    console.log({ movidId: id });
  }

  // funcion para obtener el bio del actor por el id
  function getActorBiography(actorId: string) {
    console.log({ actorId });
  }

  // Crear una película
  function createMovie({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast });
  }

  // Crea un nuevo actor
  function createActor(fullName: string, birthdate: Date): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === 'fernando') return false;

    console.log('Crear actor');
    return true;
  }

  // continuación
  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }): number => {
    if (isDead) return 1500;

    if (isSeparated) return 2500;

    return isRetired ? 3000 : 4000;
  };
})();

export interface Movie {
  title: string;
  description: string;
  rating: number;
  cast: string[];
}
