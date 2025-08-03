/**
 * Toggles the mobile navigation menu.
 * Changes icon based on menu state and toggles `active` class on navigation.
 *
 * DOM Requirements:
 * - #menu-toggle: Menu toggler button.
 * - #menu-toggle-icon: clickable icon element
 * - .nav-links: container of navigation links
 */
export default function initMenuToggler() {
    const toggler = document.getElementById('menu-toggle');
    const toggleIcon = document.getElementById('menu-toggle-icon');
    const navLinks = document.querySelector('.nav-links');
    
    if (!toggler || !toggleIcon || !navLinks) return;
    
    function toggleMenu(forceClose = false) {
        navLinks.classList.toggle('active');
        const isActive = navLinks.classList.contains('active');
        toggleIcon.className = 'fa-solid fa-xl fa-' + (isActive ? 'x' : 'bars-staggered');
    }
    toggler.addEventListener('click', () => {
        const isMenuActive = navLinks.classList.contains('active');
        toggleMenu();
    });
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => toggleMenu(true));
    });
    
    document.addEventListener('keydown', (e) => {
        const isMenuActive = navLinks.classList.contains('active');
        if (isMenuActive && (e.key === 'Escape')) {
            toggleMenu();
        }
    });
    document.addEventListener('click', (e) => {
        const isClickInsideMenu = navLinks.contains(e.target) || toggler.contains(e.target);
        const isMenuActive = navLinks.classList.contains('active');
        if (isMenuActive && !isClickInsideMenu) {
            toggleMenu();
        }
    });
}
