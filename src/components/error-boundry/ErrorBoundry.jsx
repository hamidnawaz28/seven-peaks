import React from "react";
import "../../pages/fallback";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div className="fallback">Something went wrong.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
