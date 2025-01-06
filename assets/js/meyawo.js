/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate inputs
    if (!name || !email || !message) {
        alert('Please fill in all the fields.');
        return;
    }

    // Construct email body
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    // Use mailto to open the user's email client
    const mailtoLink = `mailto:demo@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
});


// script.js

// Wait for the DOM to be ready before adding event listener
document.addEventListener("DOMContentLoaded", function() {
    // Get the button element by its id
    const downloadButton = document.getElementById("downloadBtn");

    // Add an event listener to the button
    downloadButton.addEventListener("click", function() {
        // Open the desired URL in a new tab/window
        window.open('https://docs.google.com/document/d/181_b4mYh0f1IjDoIwZ6f-ikDMeDBhgXuDf7UUI5fi1I/edit?tab=t.0', '_blank');
    });
});

