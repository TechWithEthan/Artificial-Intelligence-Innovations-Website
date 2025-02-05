function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username.trim() === '' || password.trim() === '') {
      alert('Please enter both username and password.');
      return false;
    } else if (username === 'Admin' && password === 'Admin') {
      Swal.fire({
        icon: 'success',
        title: 'Login successful!',
        text: 'Please wait for a moment.',
        showConfirmButton: false,
        timer: 1500,
        willClose: () => {
          window.location.href = 'dashboard.html'; 
        }
      });
      return false; 
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Username or Password',
        text: 'Please try again.'
      });
      return false;
    }
  }
