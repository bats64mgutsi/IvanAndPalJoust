import { setPage } from "./setPage.js";

// navigatge to start page
socket.on("players", (p) => {
    players = p;
    if (!gameInProgress) {
        playing = true;
        setPage("start");
    }
});

socket.on("name", (n) => {
    playerName = n;
});

// navigate to waiting page
socket.on("gameInProgress", () => {
    gameInProgress = true; // disable button
    playing = false;
    gameProgess();
});

// navigate to game page
socket.on("start", () => {
    gameInProgress = true;
    setPage("game");
});

// getting the threshold value
socket.on("threshhold", (thresh) => {
    console.log("poggers: ",thresh)
    setPlayerRate(thresh)
    threshhold = thresh;
});

// gets sent to the losing players
socket.on("losers", (l) => {
    losers = l;
    setPage("lose");
});

// gets sent to the losing players
socket.on("finished", async () => {
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    await sleep(5000); // waiting so everyone can see score
    gameFinished();

    // resetting state
    players = []; // the players
    playerName = ""; // players name
    gameInProgress = false;
    playing = false;
    threshhold = 0;
    losers = [];

    setPage("join");
});

function gameProgess() {
    let joinButton = document.getElementById("joinButton");
    joinButton.innerHTML = "Game in Progress please wait...";
    joinButton.id= "joinButtonNo";
    // joinButton.disabled = true;
    // joinButton.style.backgroundColor = 'brown'
}

function gameFinished() {
    let joinButton = document.getElementById("joinButton");
    joinButton.innerHTML = "Join game";
    joinButton.id= "joinButton";
    // joinButton.style.backgroundColor = 'rgb(42, 165, 54)';
    // joinButton.disabled = false;
}