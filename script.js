const audioPlayer = document.getElementById('audio-player');
const playPauseButton = document.getElementById('play-pause-button');
const seekBar = document.getElementById('seek-bar');

let isPlaying = false;

playPauseButton.addEventListener('click', () => {
    if (isPlaying) {
        audioPlayer.pause();
        playPauseButton.innerText = 'Play';
    } else {
        audioPlayer.play();
        playPauseButton.innerText = 'Pause';
    }
    isPlaying = !isPlaying;
});

seekBar.addEventListener('input', () => {
    const seekTime = (audioPlayer.duration / 100) * seekBar.value;
    audioPlayer.currentTime = seekTime;
});

audioPlayer.addEventListener('timeupdate', () => {
    const currentTime = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    seekBar.value = currentTime;
});

audioPlayer.addEventListener('ended', () => {
    playPauseButton.innerText = 'Play';
    isPlaying = false;
});
