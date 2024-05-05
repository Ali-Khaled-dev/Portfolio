
$(function () {
    const menu = document.getElementById('menu');
    const actions = document.getElementById('actions');

    menu.addEventListener("click", () => {
        hundlemenue();
    })

    function hundlemenue() {
        menu.classList.toggle("is-active");
        actions.classList.toggle("is-active");

    }
});


