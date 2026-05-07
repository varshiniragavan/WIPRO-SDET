const rawMovies = [

  "Inception|Sci-Fi|12000",

  "The Lion King|Animation|7000",

  "Mad Max|Action|invalid",

  "The Matrix|Sci-Fi|15000",

  "Gladiator|Action|4500"

];

function processMovies(rawMovies) {

  const parsedMovies = rawMovies.map((movie) => {

    const [name, genre, rawViews] = movie.split("|");

    const views = Number(rawViews);

    return {
      name,
      genre,
      views: isNaN(views) ? 0 : views
    };

  });

  const filteredMovies = parsedMovies.filter((movie) => {

    return (
      (movie.genre === "Action" || movie.genre === "Sci-Fi") &&
      movie.views > 5000
    );

  });

  const sortedMovies = filteredMovies.sort((a, b) => {

    return b.views - a.views;

  });

  return JSON.stringify(sortedMovies, null, 2);

}

const result = processMovies(rawMovies);

console.log(result);