//iterates every item of the array
const runFor = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log("runFor:", element);
  }
};

//runs the same for, but written in a simpler way, it could also run an object if you use the "in" instance intead of "of"
const runMinFor = (arr) => {
  for (el of arr) {
    console.log("runMinFor: ", el);
  }
};

// iterate through every item, but returns a list
const runMap = (arr) => {
  arr.map((e) => {
    console.log("runMap", e);
    return e;
  });
};

//merge 2 arrays
const concatArr = (arr1, arr2) => {
  console.log("concatArr:", arr1.concat(arr2));
  return arr1.concat(arr2);
};

//push an item to the last position
const pushItem = (arr) => {
  arr.push("d");
  console.log("pushItem", arr);
};

//remove the last item
const doPop = (arr) => {
  arr.pop();
  console.log("doPop", arr);
};

//remove from the 3rd item to the end
const spliceDelete = (arr) => {
  console.log("spliceDelete>", arr.splice(3, Number.MAX_VALUE));
  arr.splice(3, Number.MAX_VALUE);
};

//works similarly as splice, but modifies the original array
// it can also recive a start and a ending pointo
const slice = (arr) => {
  console.log("slice:", arr.slice(2));
  return arr.slice(2);
};

// turn a array into a concated string
const join = (arr) => {
  console.log("join:", arr.join());
  return arr.join();
};
const joinWithNoVirgula = (arr) => {
  console.log("joinWithNoVirgula:", arr.join(""));
  return arr.join("");
};
const joinWithNoSomething = (arr) => {
  console.log("joinWithNoSomething:", arr.join("-"));
  return arr.join("-");
};

//every is able to recive a validation and return  true or false
const isMinorTwentie = (cur) => cur < 20;
const every = (arr) => {
  console.log("every: ");
  return arr.every(isMinorTwentie);
};

// same as every but return the corresponding values to your validation
const filtered = (arr) => {
  console.log(
    "filtered: ",
    arr.filter((e) => e.length > 4)
  );
  return arr.filter((e) => e.length > 4);
};

//find the index of the item that you are looking for (item, fromIndex)
// case it doesnt find, returns -1
const findIndex = (arr) => {
  console.log("findIndex: ", arr.indexOf("dog"));
  return arr.indexOf("dog");
};

//iterate through every item, but is able to get the past item also
const reduce = (arr) =>
  arr.reduce((prev, cur) => {
    console.log(prev, cur);
  }, 0);

//finds the element to the given index
const atExample = (arr) => {
  console.log(arr.at(2));
  return arr.at(2);
};

//return a list of elements that pass the validation
const find = (arr) => {
  console.log(arr.find((e, i) => e > 89));
  return arr.find((e, i) => e > 89);
};

// checks whether an element is even it returns 0 to true and 1 to false
const even = (element) => {
  console.log(element % 2 === 0);
  return element % 2 === 0;
};
