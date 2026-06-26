document.querySelector('.email-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = this.querySelector('input[type="email"]').value;
  const button = this.querySelector('button');
  const originalText = button.textContent;

  // Placeholder — we'll connect this to Mailchimp or another service
  button.textContent = 'Thank you!';
  button.disabled = true;
  this.querySelector('input').disabled = true;

  setTimeout(function() {
    button.textContent = originalText;
    button.disabled = false;
    e.target.querySelector('input').disabled = false;
    e.target.querySelector('input').value = '';
  }, 3000);
});
