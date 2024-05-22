document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const status = document.getElementById('status');
    
    const webhookURL = 'https://discord.com/api/webhooks/1242869706550018188/4o7_5idKWKiUdnmoerO1qs_kYLL9MKhTr3AntAedC7EeqP1thyf-wjQ35qmQ7yFJ2Fck';

    const payload = {
        content: `**Imię:** ${name}\n**Email:** ${email}\n**Wiadomość:**\n${message}`
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            status.innerHTML = 'Wiadomość wysłana!';
            status.style.color = 'green';
            document.getElementById('contact-form').reset();
        } else {
            throw new Error('Błąd wysyłania wiadomości');
        }
    })
    .catch(error => {
        status.innerHTML = 'Wystąpił błąd: ' + error.message;
        status.style.color = 'red';
    });
});

