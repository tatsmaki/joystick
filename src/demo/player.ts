import { Vector2 } from "../vector2";
import "./player.css";

export const player = document.createElement("div");

let dx = 0;
let dy = 0;

player.className = "player";

export const renderPlayer = (direction: Vector2) => {
  dx += direction.x;
  dy -= direction.y;

  player.style.setProperty("--x", `${dx}px`);
  player.style.setProperty("--y", `${dy}px`);
};
