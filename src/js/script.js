const toggle = document.querySelector('.menu-btn');
const nav = document.getElementById('mainNav');
const logo = document.querySelector('.header__logo');
const header = document.querySelector('.header');
const hero = document.querySelector('.hero');
const page = document.body;

if (!toggle || !nav) {
} else {
    const setExpanded = (expanded) => {
        toggle.setAttribute('aria-expanded', String(expanded));
        if (expanded) {
            nav.removeAttribute('hidden');
            nav.classList.remove('nav--closing');
            nav.offsetHeight;
            nav.classList.add('nav--opening');
            page.classList.add('u-noscroll');
            logo && logo.classList.add('header__logo--extend');
        } else {
            nav.classList.remove('nav--opening');
            nav.classList.add('nav--closing');

            setTimeout(() => {
                nav.setAttribute('hidden', '');
                nav.classList.remove('nav--closing');
                page.classList.remove('u-noscroll');
                logo && logo.classList.remove('header__logo--extend');
            }, 700);
        }
    };

    toggle.addEventListener('click', () => {
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        setExpanded(!isExpanded);
    });

    nav.addEventListener('click', (event) => {
        if (event.target === nav || event.target.closest('.nav__link')) {
            setExpanded(false);
        }
    });

    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                header.classList.add('is-visible');
            } else {
                header.classList.remove('is-visible');
            }
        });
    }

    const slides = Array.from(document.querySelectorAll('.concept-card'));
    const prev = document.querySelector('.concept__btn--prev');
    const next = document.querySelector('.concept__btn--next');
    let current = 0;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle('is-active', i === index);
        });
    };

    if (slides.length && prev && next) {
        showSlide(current);

        prev.addEventListener('click', () => {
            current = (current - 1 + slides.length) % slides.length;
            showSlide(current);
        });

        next.addEventListener('click', () => {
            current = (current + 1) % slides.length;
            showSlide(current);
        });
    }

    const accordionHeaders = document.querySelectorAll('.programme__accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const isExpanded = header.getAttribute('aria-expanded') === 'true';

            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== header) {
                    otherHeader.setAttribute('aria-expanded', 'false');
                }
            });

            header.setAttribute('aria-expanded', String(!isExpanded));
        });
    });

    const infosAccordions = document.querySelectorAll('.infos__accordion');
    infosAccordions.forEach(acc => {
        const items = acc.querySelectorAll('.infos__accordion-item');
        items.forEach(item => {
            item.addEventListener('toggle', () => {
                if (item.open) {
                    items.forEach(other => {
                        if (other !== item) other.open = false;
                    });
                }
            });
        });
    });
}