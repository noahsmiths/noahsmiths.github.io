let player;

const loadVideo = () => {
    player = new YT.Player('player', {
        height: screen.height * 0.8,
        width: screen.width * 0.95,
        videoId: 'dQw4w9WgXcQ',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': (e) => {
                e.target.playVideo();
                document.getElementById("initial-content").style.display = "none";
                document.getElementById("vid-container").style.display = "initial";
            },
        }
    });
}

document.getElementById("load-button").addEventListener("click", loadVideo);