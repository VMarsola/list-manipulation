//runs for every item that is inside of the array
const runFor = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    return element;
  }
};

//runs the same for, but written in a simpler way, it could also run an object if you use the "in" instance intead of "of"
const runMinFor = (arr) => {
  for (el of arr) {
    return el;
  }
};

// iterate through every item, like a for but returns a list
const runMap = (arr) => {
  arr.map((e) => {
    return e;
  });
};

//merge 2 arrays
const concatArr = (arr1, arr2) => arr1.concat(arr2);

//push an item to the last position
const pushItem = (arr) => {
  arr.push("d");
  console.log(arr);
};

//remove the last item
const doPop = (arr) => {
  arr.pop();
  console.log(arr);
};

//remove from the 3rd item to the end
const spliceDelete = (arr) => arr.splice(3, Number.MAX_VALUE);

//works similarly as splice, but modifies the original array
// it can also recive a start and a ending pointo
const slice = (arr) => arr.slice(2);

// turn a array into a concated string
const join = (arr) => arr.join();
const joinWithNoVirgula = (arr) => arr.join("");
const joinWithNoSomething = (arr) => arr.join("-");

//every is able to recive a validation and return  true or false
const isMinorTwentie = (cur) => cur < 20;
const every = (arr) => arr.every(isMinorTwentie);

// same as every but return the corresponding values to your validation
const filtered = (arr) => arr.filter((e) => e.length > 4);

//find the index of the item that you are looking for (item, fromIndex)
// case it doesnt find, returns -1
const findIndex = (arr) => arr.indexOf("dog");

//iterate through every item, but is able to get the past item also
const reduce = (arr) =>
  arr.reduce((prev, cur) => {
    console.log(prev, cur);
  }, 0);

//finds the element to the given index
const atExample = (arr) => arr.at(2);

//return a list of elements that pass the validation
const find = (arr) => arr.find((e, i) => e > 89);

// checks whether an element is even
const even = (element) => element % 2 === 0;
