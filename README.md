# @zeecoder/react-resize-observer

A React component that allows you to use a ResizeObserver to measure an element's size.

[![npm version](https://badge.fury.io/js/%40zeecoder%2Freact-resize-observer.svg)](https://npmjs.com/package/@zeecoder/react-resize-observer)
[![build](https://travis-ci.org/ZeeCoder/react-resize-observer.svg?branch=master)](https://travis-ci.org/ZeeCoder/react-resize-observer)

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
    {(ref, width, height) => (
      <div ref={ref}>
        My size is {width}x{height}
      </div>
    )}
  </ResizeObserver>
);
```

## Notes

- Uses [resize-observer-polyfill](https://github.com/que-etc/resize-observer-polyfill)
  internally, which falls back to the native ResizeObserver, if available.

## Related

- [use-resize-observer](https://github.com/ZeeCoder/use-resize-observer)
- [@zeecoder/container-query](https://github.com/ZeeCoder/container-query)

## License

MIT
