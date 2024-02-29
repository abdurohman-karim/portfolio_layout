// Function to set the initial theme based on user preference
function setInitialTheme() {
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    const root = document.documentElement;

    // Set the initial background image based on the user's preference
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.backgroundImage = isDarkMode ? "url('../assets/bg-dark.svg')" : "url('../assets/bg.svg')";
    });

    if (isDarkMode) {
        root.classList.add('dark-theme');
    }
}

// Function to toggle the theme
function toggleDarkMode() {
    const root = document.documentElement;
    root.classList.toggle('dark-theme');

    // Toggle the dark-theme class for all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.toggle('dark-theme', root.classList.contains('dark-theme'));
    });

    // Update the background image based on the new theme
    const isDarkMode = root.classList.contains('dark-theme');
    const bgImage = isDarkMode ? "url('../assets/bg-dark.svg')" : "url('../assets/bg.svg')";
    sections.forEach(section => {
        section.style.backgroundImage = bgImage;
    });

    // Save the user's preference to localStorage
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

// Event listener for the theme toggle
document.addEventListener('DOMContentLoaded', () => {
    setInitialTheme();

    const themeToggle = document.querySelector('#themeToggle');

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleDarkMode);
    }
});