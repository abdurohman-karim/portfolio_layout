// Function to set the initial theme based on user preference// Function to set the initial theme based on user preference
function setInitialTheme() {
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    const root = document.documentElement;

    // Set the initial background image based on the user's preference
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.backgroundImage = isDarkMode ? "url('../assets/bg-dark.svg')" : "url('../assets/bg.svg')";
    });

    // Toggle the dark-theme class for all sections
    sections.forEach(section => {
        section.classList.toggle('dark-theme', isDarkMode);
    });

    // Update the theme toggle button icon based on the initial theme
    updateThemeIcon(isDarkMode);

    if (isDarkMode) {
        root.classList.add('dark-theme');
    }
}

// ... (rest of the code remains unchanged)


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

    // Update the theme toggle button icon
    updateThemeIcon(isDarkMode);

    // Save the user's preference to localStorage
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

// Function to update the theme toggle button icon
function updateThemeIcon(isDarkMode) {
    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
        const sunSVG = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.24" d="M17.5556 12C17.5556 15.0682 15.0682 17.5556 12 17.5556C8.93175 17.5556 6.44444 15.0682 6.44444 12C6.44444 8.93175 8.93175 6.44444 12 6.44444C15.0682 6.44444 17.5556 8.93175 17.5556 12Z" fill="#ffe81c"/>
                <path d="M18.2833 18.2875L19.1001 19.1042M18.2854 5.71461L19.1001 4.8999M5.71461 5.71461L4.8999 4.8999M12 2V3.11111M3.11111 12H2M5.71666 18.2875L4.8999 19.1042M12 20.8889V22M22 12H20.8889M17.5556 12C17.5556 15.0682 15.0682 17.5556 12 17.5556C8.93175 17.5556 6.44444 15.0682 6.44444 12C6.44444 8.93175 8.93175 6.44444 12 6.44444C15.0682 6.44444 17.5556 8.93175 17.5556 12Z" stroke="#ffe81c" stroke-width="2" stroke-linecap="round"/>
            </svg>
        `;

        const moonSVG = `
            <path opacity="0.24" d="M3 12C3 16.9706 7.02944 21 12 21C16.3981 21 20.0593 17.8386 20.8444 13.6729C20.937 13.1814 20.272 12.9415 19.9043 13.2805C18.7462 14.348 17.1992 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.80078 9.65202 5.25384 10.7195 4.09574C11.0585 3.72798 10.8186 3.06301 10.3271 3.15564C6.16144 3.94068 3 7.60192 3 12Z" fill="#5A6585"/>
            <path d="M3 12C3 16.9706 7.02944 21 12 21C16.3981 21 20.0593 17.8386 20.8444 13.6729C20.937 13.1814 20.272 12.9415 19.9043 13.2805C18.7462 14.348 17.1992 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.80078 9.65202 5.25384 10.7195 4.09574C11.0585 3.72798 10.8186 3.06301 10.3271 3.15564C6.16144 3.94068 3 7.60192 3 12Z" stroke="#5A6585" stroke-width="2" stroke-linecap="round"/>
        `;

        themeIcon.innerHTML = isDarkMode ? sunSVG : moonSVG;
    }
}

// Event listener for the theme toggle
document.addEventListener('DOMContentLoaded', () => {
    setInitialTheme();

    const themeToggle = document.querySelector('#themeToggle');

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleDarkMode);
    }
});

// Toggle navbar
const menuToggleBtn = document.getElementById('menuToggle');
const header = document.getElementById('header');
const navMenu = document.getElementById('navMenu');

menuToggleBtn.addEventListener('click', () => {
    menuToggleBtn.classList.toggle('open');
    header.classList.toggle('open');
})


