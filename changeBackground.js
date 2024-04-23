function changeBackground() {
    let button = document.getElementById('bc');
    button.addEventListener('click',function()
    {               
        document.body.style.backgroundColor = "lightblue";
        setTimeout(function() {
          document.body.style.backgroundColor = ""; 
        }, 30000);
    })
};
changeBackground();

function goToMet() {
    let button = document.getElementsByClassName(`goToMet`); 
    button.addEventListener(`click`, function() {
        location.href = "./met.html";
    });
}
goToMet();

