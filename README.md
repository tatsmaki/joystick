# Joystick UI

Joystick UI component and controls for mobile browsers.

## Usage

```ts
import { createJoystick } from "joystick-ui";
import "joystick-ui/dist/main.css";

const { joystick, joystickControl } = createJoystick();
```

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
