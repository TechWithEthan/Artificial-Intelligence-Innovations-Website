document.getElementById('resetForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    const email = document.getElementById('email').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (newPassword !== confirmPassword) {
        // Display alert for password mismatch
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Passwords do not match!',
        });
    } else if (!email || !newPassword || !confirmPassword) {
        // Display alert for missing fields
        Swal.fire({
            icon: 'warning',
            title: 'Missing Information',
            text: 'Please fill in all fields!',
        });
    } else {
        // Display success alert
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Password has been reset successfully!',
        });
    }
});
