const form = document.getElementById('ticket-form'),
      popup = document.getElementById('success-popup'),
      URL = 'https://script.google.com/macros/s/AKfycbxpSj37qEktp2--5ediJ7fW78T3aJIqO40xY1QqFJcMJ39bqOaAfILtqy0XSNMMnnVK/exec';

form.addEventListener('submit', e => {
  e.preventDefault();
  const data = {
    fullname: form.fullname.value.trim(),
    phone: form.phone.value.trim(),
    email: form.email.value.trim(),
    participation: form.participation.value,
    message: form.message.value.trim()
  };
  fetch(URL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(r => {
    popup.classList.remove('hidden');
    form.reset();
    setTimeout(() => popup.classList.add('hidden'), 3000);
  })
  .catch(err => alert('Form gönderim hatası: ' + err.message));
});