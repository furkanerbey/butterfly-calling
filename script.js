document.getElementById('ticket-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const data = {
    fullname: document.getElementById('fullname').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    participation: document.getElementById('participation').value,
    message: document.getElementById('message').value
  };

  fetch('https://script.google.com/macros/s/AKfycbzCOC_zaaVWh5H74GmUn38tCF_HZ2gCkvhwqWAaIn73owvhtREz-ba3jZ5xClMNzx7QBw/exec', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(result => {
    document.getElementById('success-popup').classList.remove('hidden');
  })
  .catch(error => {
    alert('Hata oluştu, lütfen tekrar deneyin.');
  });
});