function showPassword() {
    const eye = document.getElemnetById('eye');
    const eyeSlash = document.getElemnetById('eye-slash');
    const fieldPassword = document.getElemnetById('field-password');

    if(eye.style.display === 'none') {
        eye.style.display = 'block';
        eyeSlash.style.display = 'none';
        fieldPassword.type = 'text';
    } else {
        eye.style.display = 'none';
        eyeSlash.style.display = 'block';
        fieldPassword.type = 'password';
    }   
};

document.getElementById('btn-login').addEventListener('click',function(r) {
    e.preventDefalt();
    alert('Logado')
})