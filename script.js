<script>
document.addEventListener('DOMContentLoaded', function() {
    const textToType = "Driving Spotify's Growth, One Insight at a Time.";
    const typingElement = document.querySelector('.typing-effect');
    let i = 0;

    function typeWriter() {
        if (i < textToType.length) {
            typingElement.innerHTML += textToType.charAt(i);
            i++;
            setTimeout(typeWriter, 100); // Adjust typing speed here
        }
    }

    typeWriter();

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
<script/>
