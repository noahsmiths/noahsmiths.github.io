let player;

const loadVideo = () => {
    player = new YT.Player('player', {
        height: screen.availHeight * 0.7,
        width: screen.availWidth * 0.95,
        videoId: 'dQw4w9WgXcQ',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': (e) => {
                e.target.playVideo();
                if (!localStorage.getItem("loadedPreviously")) {
                    localStorage.setItem("loadedPreviously", true);
                    window.location.reload();
                } else {
                    document.getElementById("initial-content").style.display = "none";
                    document.getElementById("vid-container").style.display = "initial";
                }
            },
        }
    });
}

document.getElementById("load-button").addEventListener("click", loadVideo);