
/*Have the function FindIntersection(strArr) read the array 
of strings stored in strArr which will contain 2 elements: 
the first element will represent a list of comma-separated 
numbers sorted in ascending order, the second element will 
represent a second list of comma-separated numbers 
(also sorted). Your goal is to return a comma-separated 
string containing the numbers that occur in elements of 
strArr in sorted order. If there is no intersection, return 
the string false.*/

function FindIntersection(strArr) { 
    //seperate Strings
    var strOne = strArr[0];
    var strTwo = strArr[1];
    
    //convert to individual numbers
    var splitOne = strOne.split(', ');
    var splitTwo = strTwo.split(', ')
    
    var arrOne=[];
    
    //cycle through each individaul for splitOne
     for(var i = 0; i < splitOne.length;i++){
    //cycle through each individual for splitTwo
       for(var j = 0; j < splitTwo.length;j++){
    //if index equivalent matches, convert to number and push to arrOne
         if(splitOne[i] == splitTwo[j]){
      arrOne.push(parseInt(splitOne[i]))
          }
    
       }
     }
    
    console.log("arrOne is equal to: " + arrOne.toString())
    //convert arrOne into string
    strArr = arrOne.toString();
      return strArr; 
    //if(strArr != ‘’){return strArr}else{strArr = ‘false’; return strArr}
    
    }
       
    // keep this function call here 
    console.log(FindIntersection(['1, 2, 4, 8, 13', '1, 3, 4, 9, 13']));