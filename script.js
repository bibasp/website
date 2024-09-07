const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeToggleBtn.textContent = '🌞'; // Sun icon for light mode
}

// Event listener for the theme toggle button
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDarkTheme = body.classList.contains('dark-theme');

    if (isDarkTheme) {
        themeToggleBtn.textContent = '🌞'; // Switch to light mode icon
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggleBtn.textContent = '🌙'; // Switch to dark mode icon
        localStorage.setItem('theme', 'light');
    }
});
