let countOfHearts = 5; // Початкова кількість сердець
const maxHearts = 5; // Максимальна кількість сердець

// Функція для оновлення відображення сердець
function updateHeartsDisplay() {
    let fullHearts = '❤'.repeat(countOfHearts);
    let emptyHearts = '🤍'.repeat(maxHearts - countOfHearts);
    document.getElementById('count-of-hearts').innerText = fullHearts + emptyHearts;
}

// Встановлюємо початкове значення сердець
updateHeartsDisplay();

// Обробка натискання на кнопку "Отримати побажання"
document.getElementById("btn_wishes").addEventListener('click', () => {
    console.log("Button clicked");

    let arrayOfLoveWishes = ["Люблю тебе!",
    "Ти моє сонце!",
    "Щасливого Дня закоханих!",
    "Ти робиш мене щасливим!",
    "З тобою кожен день — свято!",
    "Ти моя найкраща половинка!",
    "Ти — моє натхнення!",
    "З тобою я відчуваю себе живим!",
    "Ти — моя мрія, що здійснилася!",
    "Ти завжди в моєму серці!"];
    let index = Math.floor(Math.random() * arrayOfLoveWishes.length);
    
    console.log("Номер елементу масиву:", index);
    
    document.getElementById('p_wishes').innerText = arrayOfLoveWishes[index];

    if (countOfHearts > 0) {
        countOfHearts--; // Віднімаємо одне серце
        console.log("Залишилося сердець:", countOfHearts);
        updateHeartsDisplay(); // Оновлюємо відображення

        if (countOfHearts === 0) {
            document.getElementById("btn_wishes").style.display = 'none'; // Ховаємо кнопку, якщо сердець немає
        }
    }
});

// Обробка натискання на кнопку "Купити"
document.getElementById("btn-buy-hearts").addEventListener('click', () => {
    console.log("btn-buy-hearts clicked");
    
    countOfHearts = maxHearts; // Оновлюємо кількість сердець до 5
    updateHeartsDisplay(); // Оновлюємо відображення

    document.getElementById("btn_wishes").style.display = 'inline-block'; // Повертаємо кнопку
});
