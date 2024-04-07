// Функція відкриття popup
function openPopup() {
  document.getElementById('popup').style.display = 'block';
}

// Функція закриття popup
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

// Подія натискання на кнопку submit форми
document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Зупиняємо стандартну поведінку форми

  // Відкриваємо popup
  openPopup();
});
document.querySelector('.close').addEventListener('click', function (event) {
  event.preventDefault(); // Зупиняємо стандартну поведінку форми

  // Відкриваємо popup
  closePopup();
});
