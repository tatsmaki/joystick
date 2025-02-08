import { JoystickControl } from "./joystick.control";

export type CreateJoystickArg = {
  joystickClass?: string;
  thumbClass?: string;
};

export type JoystickProps = CreateJoystickArg & {
  joystickControl: JoystickControl;
};
