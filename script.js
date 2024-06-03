var modal = document.getElementById('videoModal');
var videoPlayer = document.getElementById('videoPlayer');

function openVideo(videoUrl) {
    videoPlayer.src = videoUrl;
    modal.style.display = 'block';
    window.addEventListener('keydown', closeOnEscape);
    window.addEventListener('click', closeOnClickOutside);
}

function closeVideo() {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    modal.style.display = 'none';
    window.removeEventListener('keydown', closeOnEscape);
    window.removeEventListener('click', closeOnClickOutside);
}

function closeOnEscape(event) {
    if (event.key === 'Escape') {
        closeVideo();
    }
}

function closeOnClickOutside(event) {
    if (event.target === modal) {
        closeVideo();
    }
}
