// Task 1: ASCII Code Detection and Special Key Detection
document.getElementById('keyInput').addEventListener('keydown', function(event) {
    var keyCode = event.keyCode || event.which;
    var keyChar = String.fromCharCode(keyCode);
    var specialKeys = [];
    
    // Check for special keys
    if (event.altKey) {
        specialKeys.push('Alt');
    }
    if (event.ctrlKey) {
        specialKeys.push('Ctrl');
    }
    if (event.shiftKey) {
        specialKeys.push('Shift');
    }
    
    var message = "Key: '" + event.key + "' | ASCII Code: " + keyCode;
    
    if (specialKeys.length > 0) {
        message += " | Special Keys: " + specialKeys.join(', ');
    }
    
    document.getElementById('keyInfo').innerHTML = message;
    
    // Alert the ASCII code
    alert("ASCII Code: " + keyCode + (specialKeys.length > 0 ? " | Special Keys: " + specialKeys.join(', ') : ""));
});

// Task 2: Numbers Only Input (using event object)
document.getElementById('numberInput').addEventListener('keypress', function(event) {
    var keyCode = event.keyCode || event.which;
    

    if (keyCode < 48 || keyCode > 57) {
        if (keyCode !== 46 && keyCode !== 8 && keyCode !== 9 && keyCode !== 27 && keyCode !== 13) {
            event.preventDefault();
            document.getElementById('numberInfo').innerHTML = "Only numbers are allowed!";
            return false;
        }
    }
    
    document.getElementById('numberInfo').innerHTML = "Valid input: '" + keyChar + "' (ASCII: " + keyCode + ")";
});

// Also handle paste events to prevent non-numeric content
document.getElementById('numberInput').addEventListener('paste', function(event) {
    event.preventDefault();
    var paste = (event.clipboardData || window.clipboardData).getData('text');
    
    // Check if pasted content contains only numbers and decimal points
    if (/^[0-9.]*$/.test(paste)) {
        this.value += paste;
        document.getElementById('numberInfo').innerHTML = "Pasted valid content: " + paste;
    } else {
        document.getElementById('numberInfo').innerHTML = "Paste blocked! Only numbers are allowed.";
    }
});



// Task 3: Password Input with Eye Toggle
var isPasswordVisible = false;

document.getElementById('eyeIcon').addEventListener('click', function() {
    var passwordInput = document.getElementById('passwordInput');
    var eyeIcon = document.getElementById('eyeIcon');
    
    if (isPasswordVisible) {

        passwordInput.type = 'password';
        eyeIcon.innerHTML = '👁️'; 
        isPasswordVisible = false;
    } else {

        passwordInput.type = 'text';
        eyeIcon.innerHTML = '🙈'; // Closed eye / see-no-evil monkey
        isPasswordVisible = true;
    }
});

// Add some visual feedback when hovering over the eye icon
document.getElementById('eyeIcon').addEventListener('mouseenter', function() {
    this.style.color = '#333';
});

document.getElementById('eyeIcon').addEventListener('mouseleave', function() {
    this.style.color = '#666';
});
