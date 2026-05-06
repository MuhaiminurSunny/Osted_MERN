
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const featuresBtn = document.getElementById('features-btn');
    const dropdown = document.getElementById('dropdown');
    const caret = document.getElementById('caret');

    // Toggle Mobile Navbar
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Toggle Features Dropdown
    featuresBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('hidden');
        caret.classList.toggle('rotate-180');
    });

    // Close everything when clicking outside
    window.addEventListener('click', () => {
        dropdown.classList.add('hidden');
        caret.classList.remove('rotate-180');
    });
