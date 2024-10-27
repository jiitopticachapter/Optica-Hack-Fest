document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('mode-toggle');
    
    // Load user preference from local storage
    const currentMode = localStorage.getItem('theme') || 'light';
    
    if (currentMode === 'dark') {
        document.body.classList.add('dark-mode');
        toggleSwitch.checked = true;
    } else {
        document.body.classList.add('light-mode');
        toggleSwitch.checked = false;
    }
    
    // Event listener for toggle switch
    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            document.body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('theme', 'light');
        }
    });
});