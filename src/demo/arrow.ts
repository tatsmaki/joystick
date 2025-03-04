import { Vector2 } from "../vector2";
import "./arrow.css";

export const arrow = document.createElement("div");

arrow.className = "arrow";

export const renderArrow = (direction: Vector2) => {
  arrow.style.opacity = "1";

  if (!direction.length()) {
    arrow.style.opacity = "0";

    return;
  }

  const angle = Math.atan2(-direction.y, direction.x);

  arrow.style.transform = `rotate(${angle * (180 / Math.PI)}deg)`;
  arrow.style.transformOrigin = "left";
};
