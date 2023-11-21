function validateForm() {
    var username =document.getElementById('username').value;
    var email =document.getElementById('email').value;
    var password =document.getElementById('password').value;

    if (username === '' || email === '' || password === '') {
        alert('Please fill in all fields');
        return false;
    }
    // Additional validation logic can be added here

        return true;  
    
}
