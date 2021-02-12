function FirstReverse(str) { 
    var stringSplit = str.split('')
    var reverseIt = stringSplit.reverse();
    var final = reverseIt.join('')
      
      console.log(final);
    
    }
    FirstReverse('My stringy string');