// Initialize EmailJS with public key
(function(){
     emailjs.init("EixVqaR19gBNBSEn5")
})();

const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById("success-message");

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const formData = {
        to_name: "Admin",
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        reply_to: document.getElementById('email').value //reply to sender
    };

     emailjs.send('service_s8qlvod', 'template_i56c52k', formData).then((response) => {
        successMessage.classList.remove('hidden');
        contactForm.reset();

        setTimeout(() => {
           successMessage.classList.add('hidden');
        }, 5000);
     }).catch((error) => {
        alert('Failed to send message. Please try again !')
     });
})