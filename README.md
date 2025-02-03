# Joystick UI

Joystick UI component and controls for mobile browsers. Demo available:

[<img width="423" alt="Screenshot 2025-02-03 at 01 29 35" src="https://github.com/user-attachments/assets/99301cf9-9ae0-46d8-bcc5-b3699e4d92a0" />](https://tatsmaki.github.io/joystick/demo/)

## Usage

```ts
import { createJoystick } from "joystick-ui";
import "joystick-ui/dist/main.css";

const { joystick, joystickControl } = createJoystick();
```

## Available props

| Prop               | Type    | Description                                                                                   |
| ------------------ | ------- | --------------------------------------------------------------------------------------------- |
| `joystickClass`    | string  | Customize joystick styles. Default `min-width: 180px`, `width: 20vw` and `aspect-ratio: 1/1`. |
| `thumbClass`       | string  | Customize moving thumb styles. Default `width: 36px` and `height: 36px`.                      |
| `enableTransition` | boolean | TODO. Transition is enabled by default.                                                       |

## WebGL

```ts
const animate = () => {
  console.log(joystickControl.direction); // or joystickControl.direction.normalize()
  requestAnimationFrame(animate);
};

animate();
```

## Browser

```ts
document.append(joystick);
```

## React

```tsx
return <div ref={(element) => element.append(joystick)} />;
```

## Solid

```tsx
return joystick;
```
