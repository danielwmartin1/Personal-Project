document.addEventListener('DOMContentLoaded', () => {
    const footElement = document.getElementById('foot');
    if (footElement) {
        const currentYear = new Date().getFullYear();
        footElement.textContent = currentYear;
    }
});