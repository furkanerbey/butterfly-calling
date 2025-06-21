const form = document.getElementById('ticket-form');
const popup = document.getElementById('success-popup');
const URL = 'https://script.google.com/macros/s/AKfycbxDc-W1-ZjK-YfRgL_gTJEPVYncou-YCNDqssOFXvlezCYTrX-S6OHy_PmAYVVsWTid/exec';

form.addEventListener('submit', function(e) {
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
  .then(response => {
    if (!response.ok) throw new Error('Response not OK');
    return response.json();
  })
  .then(result => {
    popup.classList.remove('hidden');
    setTimeout(() => {
      popup.classList.add('hidden');
      form.reset();
    }, 3000);
  })
  .catch(error => {
    alert('Form gönderim hatası: ' + error.message);
  });
});