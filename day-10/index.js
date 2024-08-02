
const para = document.querySelector('.para')
const myimg = document.querySelector('.myimg');

const button = document.querySelector('button');
button.addEventListener('click', () => {
  let data = para.innerHTML;
  data += " clicked ";
  console.log(data)
  para.innerHTML = data;
});

myimg.addEventListener('dblclick',  () => {
  myimg.style.visibility = myimg.style.visibility === 'hidden' ? 'visible' : 'hidden';
})

const div = document.querySelector("div")
div.addEventListener('mouseover', () => {
  div.style.backgroundColor = 'blue';
}
);

div.addEventListener('mouseout', () => {
  div.style.backgroundColor = 'red';
});

const input = document.querySelector('input');
input.addEventListener('keydown', (value) => {
  console.log(value.key)
})

input.addEventListener('keyup', (value) => {
  para.innerHTML += value.key
})

// document.getElementById('myForm').addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent form from submitting

//   let inputField = document.getElementById('myInput');
//   let inputValue = inputField.value;

//   console.log('Input value:', inputValue);
// });

// document.getElementById('myInput').addEventListener('keydown', function(event) {
//   console.log('Key pressed:', event.key);
// });

document.getElementById('mySelect').addEventListener('change', (event) => {
  let selectedValue = event.target.value;
  document.getElementById('selectedValue').innerText = 'Selected value: ' + selectedValue;
});

document.getElementById('myList').addEventListener('click', function(event) {
  if (event.target && event.target.nodeName === 'LI') {
    if(event.target.value === 'one')
      console.log('Clicked item text:', event.target.textContent);
  }
});


document.getElementById('addChildButton').addEventListener('click', () => {
  let newChild = document.createElement('button');
  newChild.textContent = 'I am a new child';
  newChild.className = 'child';
  document.getElementById('parentElement').appendChild(newChild);
});

document.getElementById('parentElement').addEventListener('click', (event) => {
  if (event.target && event.target.classList.contains('child')) {
    console.log('Clicked child text:', event.target.textContent);
  }
});