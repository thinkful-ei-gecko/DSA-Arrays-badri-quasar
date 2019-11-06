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

}

main();