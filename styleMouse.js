let squareDiv = document.querySelector(".square")

squareDiv.addEventListener("mouseover", function(event) {
    event.target.classList.add("blacksquare");
});

squareDiv.addEventListener("mouseout", function(event) {
    // Щоб переконатися, що миша дійсно покинула елемент, перевіряємо, чи новий елемент, на який вона наводиться, не є спорідненим елементом.
    if (!event.relatedTarget || !this.contains(event.relatedTarget)) {
        event.target.classList.remove("blacksquare");
    }
});