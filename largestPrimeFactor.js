exports.largestPrimeFactor = function(n){
  var primeNumber = 0;
  // do your work here
  var arrayPrime =[1, 2, 3];
  var largo;
  
  for (i=4; i<=n; i ++){
    if(i%2 == 0){
      isPrime = false
    } else {
      largo = arrayPrime.length-1;
      for(j=1; j<=largo; j++){
        if(i%arrayPrime[j] == 0){
          isPrime = false;
          j = largo+1;
        } else {
          isPrime = true;
        }
      }
      if(isPrime == true){arrayPrime.push(i)}
    }
  }
  
  largo = arrayPrime.length-1;
  for(k=0; k<=largo; k++){
    if(n%arrayPrime[k] == 0){
      primeNumber = arrayPrime[k];
    }
  }

  return primeNumber;
};