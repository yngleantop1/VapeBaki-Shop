document.addEventListener('DOMContentLoaded', function() {
    const captchaCanvas = document.getElementById('captchaCanvas');
    const captchaInput = document.getElementById('captchaInput');
    const captchaResult = document.getElementById('captchaResult');
    const refreshCaptcha = document.getElementById('refreshCaptcha');
    const submitCaptcha = document.getElementById('submitCaptcha');
    const ctx = captchaCanvas.getContext('2d');

    let captchaText = '';

    function generateCaptcha() {
        captchaText = Math.random().toString(36).substring(2, 8).toUpperCase();
        ctx.clearRect(0, 0, captchaCanvas.width, captchaCanvas.height);
        ctx.font = '30px Arial';
        ctx.fillStyle = '#000';
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.fillText(captchaText, captchaCanvas.width / 2, captchaCanvas.height / 2);

        // Dodanie zakłóceń
        for (let i = 0; i < 6; i++) {
            ctx.strokeStyle = getRandomColor();
            ctx.beginPath();
            ctx.moveTo(Math.random() * captchaCanvas.width, Math.random() * captchaCanvas.height);
            ctx.lineTo(Math.random() * captchaCanvas.width, Math.random() * captchaCanvas.height);
            ctx.stroke();
        }
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    refreshCaptcha.addEventListener('click', generateCaptcha);

    submitCaptcha.addEventListener('click', function() {
        if (captchaInput.value.toUpperCase() === captchaText) {
            captchaResult.textContent = 'Potwierdzono!';
            captchaResult.style.color = 'green';
            setTimeout(function() {
                window.location.href = 'main.html';
            }, 1000);
        } else {
            captchaResult.textContent = 'Niepoprawny kod, spróbuj ponownie.';
            captchaResult.style.color = 'red';
        }
    });

    generateCaptcha();
});
