const navbar = document.querySelector('.navbar');
const menu = document.querySelector(".site-nav");
const toggle = document.getElementById("hamburgerMenu");

// Toggle mobile site navigation
function toggleMenu() {
    navbar.classList.toggle("active");
    menu.classList.toggle("active");
    toggle.classList.toggle("open");
}

// Add click event listener to the toggle element
toggle.addEventListener("click", toggleMenu);





const targetElement = document.getElementById('onScroll');

// Add a scroll event listener
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const threshold = 100;

    if (scrollPosition >= threshold) {
        targetElement.classList.add('has-background');
    } else {
        targetElement.classList.remove('has-background');
    }
});




//
// Audio Player with controls
//

const playerButton = document.querySelector('.player-button');
const audio = document.querySelector('audio');
const timeline = document.querySelector('.timeline');
const playIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="var(--clr-primary)">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
    </svg>
`;
const pauseIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="var(--clr-primary)">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
    </svg>
`;
const soundIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="var(--player-button-color)">
        <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clip-rule="evenodd" />
    </svg>
`;
const muteIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="var(--player-button-color)">
        <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clip-rule="evenodd" />
    </svg>
`;

function toggleAudio() {
    if (audio.paused) {
        audio.play();
        playerButton.innerHTML = pauseIcon;
    } else {
        audio.pause();
        playerButton.innerHTML = playIcon;
    }
}

playerButton.addEventListener('click', toggleAudio);

function changeTimelinePosition() {
    const percentagePosition = (100 * audio.currentTime) / audio.duration;
    timeline.style.backgroundSize = `${percentagePosition}% 100%`;
    timeline.value = percentagePosition.toString();
}

audio.ontimeupdate = changeTimelinePosition;

function audioEnded() {
    playerButton.innerHTML = playIcon;
}

audio.onended = audioEnded;

function changeSeek() {
    const time = (parseFloat(timeline.value) * audio.duration) / 100;
    audio.currentTime = time;
}

timeline.addEventListener('change', changeSeek);





//
// Volume Control
//

var volumeInput = document.querySelector(".volume-input");
var volumeControl = document.querySelector(".volume-control");
var toggleIcon = volumeControl.querySelector(".toggle-icon");

function setVolume() {
    var volume = parseInt(volumeInput.value);
    volumeControl.className = "volume-control";

    if (volume > 0) {
        volumeControl.classList.add("volume-on");
        volumeControl.classList.add("volume-" + volume);
        toggleIcon.innerHTML = soundIcon; // Show sound icon
    } else {
        volumeControl.classList.remove("volume-on");
        toggleIcon.innerHTML = muteIcon; // Show mute icon
    }

    audio.volume = volume / 100;
}

volumeInput.addEventListener("input", setVolume);
setVolume();