document.getElementById('ticket-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const data = {
    fullname: document.getElementById('fullname').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    participation: document.getElementById('participation').value,
    message: document.getElementById('message').value
  };

  fetch('https://script.google.com/macros/s/AKfycbxpSj37qEktp2--5ediJ7fW78T3aJIqO40xY1QqFJcMJ39bqOaAfILtqy0XSNMMnnVK/exec', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(result => {
    if (result.result === "success") {
      document.getElementById('success-popup').classList.remove('hidden');
      setTimeout(() => {
        document.getElementById('success-popup').classList.add('hidden');
        document.getElementById('ticket-form').reset();
      }, 3000);
    } else {
      alert("Gönderim başarısız oldu.");
    }
  })
  .catch(error => {
    alert("Bir hata oluştu. Lütfen tekrar deneyin.");
    console.error("Form gönderim hatası:", error);
  });
});
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    .setHeader("Access-Control-Allow-Headers", "Content-Type");
}