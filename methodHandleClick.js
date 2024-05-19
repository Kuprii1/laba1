function handleClick(event) {
    alert(`Ви натиснули на кнопку: ${event.currentTarget.innerText}`);
  }
  
  const buttonElement = document.getElementById("button");
  buttonElement.addEventListener("click", handleClick);