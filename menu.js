// Menu mobilne ("hamburger") – wspólne dla wszystkich podstron.
// Skrypt jest dołączony w <head>, więc klasa "js" pojawia się zanim strona się wyświetli.
// Bez JavaScriptu menu na telefonie jest po prostu zawsze rozwinięte.
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

    // kliknięcie w przycisk otwiera / zamyka menu
    przycisk.addEventListener('click', function () {
        ustawMenu(!menu.classList.contains('otwarte'));
    });

    // klawisz Esc zamyka menu
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && menu.classList.contains('otwarte')) {
            ustawMenu(false);
            przycisk.focus();
        }
    });
});
