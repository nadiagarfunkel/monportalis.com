var SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwX2yMmTn2KD3zWfpv8JOR2pZT30UxE1l72699m2U1-b8Ym3-L0rduDTbVRn4nsWyke/exec';

document.querySelector('.email-form').addEventListener('submit', function(e) {
  e.preventDefault();
  e.stopPropagation();

  var email = this.querySelector('input[type="email"]').value;
  var button = this.querySelector('button');
  var input = this.querySelector('input');

  button.textContent = 'Sending...';
  button.disabled = true;
  input.disabled = true;

  var img = new Image();
  img.onload = img.onerror = function() {
    button.textContent = 'Thank you!';
    input.value = '';
    setTimeout(function() {
      button.textContent = 'Join waitlist';
      button.disabled = false;
      input.disabled = false;
    }, 3000);
  };
  img.src = SCRIPT_URL + '?email=' + encodeURIComponent(email);

  return false;
});
