
const content = document.querySelector('.content');
content.innerHTML = "Hello World!";

const colordiv = document.querySelector('.classwithcolor');
  
colordiv.style.width = '500px';
colordiv.style.height = '500px';
colordiv.style.backgroundColor = 'red';
colordiv.style.color = 'white';
colordiv.style.textAlign = 'center';

const div = document.createElement('div');
div.innerHTML = "I'm a new div!";
div.style.display = 'flex';
content.appendChild(div);

const li = document.createElement('li');
li.innerHTML = "I'm a new li!";
content.appendChild(li);

const img = document.querySelector('img')
img.src = './day-09.png';

img.style.width = '500px';
img.style.height = '500px';

const button = document.querySelector('button');
button.addEventListener('click', () => {
  li.innerHTML = "I'm now changed by button!";
  colordiv.style.border = '5px solid blue';
  alert('Hello World!');
});

colordiv.addEventListener('mouseover', () => {
  colordiv.style.backgroundColor = 'blue';
}
);

colordiv.addEventListener('mouseout', () => {
  colordiv.style.backgroundColor = 'red';
}
);

