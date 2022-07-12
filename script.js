var check = function() {
  if (document.getElementById('password').value ==
    document.getElementById('confirm-password').value) {
    document.getElementById('message').innerHTML = ' ';
  } else {
    document.getElementById('message').style.color = 'rgba(255, 80, 80, 1)';
    document.getElementById('message').innerHTML = '✖ password do not match';
  }
}