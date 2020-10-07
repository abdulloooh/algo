const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

/**
 * GET
 * All movies in 2018 with rating >4
 * Sort them by their rating
 * In Descending order
 * Pick their title and return it
 * Expected answer
 * ["b","a"]
 */

function movieExercise(movies) {
  return movies
    .filter((movie) => movie.year === 2018 && movie.rating > 4)
    .sort((a, b) => b.rating - a.rating)
    .map((movie) => movie.title);
}

console.log(movieExercise(movies));
