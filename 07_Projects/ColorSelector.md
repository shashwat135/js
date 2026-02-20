## project 1

```javascript
const button = document.querySelectorAll('.button');
console.log(button);
const body = document.querySelectorAll('body');
button.forEach((button) => {
  console.log(button);
  button.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body[0].style.backgroundColor= e.target.id;
    }
    if (e.target.id === 'white') {
      body[0].style.backgroundColor= e.target.id;
    }
    if (e.target.id === 'blue') {
      body[0].style.backgroundColor= e.target.id;
    }
    if (e.target.id === 'yellow') {
      body[0].style.backgroundColor= e.target.id;
    }
  });
});
```