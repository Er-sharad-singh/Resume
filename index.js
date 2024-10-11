// Toggle between light and dark modes
const toggleButton = document.getElementById('toggleTheme');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Print only the main content (excluding print button)
const printButton = document.getElementById('printButton');
printButton.addEventListener('click', () => {
    const resumeContent = document.getElementById('resumeContent').outerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = resumeContent;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload();
});
