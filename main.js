

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
}
showMenu('nav_toggle', 'nav_menu');

const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    const navMenu = document.getElementById('nav_menu');
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));


const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

sr.reveal('.home_title', {});
sr.reveal('.button', {delay: 200});
sr.reveal('.home_img', {delay: 400});
sr.reveal('.home_social-icon', {interval: 200});

sr.reveal('.about_img', {});
sr.reveal('.about_subtitle', {delay: 200});
sr.reveal('.about_text', {delay: 400});

sr.reveal('.skills_subtitle', {});
sr.reveal('.skills_text', {delay: 200});
sr.reveal('.skills_data', {interval: 200});
sr.reveal('.skills_img', {delay: 400});

sr.reveal('.work_img', {interval: 200});
sr.reveal('.contact_input', {interval: 200});

const form = document.querySelector('.contact_form');

function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "thecitylondon999@gmail.com",
        Password: "800D4005C912F49F330D5156A91912C5FC1A",  // Sensitive info should be handled server-side
        To: "thecitylondon999@gmail.com",
        From: "thecitylondon999@gmail.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
      message => alert(message)
    );
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendEmail();
});


// const form  = document.querySelector('form.contact_form');
// const Name  = document.getElementById('name')
// const Email  = document.getElementById('email')
// const mess  = document.getElementById('message')

// function sendEmail() {
//     const bodyMessage = "name: $(name.value <br> Email; $ 
//     {Name.value<br>"}


 