import classes from "./joystick.module.css";
import { JoystickControl } from "./joystick.control";
import { CreateJoystickArg, JoystickProps } from "./joystick.types";
import { Vector2 } from "./vector2";

const Joystick = (props: JoystickProps) => {
  const { joystickControl, joystickClass, thumbClass } = props;

  const joystick = document.createElement("div");
  const thumb = document.createElement("div");

  joystick.classList.add(classes.joystick);
  joystickClass && joystick.classList.add(joystickClass);
  thumb.classList.add(classes.thumb);
  thumbClass && thumb.classList.add(thumbClass);
  joystick.append(thumb);

  let joystickRadius = 0;
  let thumbRadius = 0;
  const start = new Vector2();
  const end = new Vector2();

  const moveThumb = () => {
    let dx = end.x - start.x;
    let dy = end.y - start.y;

    const distance = Math.sqrt(dx ** 2 + dy ** 2);
    const radius = joystickRadius - thumbRadius;

    if (distance > radius) {
      const scale = radius / distance;

      dx = dx * scale;
      dy = dy * scale;
    }

    thumb.style.setProperty("--dx", dx + "px");
    thumb.style.setProperty("--dy", dy + "px");
    joystickControl.direction.set(dx, -dy);
  };

  const onPointerMove = (event: PointerEvent) => {
    end.set(event.clientX, event.clientY);

    moveThumb();
  };

  const onPointerUp = () => {
    start.set(0, 0);
    end.set(0, 0);
    moveThumb();

    document.removeEventListener("pointermove", onPointerMove);
    document.removeEventListener("pointerup", onPointerUp);
    thumb.style.transition = "transform 0.1s";
  };

  const onPointerDown = (event: PointerEvent) => {
    event.stopImmediatePropagation();

    const rect = thumb.getBoundingClientRect();

    thumbRadius = rect.width / 2;
    joystickRadius = joystick.clientWidth / 2;

    start.set(rect.x + thumbRadius, rect.y + thumbRadius);
    end.set(event.clientX, event.clientY);
    moveThumb();

    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerup", onPointerUp);
    thumb.style.transition = "none";
  };

  joystick.onpointerdown = onPointerDown;

  return joystick;
};

export const createJoystick = (props?: CreateJoystickArg) => {
  const joystickControl = new JoystickControl();
  const joystick = Joystick({ ...props, joystickControl });

  return {
    joystick,
    joystickControl,
  };
};
