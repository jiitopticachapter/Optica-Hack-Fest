function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSpecial) {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const special = '!@#$%^&*';
    let characters = '';
    let password = '';

    if (includeUppercase) characters += upper;
    if (includeLowercase) characters += lower;
    if (includeNumbers) characters += numbers;
    if (includeSpecial) characters += special;

    if (characters.length === 0) return 'Please select at least one character type.';

    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password;
}

function updateStrengthIndicator(password) {
    const strengthMeter = document.getElementById('strength-meter');
    let strength = 'weak';
    
    if (password.length >= 12 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*]/.test(password)) {
        strength = 'strong';
    } else if (password.length >= 8) {
        strength = 'medium';
    }

    strengthMeter.className = `strength-meter ${strength}`;
}

document.getElementById('generate').addEventListener('click', () => {
    const length = parseInt(document.getElementById('length').value);
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSpecial = document.getElementById('special').checked;

    const password = generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSpecial);
    document.getElementById('password').value = password;
    updateStrengthIndicator(password);
});

document.getElementById('copy').addEventListener('click', () => {
    const password = document.getElementById('password').value;
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
});