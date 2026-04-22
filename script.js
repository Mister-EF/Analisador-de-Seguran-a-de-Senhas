const passwordInput = document.getElementById('password-input');
const strengthBar = document.getElementById('strength-bar');

passwordInput.addEventListener('input', () => {
    const val = passwordInput.value;
    let strength = 0;

    // Lógica de critérios
    if (val.length >= 8) {
        strength += 33;
        document.getElementById('length').classList.add('valid');
    } else {
        document.getElementById('length').classList.remove('valid');
    }

    if (/[0-9]/.test(val)) {
        strength += 33;
        document.getElementById('numbers').classList.add('valid');
    } else {
        document.getElementById('numbers').classList.remove('valid');
    }

    if (/[^A-Za-z0-9]/.test(val)) {
        strength += 34;
        document.getElementById('special').classList.add('valid');
    } else {
        document.getElementById('special').classList.remove('valid');
    }

    // Atualiza a barra
    strengthBar.style.width = strength + "%";
    if (strength < 40) strengthBar.style.backgroundColor = "#ff4d4d";
    else if (strength < 80) strengthBar.style.backgroundColor = "#ffd700";
    else strengthBar.style.backgroundColor = "#00ff88";
});