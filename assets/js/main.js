import initMenuToggler from './modules/menu.js';
import initThemeToggler from './modules/theme.js';
import initContactForm from './modules/contact.js';
import initScroller from './modules/animations.js';

/**
 * Initializes all UI modules once the DOM is fully loaded.
 * Modules include:
 * - Theme toggler
 * - Mobile menu toggler
 * - Smooth scroller
 * - Contact form submission handler
 */
document.addEventListener('DOMContentLoaded', () => {
    initScroller();
    initMenuToggler();
    initThemeToggler();
    initContactForm();
});