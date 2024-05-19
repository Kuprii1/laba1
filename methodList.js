const list = document.getElementById('List');

list.addEventListener('click', function(event) {
  const clickedItem = event.target; // Зберігаємо елемент, на який клікнули

  if (clickedItem.tagName === 'LI') { 
    removeHighlights(); // Видалення підсвічування з інших елементів
    clickedItem.classList.add('highlighted'); 
  }
});

function removeHighlights() {
  const highlightedItems = document.querySelectorAll('.highlighted');
  highlightedItems.forEach(item => item.classList.remove('highlighted'));
}
