window.onscroll = function() {
    const nav = document.getElementById('sticky-nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
};

const form = document.getElementById('contactForm');

form.addEventListener('submit',function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add('was-validated');
        return;
    }

    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('emailAddress').value,
        companyName: document.getElementById('companyName').value,
        region: document.querySelector('input[name="regionRadio"]:checked').value,
        service: document.getElementById('servicesSelect').value,
        describe: document.getElementById('describeServices').value,
    };

    console.log('Form Submitted!', formData);
    alert('Thank you! Your request for a needs assessment has been sent.');
    form.reset();
    form.classList.remove('was-validated');
});