function changePhotoUffizi(event) {
    let img = document.getElementById('photo_uffizi');
    if (event.button === 0) { // Перевіряємо, що натиснута саме ліва кнопка миші (код 0)
        if (img.src.match("pictures/main1.jpg")) {
            img.src = "pictures/main1_change.jpg";
        } else {
            img.src = "pictures/main1.jpg";
        }
    }
}

function changePhotoStedelijk(event) {
    let img = document.getElementById('photo_stedelijk');
    if (event.button === 0) { // Перевіряємо, що натиснута саме ліва кнопка миші (код 0)
        if (img.src.match("pictures/main2.jpg")) {
            img.src = "pictures/main2_change.jpg";
        } else {
            img.src = "pictures/main2.jpg";
        }
    }
}

function changePhotoMet(event) {
    let img = document.getElementById('photo_met');
    if (event.button === 0) { // Перевіряємо, що натиснута саме ліва кнопка миші (код 0)
        if (img.src.match("pictures/main3.jpg")) {
            img.src = "pictures/main3_change.jpg";
        } else {
            img.src = "pictures/main3.jpg";
        }
    }
}