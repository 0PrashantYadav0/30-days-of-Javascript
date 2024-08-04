import lodash from "lodash"

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Splits an array into groups of the specified size.
const chunkedArr = lodash.chunk(arr, 3);
console.log('Chunked Array:', chunkedArr);

// Returns a new shuffled array.
const shuffledArr = lodash.shuffle(arr);
console.log('Shuffled Array:', shuffledArr);

// Creates an array with all falsey values removed. Removed 0, '', false
const compactArr = lodash.compact([0, 1, false, 2, '', 3]);
console.log('Compacted Array:', compactArr);

// Object Manipulation
const user = {
  name: 'John Doe',
  age: 30,
  address: {
    city: 'New York',
    state: 'NY'
  }
};

// Creates a deep clone of the value.
const clonedUser = lodash.cloneDeep(user);
clonedUser.address.city = 'Los Angeles';
console.log('Original User:', user);
console.log('Cloned User:', clonedUser);

// Creates an object composed of the picked object properties.
const userInfo = lodash.pick(user, ['name', 'age']);
console.log('Picked User Info:', userInfo);

// Merges sources into the destination object.
const mergedUser = lodash.merge({}, user, { age: 31, job: 'Developer' });
console.log('Merged User:', mergedUser);

// Function Manipulation
const greet = (name) => {
  console.log(`Hello, ${name}`);
};

// Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked.
const debouncedGreet = lodash.debounce(greet, 1000);
debouncedGreet('John'); // Will execute after 1 second

// Creates a throttled function that only invokes func at most once per every wait milliseconds.
const throttledGreet = lodash.throttle(greet, 1000);
throttledGreet('John'); // Will execute immediately and then ignore calls for 1 second

