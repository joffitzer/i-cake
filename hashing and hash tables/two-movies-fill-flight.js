// Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

// When building your function:

// Assume your users will watch exactly two movies
// Don't make your users watch the same movie twice
// Optimize for runtime over memory




// We make one pass through movieLengths, treating each item as the firstMovieLength. At each iteration, we:

// See if there's a matchingSecondMovieLength we've seen already (stored in our movieLengthsSeen set) that is equal to flightLength - firstMovieLength. If there is, we short-circuit and return true.
// Keep our movieLengthsSeen set up to date by throwing in the current firstMovieLength.


function canTwoMoviesFillFlight(movieLengths, flightLength) {

  // Determine if two movie runtimes add up to the flight length
  const movieLengthsSeen = new Set();
  
  for (let i = 0; i < movieLengths.length; i++) {
    const firstMovieLength = movieLengths[i];
    
    const matchingSecondMovieLength = flightLength - firstMovieLength;
    if (movieLengthsSeen.has(matchingSecondMovieLength)) {
      return true;
    }
    
    movieLengthsSeen.add(firstMovieLength)
  }

  return false;
}