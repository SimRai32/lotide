

const map = (array, callback) => {
  let arr = [];
  for (const element of array) {
    arr.push(callback(element));
  }
  return arr;
}


const eqArrays = function(arrayOne, arrayTwo) {
  let check = true;
  if (arrayOne.toString().length !== arrayTwo.toString().length) {
    check = false;
  } else {
    for (let i = 0; i < arrayOne.toString().length; i++) {
      console.log(arrayOne.toString());
      if (arrayOne.toString()[i] !== arrayTwo.toString()[i]) {
        console.log("here");
        check = false;
      }
    }
    console.log(check);
    checker(arrayOne, arrayTwo, check);
    return check;
  }
};

const checker = function(arrayOne, arrayTwo, result) {
  if (!result) {
    return console.log(`Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  } else {
    return console.log(`Assertion Passed!: ${arrayOne} === ${arrayTwo}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];
const nums =[1,2,3,4,5];
const empty = [];
const results1 = map(words, word => word[0]);
const results2 = map(nums, num => num * 3);
const results3 = map(empty, emptied => emptied * 0);
console.log(results2);
eqArrays(results1[0], "g");
eqArrays(results2[3], 11);
eqArrays(results3, []);

