# @zeecoder/react-resize-observer

A React component to use ResizeObserver instances.

## Install

```
yarn add @zeecoder/react-resize-observer
# or
npm install --save @zeecoder/react-resize-observer
```

## Usage

```js
const App = () => (
  <ResizeObserver>
    {size => (
      <div>
        My size is {size.width}x{size.height}
      </div>
    )}
  </ResizeObserver>
);
```

## Notes

- The children prop must be a function, through which the size changes are
  communicated
- If the optional `element` prop is given, the the component will observe the
  size changes of that given element, instead of looking for the root DOM node
  inside the component. (This avoids calling `ReactDOM.findDOMNode(this)`.)
- Uses [resize-observer-polyfill](https://github.com/que-etc/resize-observer-polyfill)
  internally, which falls back to the native ResizeObserver, if available

## Related

- [use-resize-observer](https://github.com/ZeeCoder/use-resize-observer)

## License

MIT
