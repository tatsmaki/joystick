import { createJoystick } from "./main";
import "./development.css";

const { joystick, joystickControl } = createJoystick({
  joystickClass: "joystick",
  thumbClass: "thumb",
});

document.body.append(joystick);

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

document.body.append(text);

const animate = () => {
  const direction = joystickControl.direction.normalize();

  text.innerHTML = `x: ${direction.x.toFixed(2)}, y: ${direction.y.toFixed(2)}`;

  requestAnimationFrame(animate);
};

animate();
