// Завдання
// Реалізувати можливість зміни колірної теми користувача.Завдання має бути виконане на чистому Javascript без використання бібліотек типу jQuery або React.

// Технічні вимоги:

// Взяти будь-яке готове домашнє завдання з HTML/CSS.
// Додати на макеті кнопку "Змінити тему".
// При натисканні на кнопку - змінювати колірну гаму сайту (кольори кнопок, фону тощо) на ваш розсуд. При повторному натискання - повертати все як було спочатку - начебто для сторінки доступні дві колірні теми.
// Вибрана тема повинна зберігатися після перезавантаження сторінкиЗавдання
// Реалізувати можливість зміни колірної теми користувача.Завдання має бути виконане на чистому Javascript без використання бібліотек типу jQuery або React.

// Технічні вимоги:

// Взяти будь-яке готове домашнє завдання з HTML/CSS.
// Додати на макеті кнопку "Змінити тему".
// При натисканні на кнопку - змінювати колірну гаму сайту (кольори кнопок, фону тощо) на ваш розсуд. При повторному натискання - повертати все як було спочатку - начебто для сторінки доступні дві колірні теми.
// Вибрана тема повинна зберігатися після перезавантаження сторінки


// const body = document.querySelector("body");
const changeThemeBtn = document.querySelector("#change-theme-btn");

if (localStorage.getItem("theme") === "changed") {
    darkTheme = document.body.classList.add('dark-theme');
    // body.style.backgroundColor = "grey";
}

changeThemeBtn.addEventListener("click", () => {
    if (localStorage.getItem("theme") === "changed") {
        localStorage.removeItem("theme");
        darkTheme = document.body.classList.remove('dark-theme');
        // body.style.backgroundColor = "#fff";
    } else {
        localStorage.setItem("theme", "changed");
        darkTheme = document.body.classList.add('dark-theme');
        // body.style.backgroundColor = "grey";
    }
});