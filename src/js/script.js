document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-btn');
    const nav = document.getElementById('mainNav');
    const logo = document.querySelector('.header__logo');
    const page = document.body;

    if (!toggle || !nav) return;

    const setExpanded = (expanded) => {
        toggle.setAttribute('aria-expanded', String(expanded));
        if (expanded) {
            nav.removeAttribute('hidden');
            page.classList.add('u-noscroll');
            logo && logo.classList.add('header__logo--extend');
        } else {
            nav.setAttribute('hidden', '');
            page.classList.remove('u-noscroll');
            logo && logo.classList.remove('header__logo--extend');
        }
    };

    toggle.addEventListener('click', () => {
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        setExpanded(!isExpanded);
    });

    // Fermer en cliquant sur l'overlay ou un lien
    nav.addEventListener('click', (event) => {
        if (event.target === nav || event.target.closest('.nav__link')) {
            setExpanded(false);
        }
    });
});