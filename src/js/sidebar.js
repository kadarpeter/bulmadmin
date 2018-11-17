document.addEventListener('DOMContentLoaded', initNavigation);

const CLASSNAME_SIDEBAR_VISIBLE = 'sidebar-is-visible';

function initNavigation() {
    let $overlay = document.createElement('div'),
        $body = document.querySelector('body'),
        $sidebar = document.querySelector('.js-sidebar'),
        $sidebarToggle = document.querySelector('.js-sidebar-toggle');

    $overlay.classList.add('overlay');
    $body.appendChild($overlay);

    $overlay.addEventListener('click', function (e) {
        e.preventDefault();
        closeNav();
    });

    $sidebarToggle.addEventListener('click', function (e) {
        e.preventDefault();

        if ($body.classList.contains(CLASSNAME_SIDEBAR_VISIBLE)) {
            closeNav();
        } else {
            openNav();
        }
    });

    function openNav() {
        $body.classList.add(CLASSNAME_SIDEBAR_VISIBLE);
        $overlay.classList.add('is-visible');
        $sidebar.classList.add('is-open');
        $sidebarToggle.classList.add('is-active');
    }

    function closeNav() {
        $body.classList.remove(CLASSNAME_SIDEBAR_VISIBLE);
        $overlay.classList.remove('is-visible');
        $sidebar.classList.remove('is-open');
        $sidebarToggle.classList.remove('is-active');
    }
}