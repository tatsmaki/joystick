# Joystick UI

Joystick UI component and controls for mobile browsers. Demo available:

https://joystick-demo.vercel.app/

[<img alt="Joystick demo" src="https://github.com/user-attachments/assets/95d50199-4dfb-42f8-9c05-92c078ba389a" />]([https://joystick-demo.vercel.app/])

## Usage

```ts
import { createJoystick } from "joystick-ui";
import "joystick-ui/dist/main.css";

const { joystick, joystickControl } = createJoystick();
```

## Customization

| Prop               | Type    | Description                                                              |
| ------------------ | ------- | ------------------------------------------------------------------------ |
| `joystickClass`    | string  | Customize joystick styles. Default `min-width: 180px` and `width: 20vw`. |
| `thumbClass`       | string  | Customize moving thumb styles. Default `width: 36px` and `height: 36px`. |
| `enableTransition` | boolean | TODO. Transition is enabled by default.                                  |

## WebGL

```ts
const animate = () => {
  console.log(joystickControl.direction.normalize());
  requestAnimationFrame(animate);
};

animate();
```

## Browser

`joystick` is a DOM element which can be rendered by any library or framework.

```ts
document.body.append(joystick);
```

## React

```tsx
return <div ref={(element) => element.append(joystick)} />;
```

## Solid

```tsx
return joystick;
```
