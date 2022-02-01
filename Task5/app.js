const list = document.querySelectorAll('.bookList ol'); // Извлекаем все элементы списка

function setSelected(event) {
  const selected = document.querySelector('.bookList ol.selected');
  if (selected) {
    selected.classList.remove('selected');
  }
  event.currentTarget.classList.add('selected');
}

list.forEach(function (ol) {
  ol.onclick = setSelected;
});
