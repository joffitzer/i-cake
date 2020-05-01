// You have an array of integers, and for each index you want to find the product of every integer 
// except the integer at that index.

// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and 
// returns an array of the products.

// To find the products of all the integers except the integer at each index, 
// we'll go through our array greedily ↴ twice. First we get the products of all the integers 
// before each index, and then we go backwards to get the products of all the integers after each index.

// When we multiply all the products before and after each index, 
// we get our answer—the products of all the integers except the integer at each index!

function getProductsOfAllIntegersExceptAtIndex(intArray) {
    if (intArray.length < 2) {
      throw new Error('Getting the product of numbers at other indices requires at least 2 numbers');
    }
  
    const productsOfAllIntegersExceptAtIndex = [];
  
    // For each integer, we find the product of all the integers
    // before it, storing the total product so far each time
    let productSoFar = 1;
    for (let i = 0; i < intArray.length; i++) {
      productsOfAllIntegersExceptAtIndex[i] = productSoFar;
      productSoFar *= intArray[i];
    }
  
    // For each integer, we find the product of all the integers
    // after it. since each index in products already has the
    // product of all the integers before it, now we're storing
    // the total product of all other integers
    productSoFar = 1;
    for (let j = intArray.length - 1; j >= 0; j--) {
      productsOfAllIntegersExceptAtIndex[j] *= productSoFar;
      productSoFar *= intArray[j];
    }
  
    return productsOfAllIntegersExceptAtIndex;
  }