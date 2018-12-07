import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import ResizeObserver from "resize-observer-polyfill";

class ResizeObserverComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      height: 0
    };
  }

  observeIfNeeded() {
    const element = this.props.element || ReactDOM.findDOMNode(this);

    if (element && this.element !== element) {
      // clean up after a previous element
      if (this.element) {
        this.unobserve(this.element);
      }

      // start observing the new element
      this.observe(element);
    }
  }

  observe(element) {
    this.resizeObserver = new ResizeObserver(entries => {
      // Since we only observe the one element, we don't need to loop over the
      // array
      if (!Array.isArray(entries) || !entries.length) {
        return;
      }

      const entry = entries[0];

      this.setState({
        width: entry.contentRect.width,
        height: entry.contentRect.height
      });
    });

    this.resizeObserver.observe(element);
    this.element = element;
  }

  unobserve(element) {
    this.resizeObserver.unobserve(element);
  }

  componentDidMount() {
    this.observeIfNeeded();
  }

  componentDidUpdate() {
    this.observeIfNeeded();
  }

  componentWillUnmount() {
    if (this.element) {
      this.unobserve(this.element);
    }
  }

  render() {
    const size = {
      width: this.state.width,
      height: this.state.height
    };

    return this.props.children(size);
  }
}

ResizeObserverComponent.propTypes = {
  children: PropTypes.func.isRequired,
  element: PropTypes.object
};

export default ResizeObserverComponent;
