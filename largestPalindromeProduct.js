/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  // do your work here
  var numConcat=[];

  for(i=0; i<digits; i++){
      numConcat.push(9);
  }                                           //create an array with the amount of 9s

  var maxNum = numConcat.join("");            //number ex: 2:99, 3:999, 4:9999 *// 
  window.alert(maxNum);

  for(j=maxNum; j>0; j--){

      for(k=maxNum; k>=j; k--){
          //mutiply factor1 * factor*2
          palReview = j * k;

          //pass number to string
          palOrd = palReview.toString();

          //reverse the string
          palRev = palOrd;
          palRev = palRev.split("");
          palRev = palRev.reverse("");
          palRev = palRev.join("");
          
          //Evaluate the string and the reverse string
          if(palOrd == palRev){
              factor_0 = j;
              factor_1 = k;
              palindromeNumber = palOrd;
              j = 0;
              k = 0;
          }
      }
  }

  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};