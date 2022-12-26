# @zeecoder/react-resize-observer

This package is now **officially deprecated**.  
Use the [use-resize-observer](https://github.com/ZeeCoder/use-resize-observer) hook instead.

If you want the old API, then create a react component, like so:
```tsx
import useResizeObserver from "use-resize-observer";

export default function({ children }) {
  const { ref, width, height } = useResizeObserver();

  return children(ref, width, height);
}

```

Alternatively, see the last readme for v2 [here](https://github.com/ZeeCoder/react-resize-observer/tree/v2.0.0#zeecoderreact-resize-observer).
