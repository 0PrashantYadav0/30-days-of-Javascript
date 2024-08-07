function saveStringToLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

function getStringFromLocalStorage(key) {
  const value = localStorage.getItem(key);
  console.log(value);
}

function saveObjectToLocalStorage(key, obj) {
  localStorage.setItem(key, JSON.stringify(obj));
}

function getObjectFromLocalStorage(key) {
  const jsonString = localStorage.getItem(key);
  const obj = JSON.parse(jsonString);
  console.log(obj);
}

function removeItemFromLocalStorage(key) {
  console.log('Before removal:', localStorage);
  localStorage.removeItem(key);
  console.log('After removal:', localStorage);
}

function saveStringToSessionStorage(key, value) {
  sessionStorage.setItem(key, value);
}

function getStringFromSessionStorage(key) {
  const value = sessionStorage.getItem(key);
  console.log(value);
}

function saveObjectToSessionStorage(key, obj) {
  sessionStorage.setItem(key, JSON.stringify(obj));
}

function getObjectFromSessionStorage(key) {
  const jsonString = sessionStorage.getItem(key);
  const obj = JSON.parse(jsonString);
  console.log(obj);
}

function removeItemFromSessionStorage(key) {
  console.log('Before removal:', sessionStorage);
  sessionStorage.removeItem(key);
  console.log('After removal:', sessionStorage);
}


function saveToBothStorages(key, value) {
  localStorage.setItem(key, value);
  sessionStorage.setItem(key, value);
}

function getFromBothStorages(key) {
  const localValue = localStorage.getItem(key);
  const sessionValue = sessionStorage.getItem(key);
  console.log('LocalStorage:', localValue);
  console.log('SessionStorage:', sessionValue);
}

function clearBothStorages() {
  localStorage.clear();
  sessionStorage.clear();
  console.log('LocalStorage and SessionStorage have been cleared.');
}

// saveStringToLocalStorage('name', 'John');
// getStringFromLocalStorage('name');
// saveObjectToLocalStorage('person', { name: 'John', age: 30 });
// getObjectFromLocalStorage('person');
// removeItemFromLocalStorage('name');
// saveStringToSessionStorage('name', 'John');
// getStringFromSessionStorage('name');
// saveObjectToSessionStorage('person', { name: 'John', age: 30 });
// getObjectFromSessionStorage('person');
// removeItemFromSessionStorage('name');
// saveToBothStorages('name', 'John');
// getFromBothStorages('name');

// clearBothStorages();

