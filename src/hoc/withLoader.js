import { Loader } from "../components";
import { useSelector } from "react-redux";
import React from "react";

/**
 * Higher-Order Component that wraps a component with a loader component
 * @param {React.ComponentType} Component - the component to be wrapped
 * @returns {React.ComponentType} - the wrapped component
 */
function withLoader(Component) {
  /**
   * Component that shows the loader while the data is being loaded.
   * @param {Object} props - the props passed to the wrapped component
   * @returns {JSX.Element} - the wrapped component or the loader
   */
  return function WithLoadingComponent({ ...props }) {
    const loading = useSelector((store) => store.loading);
    if (!loading) return <Component {...props} />;
    return <Loader />;
  };
}

export default withLoader;
