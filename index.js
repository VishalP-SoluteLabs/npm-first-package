function findAllMissingNumbers(arr) {

    let lastElem = arr[arr.length-1];
    let missingNumbers = [];
    let i = 0,j=0;
    while (i < lastElem) {
      if (arr[j] !== i + 1) {
        missingNumbers.push(i + 1);      
      }
      
      else{
       j++;
      }
      i++
    }
    console.log(missingNumbers)
  }
  
//   let arr = [1, 2, 3, 4, 6, 7, 10, 11];
  
//   console.log(findAllMissingNumbers(arr));

module.exports = findAllMissingNumbers;