document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.menu-item button');

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      const itemName = this.closest('.menu-item').querySelector('h2').textContent;
      buyItem(itemName);
    });
  });
});

function buyItem(name) {
  const message = `Bạn đã chọn mua: ${name}`;
  alert(message);
  console.log(message);
}
