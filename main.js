/* eslint-disable strict */

// 5. urlify a string
function URLify(string) {
  let newStringArray = [];
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      newStringArray[i] = string[i];
    } else {
      newStringArray[i] = '%20';
    }
  }

  for (let i = 0; i < newStringArray.length; i++) {
    newString += newStringArray[i];
  }
  return newString;
}

// 6. filter an array
function lessThanFive(numbers) {
  let newNumArray = [];
  let emptycounter = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 5) {
      newNumArray[i - emptycounter] = numbers[i];
    } else {
      emptycounter++;
    }
  }
  return newNumArray;
}

// 7. Max sum in the arry
function maxSum(sequence) {
  if(!sequence.length){
    throw new Error('must enter a valid array of nums')
  }
  let currentMax = sequence[0]
  let sum
  for (let i = 0; i < sequence.length; i++) {
    sum = sequence[i]
    for (let j = i + 1; j < sequence.length; j++) {
      sum += sequence[j]
      if (sum >= currentMax) {
        currentMax = sum
      }
    }
  }
  return currentMax;
}

// 8. Merge arrays
function mergeSort(arr1, arr2) {
  let mergedArr = [];
  let index1 = 0;
  let index2 = 0;
  let current = 0;

  while (current < (arr1.length + arr2.length)) {
    let isArr1Depleted = index1 >= arr1.length;
    let isArr2Depleted = index2 >= arr2.length;

    if (!isArr1Depleted && (isArr2Depleted || (arr1[index1] < arr2[index2]))) {
      mergedArr[current] = arr1[index1];
      index1++;
    }
    else {
        mergedArr[current] = arr2[index2];
        index2++;
      }
    current++
    }
    return mergedArr;
  }
  



function main() {
  // 5.
  /* console.log(URLify('tauhida parveen'));
  console.log(URLify('www.thinkful.com /tauh ida parv een'));
 */

  // 6. 
  /*  const numArray = [1, 2, 3, 5, 7, 8, 4, 3, 5, 6, 2, 3];
   const numArray2 = [1, 2, 3, 4, 5, 6, 7, 3, 2, 3, 8, 9, 1, 3];
   console.log(lessThanFive(numArray2));
  */

  // 7.
  // const sequence = [-3, -5, 15, -4, -6, -10]
  // console.log(maxSum(sequence))

  // 8.
  // const arr1 = [1, 3, 6, 8, 11]
  // const arr2 = [2, 3, 5, 8, 9, 10]
  // console.log(mergeSort(arr1, arr2))
  
}

main();