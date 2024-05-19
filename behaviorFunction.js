let divMessage = document.querySelector('.message')
function handleBehavior(event) {
    const behavior = event.target.dataset.behavior;

    if (behavior === 'message') {
        divMessage.textContent = "Переходь на наші музеї, друже!";
    } else if (behavior === 'uffizi') {
        window.location.href = "/uffizi.html";
    }
    else if(behavior === 'met'){
        window.location.href = "/met.html";
    }
    else if(behavior === 'stedelijk'){
        window.location.href = "/stedelijk.html";
    }
}

const elements = document.querySelectorAll('[data-behavior]');

elements.forEach(element => {
    element.addEventListener('click', handleBehavior);
});