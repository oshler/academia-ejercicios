/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */

function _sumFibs( maxFibValue ) {
  var sum = 0;

  // do your work here
  var arrayFib = [0,1];
  var lastFib = 0;

  for(i = 0; i < maxFibValue; i++){
      lastFib = arrayFib[arrayFib.length-1] + arrayFib[arrayFib.length-2];
      arrayFib.push(lastFib);
      i = lastFib;
  }

  arrayFib.splice(-1,1);

  for(i=0;i<arrayFib.length;i++){
      if (arrayFib[i]%2 === 0){
          sum = sum + arrayFib[i];
      }
  }

  return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input
  //the code will return the highest Fibonacci Number
  //less than or equal to the 'highest' value given

  //do your work here
  var arrayFib = [0,1];
  var lastFib = 0;

  for(i = 0; i < maxFibValue; i++){
      lastFib = arrayFib[arrayFib.length-1] + arrayFib[arrayFib.length-2];
      arrayFib.push(lastFib);
      i = lastFib;
  }

  if(maxFibValue == arrayFib[arrayFib.length-1]){
      // arrayFib keeps the last value
  } else {
      arrayFib.splice(-1,1);
  }

  highest = arrayFib[arrayFib.length-1];

  return highest;
}

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};