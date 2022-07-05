const path = require("path");
const express = require("express");
const { join } = require("path");
const { statusSuccess } = require("../utils/utils");
const GameRouter = express.Router();
const fs = require("fs");
const { TouchPlayer, RemoveDeadPlayers } = require("./queueRoutes");
const { IsDone, SetIsDone } = require("./state_game");
const { RunOnHttp2Only } = require("./utils/http2_bridge");

let currentSong = "cottonEyedJoe.m4a";

GameRouter.get("/", function (req, res) {
  RunOnHttp2Only(function () {
    res.push(
      ["/scripts/game.js", "/style.css", "/arrow.svg"],
      path.join(__dirname, "../../frontend")
    );
  });

  res.writeHead(200);
  res.end(fs.readFileSync(path.join(__dirname, "../../frontend/game.html")));
});

GameRouter.put("/start", function (req, res) {
  if (IsDone() == true) {
    SetIsDone(false);
  }
  res.json(statusSuccess("Poggers"));
});

GameRouter.get("/state/:name", function (req, res) {
  const playerName = req.params.name;
  TouchPlayer(playerName);
  RemoveDeadPlayers();

  temp = {
    isDone: IsDone(),
    Threshold: 50,
    closeReason: "",
  };
  res.json(statusSuccess(temp));
});

GameRouter.get("/song", function (req, res) {
  if (currentSong == "") {
    // Logic for multiple songs
  }
  res.json(statusSuccess(path.join(__dirname, currentSong)));
});

module.exports = { GameRouter };
