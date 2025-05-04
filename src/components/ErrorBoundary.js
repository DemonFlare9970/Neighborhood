import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    this.setState({ errorMessage: error.toString() });
  }

  render() {
    if (this.state.hasError) {
      return <div style={{ color: 'red' }}><h1>Something went wrong: {this.state.errorMessage}</h1></div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
