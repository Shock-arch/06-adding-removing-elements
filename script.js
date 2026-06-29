const form = document.querySelector('#form');
const itemInput = document.querySelector('#item-input');
const list = document.querySelector('#list');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const itemText = itemInput.value.trim();

  if (itemText !== '') {
    const newItem = document.createElement('li');
    const deleteButton = document.createElement('button');

    newItem.textContent = itemText;
    deleteButton.className = 'delete-btn';
    deleteButton.type = 'button';
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

    newItem.appendChild(deleteButton);
    list.appendChild(newItem);
    itemInput.value = '';
  }
});

list.addEventListener('click', function (event) {
  const deleteButton = event.target.closest('.delete-btn');

  if (deleteButton) {
    deleteButton.parentElement.remove();
  }
});
