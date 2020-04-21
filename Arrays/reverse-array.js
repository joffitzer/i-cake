// Write a function that takes an array of characters and reverses the letters in place. 

function reverse(arrayOfChars) {

    let leftIndex = 0;
    let rightIndex = arrayOfChars.length - 1;
  
    while (leftIndex < rightIndex) {
  
      // Swap characters
      const temp = arrayOfChars[leftIndex];
      arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
      arrayOfChars[rightIndex] = temp;
  
      // Move towards middle
      leftIndex++;
      rightIndex--;
    }
  }

//Complexity
//   O(n) time and O(1) space.