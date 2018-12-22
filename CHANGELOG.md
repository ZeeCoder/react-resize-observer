# CHANGELOG

## 2.0.0

- [BREAKING] ResizeObserver now always expects a function as a child, to which
  it passes in a reference as an argument that can be added to the element to be
  observed.
- [BREAKING] Returning width and height as the second and third parameters
  instead of as part of an object
- [BREAKING] Now reports 1x1 size on before the observer is triggered instead of
  0x0
- Added tests using Karma

## 1.0.1

- Relaxed the prop-types dep

## 1.0.0

- Initial release
