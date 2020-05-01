// Each round, players receive a score between 0 and 100, which you use to rank them from 
// highest to lowest. So far you're using an algorithm that sorts in O(nlgn) time, 
// but players are complaining that their rankings aren't updated fast enough. 
// You need a faster sorting algorithm.

// Write a function that takes:

// an array of unsortedScores
// the highestPossibleScore in the game
// and returns a sorted array of scores in less than O(nlgn) time.


function sortScores(unorderedScores, highestPossibleScore) {

    // Array of 0s at indices 0..highestPossibleScore
    const scoreCounts = new Array(highestPossibleScore + 1).fill(0);
  
    // Populate scoreCounts
    unorderedScores.forEach(score => {
      scoreCounts[score]++;
    });
  
    // Populate the final sorted array
    const sortedScores = [];
  
    // For each item in scoreCounts
    for (let score = highestPossibleScore; score >= 0; score--) {
      const count = scoreCounts[score];
  
      // For the number of times the item occurs
      for (let time = 0; time < count; time++) {
        sortedScores.push(score);
      }
    }
  
    return sortedScores;
  }