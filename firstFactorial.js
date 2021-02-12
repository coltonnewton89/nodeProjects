/*Have the function FirstFactorial(num) take the num parameter
 being passed and return the factorial of it. For example: if 
 num = 4, then your program should return (4 * 3 * 2 * 1) = 24. 
 For the test cases, the range will be between 1 and 18 and the 
 input will always be an integer. */

function FirstFactorial(num) { 
     var Arr = [];
     var total = 1; 
    
    //push every number from one to num into Arr
     for(i = 1; i <= num; i++){
       Arr.push(i);
     }
    
    //turn total into Arr[j] times the next Arr[j]
     for(var j = 0; j < Arr.length; j++){
       total *= Arr[j];
     }
     console.log('arr is euqal too: ' + Arr)
     //now turn num into total
     num = total
      return num; 
    
    }
       
    // keep this function call here 
    console.log(FirstFactorial(8));