const button = document.getElementById('myButton');

function handleClickFirst() {
   alert('First handler: Button was clicked!');
}

function handleClickSecond() {
    alert('Second handler: Button was clicked!');
}

button.addEventListener('click', handleClickFirst);
button.addEventListener('click', handleClickSecond);