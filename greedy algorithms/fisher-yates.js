// Write a function for doing an in-place ↴ shuffle of an array.

// The shuffle must be "uniform," meaning each item in the original array must have the same probability 
// of ending up in each spot in the final array.

// Assume that you have a function getRandom(floor, ceiling) for getting a random integer that is >= floor 
// and <= ceiling.

// We choose a random item to move to the first index, 
// then we choose a random other item to move to the second index, etc. 
// We "place" an item in an index by swapping it with the item currently at that index.

// Crucially, once an item is placed at an index it can't be moved. 
// So for the first index, we choose from nn items, for the second index we choose from n-1n−1 items, etc.

function getRandom(floor, ceiling) {
    //get random function in between two numbers
    return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
  }
  
  function shuffle(array) {
  
    // If it's 1 or 0 items, just return
    if (array.length <= 1) return;
  
    // Walk through from beginning to end
    for (let indexWeAreChoosingFor = 0;
      indexWeAreChoosingFor < array.length - 1; indexWeAreChoosingFor++) {
  
      // Choose a random not-yet-placed item to place there
      // (could also be the item currently in that spot)
      // must be an item AFTER the current item, because the stuff
      // before has all already been placed
      const randomChoiceIndex = getRandom(indexWeAreChoosingFor, array.length - 1);
  
      // Place our random choice in the spot by swapping
      if (randomChoiceIndex !== indexWeAreChoosingFor) {
        const valueAtIndexWeChoseFor = array[indexWeAreChoosingFor];
        array[indexWeAreChoosingFor] = array[randomChoiceIndex];
        array[randomChoiceIndex] = valueAtIndexWeChoseFor;
      }
    }
  }