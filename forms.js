// Replace this URL with your deployed Google Apps Script web app URL
var SCRIPT_URL = 'YOUR_APPS_SCRIPT_URL_HERE';

function submitForm(formEl, statusEl, successMsg) {
  var btn = formEl.querySelector('.form-submit');
  var originalText = btn.textContent;

  btn.disabled = true;
  btn.textContent = 'Sending…';
  statusEl.className = 'form-status';
  statusEl.textContent = '';

  var params = new URLSearchParams(new FormData(formEl)).toString();

  fetch(SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params
  })
  .then(function () {
    statusEl.className = 'form-status success';
    statusEl.textContent = successMsg;
    formEl.reset();
  })
  .catch(function () {
    statusEl.className = 'form-status error';
    statusEl.textContent = 'Something went wrong — please try again or get in touch directly.';
  })
  .finally(function () {
    btn.disabled = false;
    btn.textContent = originalText;
  });
}
