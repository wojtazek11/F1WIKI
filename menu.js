//Rozwijany przycisk
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', function () {
    var przycisk = document.querySelector('.menu-przycisk');
    var menu = document.getElementById('menu');
    if (!przycisk || !menu) return;

    function ustawMenu(otwarte) {
        menu.classList.toggle('otwarte', otwarte);
        przycisk.classList.toggle('otwarte', otwarte);
        przycisk.setAttribute('aria-expanded', otwarte ? 'true' : 'false');
        przycisk.setAttribute('aria-label', otwarte ? 'Zamknij menu' : 'Otwórz menu');
    }

    przycisk.addEventListener('click', function () {
        ustawMenu(!menu.classList.contains('otwarte'));
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && menu.classList.contains('otwarte')) {
            ustawMenu(false);
            przycisk.focus();
        }
    });
});
