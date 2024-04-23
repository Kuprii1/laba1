(function userInfo() {
    let userName = document.querySelector('.i-name');
    let userSurname = document.querySelector('.i-surname');
    let userPosition = document.querySelector('.i-position');
        
    let button = document.querySelector('.u-b');

    button.addEventListener('click',function() {
        alert(`Hello! ${userName.value} ${userSurname.value}. Your position is ${userPosition.value}!`);
    })
})();
