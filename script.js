document.addEventListener('DOMContentLoaded', function() {
    const photo = document.getElementById('hoverPhoto');
    const audio = document.getElementById('hoverAudio');

    photo.addEventListener('mouseenter', function() {
        audio.play();
    });

    photo.addEventListener('mouseleave', function() {
        audio.pause();
        audio.currentTime = 0; // Reset audio to start
    });
});
