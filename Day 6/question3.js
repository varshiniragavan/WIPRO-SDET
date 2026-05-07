const rawMovies = [

  "Inception|Sci-Fi|12000",

  "The Lion King|Animation|8000",

  "Mad Max|Action|invalid",

  "The Matrix|Sci-Fi|15000",

  "Gladiator|Action|4500"

];

function processMovies(rawMovies) {

  // Step 1: Convert raw strings into objects
  const parsedMovies = rawMovies.map((movie) => {

    const [name, genre, rawViews] = movie.split("|");

    const views = Number(rawViews);

    return {
      name,
      genre,
      views: isNaN(views) ? 0 : views
    };

  });

  // Step 2: Filter Action or Sci-Fi movies with more than 5000 views
  const filteredMovies = parsedMovies.filter((movie) => {

    return (
      (movie.genre === "Action" || movie.genre === "Sci-Fi") &&
      movie.views > 5000
    );

  });

  // Step 3: Sort by views in descending order
  const sortedMovies = filteredMovies.sort((a, b) => {

    return b.views - a.views;

  });

  // Step 4: Return JSON string
  return JSON.stringify(sortedMovies, null, 2);

}

const result = processMovies(rawMovies);

console.log(result);