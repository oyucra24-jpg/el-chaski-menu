const tableButtons = document.querySelectorAll('.table-btn');

tableButtons.forEach((button) => {
  button.addEventListener('click', () => {
    tableButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
