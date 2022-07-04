import { makeUniquePlayer } from "./api_layer.js";
import { navigateTo, START_PAGE } from "./navigation.js";

/**
 * Called when the join button is clicked.
 */
window.join = async function join() {
  const playerId = await makeUniquePlayer();
  navigateTo(START_PAGE, { playerId: playerId });
};
