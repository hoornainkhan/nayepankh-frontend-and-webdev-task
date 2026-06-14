window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const gridCells = document.querySelectorAll('.hero-grid-cell');
    const centralCell = document.getElementById('central-cell');
    const bgExpanded = document.getElementById('bg-expanded');
    const heroOverlay = document.getElementById('hero-overlay');
    const heroContent = document.getElementById('hero-content');
    const cinematicGrid = document.getElementById('cinematic-grid');
    const leftCells = document.querySelectorAll('.scatter-left');
    const rightCells = document.querySelectorAll('.scatter-right');

    // Dismiss Preloader
    setTimeout(() => {
        preloader.style.transition = 'opacity 0.8s ease';
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
            startHeroSequence();
        }, 800);
    }, 1000);

    function startHeroSequence() {
        // Step 1: Slide and Fade In Grid
        gridCells.forEach((cell, i) => {
            setTimeout(() => {
                cell.style.transition = 'transform 1s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.8s ease-out';
                cell.style.opacity = '1';
                cell.style.transform = 'translateY(0)';
            }, i * 150);
        });

        // Step 2: Scale up central cell and scatter surroundings
        setTimeout(() => {
            // Central cell expansion
            centralCell.style.transition = 'all 1.8s cubic-bezier(0.4, 0, 0.2, 1)';
            centralCell.style.transform = 'scale(5)';
            centralCell.style.opacity = '0';

            // Scatter effects
            leftCells.forEach(cell => {
                cell.style.transition = 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
                cell.style.transform = 'translateX(-300px) translateY(-100px) rotate(-15deg)';
                cell.style.opacity = '0';
            });
            rightCells.forEach(cell => {
                cell.style.transition = 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
                cell.style.transform = 'translateX(300px) translateY(100px) rotate(15deg)';
                cell.style.opacity = '0';
            });

            // Fade in final background image
            bgExpanded.style.transition = 'opacity 1.5s ease-in';
            bgExpanded.style.opacity = '1';

            // Reveal Overlay
            heroOverlay.style.transition = 'opacity 2.5s ease';
            heroOverlay.style.opacity = '1';

        }, 2500);

        // Step 3: Reveal Content
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
            // Hide grid container once animation is done to prevent interaction issues
            cinematicGrid.style.display = 'none';
        }, 3800);
    }
});

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Reveal On Scroll Logic
const observerOptions = { threshold: 0.15 };
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            revealObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-on-scroll').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(40px)';
    section.style.transition = 'opacity 1.2s cubic-bezier(0.2, 0.8, 0.2, 1), transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1)';
    revealObserver.observe(section);
});

if (localStorage.getItem('theme') === 'dark') html.classList.add('dark');
