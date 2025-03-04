import { createJoystick } from "../main";
import { arrow, renderArrow } from "./arrow";
import "./demo.css";
import { player, renderPlayer } from "./player";

const { joystick, joystickControl } = createJoystick({
  joystickClass: "joystick",
  thumbClass: "thumb",
});

document.body.append(joystick, player);

/**
 * Check for document events
 */
document.documentElement.style.touchAction = "none";
document.onpointermove = () => {
  console.warn("document pointermove");
};

/**
 * Display normalized Vector2
 */
const text = document.createElement("span");

text.className = "text";

player.append(text, arrow);

const animate = () => {
  const direction = joystickControl.direction.normalize();

  text.innerHTML = `x: ${direction.x.toFixed(2)}, y: ${direction.y.toFixed(2)}`;

  renderPlayer(direction);
  renderArrow(direction);

  requestAnimationFrame(animate);
};

animate();
