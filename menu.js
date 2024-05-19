let menuButtons = document.querySelectorAll('.menu-button');


menuButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {

    let action = button.getAttribute('data-action');

    if (action === 'method1') {
      method1();
    } else if (action === 'method2') {
      method2();
    } else if (action === 'method3') {
      method3();
    }

  });
});

  let paintDiv = document.querySelector('.infoImg');
function method1() {
  paintDiv.textContent = "Ця картина, вважається одним з найкрасивіших та найвідоміших творів мистецтва в світі. Вона зображає богиню весни, оточену групою німф та інших міфологічних істот. Картина відома своїми витонченими фігурами, гармонійною композицією та використанням яскравих кольорів.";
}

function method2() {
  paintDiv.textContent = "Ця картина є ще одним шедевром Боттічеллі, який зображає богиню Венери, що виходить з моря. Картина відома своїми витонченими фігурами, використанням міфологічних символів та м'яким, атмосферним освітленням.";
}

function method3() {
  paintDiv.textContent = "Ця картина є одним з найвідоміших творів Леонардо да Вінчі. Вона зображає архангела Гавриїла, який з'являється Діві Марії з благою вісткою про те, що вона стане матір'ю Ісуса Христа. Картина відома своїм реалістичним зображенням фігур, використанням світлотіні та пейзажним фоном.";
}
