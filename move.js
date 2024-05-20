let draggable = document.querySelector('.moveEdmon');
    let offsetX, offsetY, isDragging = false;

    draggable.addEventListener('mousedown', (event) => {
        isDragging = true;
        offsetX = event.clientX - draggable.getBoundingClientRect().left;
        offsetY = event.clientY - draggable.getBoundingClientRect().top;
        draggable.style.cursor = 'grabbing';
        document.body.style.userSelect = 'none';
    });

    document.addEventListener('mousemove', (event) => {
        if (isDragging) {
            draggable.style.left = `${event.clientX - offsetX}px`;
            draggable.style.top = `${event.clientY - offsetY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            draggable.style.cursor = 'grab';
            document.body.style.userSelect = 'auto';
        }
    });