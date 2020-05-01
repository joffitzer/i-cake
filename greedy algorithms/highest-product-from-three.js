// Given an array of integers, find the highest product you can get from three of the integers.

// The input arrayOfInts will always have at least three integers.


// We use a greedy ↴ approach to solve the problem in one pass. At each iteration we keep track of:

// highestProductOf3
// highestProductOf2
// highest
// lowestProductOf2
// lowest
// When we reach the end, the highestProductOf3 is our answer. 
// We maintain the others because they're necessary for keeping the highestProductOf3 up to date as we walk 
// through the array. At each iteration, the highestProductOf3 is the highest of:

// the current highestProductOf3
// current * highestProductOf2
// current * lowestProductOf2 (if current and lowestProductOf2 are both low negative numbers, 
//     this product is a high positive number).

function highestProductOf3(arrayOfIntegers) {
    if (arrayOfIntegers.length < 3) {
      throw new Error('Less than 3 items!');
    }
  
    // We're going to start at the 3rd item (at index 2)
    // So pre-populate highests and lowests based on the first 2 items
    // We could also start these as null and check below if they're set
    // but this is arguably cleaner
    let highest = Math.max(arrayOfIntegers[0], arrayOfIntegers[1]);
    let lowest  = Math.min(arrayOfIntegers[0], arrayOfIntegers[1]);
  
    let highestProductOf2 = arrayOfIntegers[0] * arrayOfIntegers[1];
    let lowestProductOf2  = arrayOfIntegers[0] * arrayOfIntegers[1];
  
    // Except this one--we pre-populate it for the first *3* items
    // This means in our first pass it'll check against itself, which is fine
    let highestProductOf3 = arrayOfIntegers[0] * arrayOfIntegers[1] * arrayOfIntegers[2];
  
    // Walk through items, starting at index 2
    for (let i = 2; i < arrayOfIntegers.length; i++) {
      const current = arrayOfIntegers[i];
  
      // Do we have a new highest product of 3?
      // It's either the current highest
      // or the current times the highest product of two
      // or the current times the lowest product of two
      highestProductOf3 = Math.max(
        highestProductOf3,
        current * highestProductOf2,
        current * lowestProductOf2
      );
  
      // Do we have a new highest product of two?
      highestProductOf2 = Math.max(
        highestProductOf2,
        current * highest,
        current * lowest
      );
  
      // Do we have a new lowest product of two?
      lowestProductOf2 = Math.min(
        lowestProductOf2,
        current * highest,
        current * lowest
      );
  
      // Do we have a new highest?
      highest = Math.max(highest, current);
  
      // Do we have a new lowest?
      lowest = Math.min(lowest, current);
    }
  
    return highestProductOf3;
  }