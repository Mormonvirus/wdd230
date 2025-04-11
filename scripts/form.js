document.getElementById('user-form').addEventListener('submit', function (event) {
    const pass1 = document.getElementById('password');
    const pass2 = document.getElementById('confirm-password');
    const errorMsg = document.getElementById('password-error');

    if (pass1.value !== pass2.value) {
        event.preventDefault();
        errorMsg.style.display = 'block';
        pass1.focus();
        pass1.value = '';
        pass2.value = '';
    } else {
        errorMsg.style.display = 'none';
    }
});

const rangeInput = document.getElementById('rating');
const rangeValue = document.getElementById('rating-value');

rangeInput.addEventListener('input', function () {
    rangeValue.textContent = rangeInput.value;
});

