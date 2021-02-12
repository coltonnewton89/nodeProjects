/*Have the function LongestWord(sen) take the sen 
parameter being passed and return the largest word 
in the string. If there are two or more words that 
are the same length, return the first word from the 
string with that length. Ignore punctuation and 
assume sen will not be empty. */


function LongestWord(sen) { 
      var Arr = [];
      var current = 0;
      var longest = null;
    //push individual words to Arr
      Arr.push(sen.split(' '))
    
    //Cycle through Arr
      for(var i = 0; i < Arr[0].length; i++){
    
    //Cycle through each individual letter of each word
        for(var j = 0; j < Arr[0][i].length; j++){
    // if that total number is greatest, change current to that number
          if(j > current){
            current = j;
          }
        }
    
    //if length of word matches that high number, return that word
        if(Arr[0][i].length == current+1){
          longest = Arr[0][i]
        }
      }
    
      console.log("Longest word is: " + longest + ", which is " + current + " characters long.")
    }
       
    // keep this function call here 
    console.log(LongestWord('Hello my universe'));