import axios from "axios";
import { sum, person } from "./modules.js"
import utils from "./utils.js";

console.log(sum(2, 3))

console.log(`Name: ${person.name}`);
console.log(`Age: ${person.age}`);
console.log(`Email: ${person.email}`);

person.greet();

person.updateEmail('new.email@example.com');
console.log(`Updated Email: ${person.email}`);

console.log(`PI: ${utils.PI}`);
console.log(`E: ${utils.E}`);

const a = 10;
const b = 5;

console.log(`Add: ${utils.add(a, b)}`);
console.log(`Subtract: ${utils.subtract(a, b)}`);
console.log(`Multiply: ${utils.multiply(a, b)}`);
console.log(`Divide: ${utils.divide(a, b)}`);

const useAxios = async () => {
  const res = await axios.get("https://official-joke-api.appspot.com/random_joke");
  console.log(res.data)
}

useAxios();
