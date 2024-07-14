document.getElementById('Form').addEventListener('submit', function(event) {
    event.preventDefault();
     if (this.checkValidity()) {
        document.getElementById('Message').style.display = 'block';
        setTimeout(() => {
            this.submit();
        }, 2000);
    } else {
        alert('Please fill out all required fields.');
    }
});

