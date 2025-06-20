document.getElementById('mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    const button = document.getElementById('mode-toggle');
    button.textContent = document.body.classList.contains('dark-mode') ? '🌙' : '☀️';
});