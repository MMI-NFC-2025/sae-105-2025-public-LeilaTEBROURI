document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-btn');
    const nav = document.getElementById('mainNav');
    const logo = document.querySelector('.header__logo');
    const page = document.body;

    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        const nextExpanded = !isExpanded;

        toggle.setAttribute('aria-expanded', String(nextExpanded));

        if (nextExpanded) {
            nav.removeAttribute('hidden');
            page.classList.add('u-noscroll');
            logo && logo.classList.add('header__logo--extend');
        } else {
            nav.setAttribute('hidden', '');
            page.classList.remove('u-noscroll');
            logo && logo.classList.remove('header__logo--extend');
        }
    });
});