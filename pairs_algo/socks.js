/* Alex works at a clothing store. There is a large pile of socks that must be paired by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are. */

const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20, 30];

const findDuplicates = (arr) => {
  const duplicates = [];
  const compare = [];
  const totalArr = []

  for(let num of arr){
    if(!compare.includes(num)){
      compare.push(num)
    }else{
      duplicates.push(num)
    }
  }

  for(var n = 0; n < compare.length; n++){
    function pairTotal(duplicates, color){
    var count = 0;
    for(var i = 0; i < duplicates.length; i++){
      if(duplicates[i] === color){
        count++
      }
    }
  
    if(Math.ceil(count / 2) !== 0){
      totalArr.push(Math.ceil(count / 2))
    }
    // console.log('total arr is: ', totalArr)
    console.log(`the number of sales for ${color} will be `, Math.ceil(count / 2));
  }  
  pairTotal(duplicates, compare[n]);
  }

  

  var sum = totalArr.reduce(function(a, b){
            return a + b;
        }, 0);
  return 'total number of matches: ' + sum
  // console.log(duplicates, compare)
};

findDuplicates(arr)
