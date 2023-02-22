/**
 * A higher-order component that wraps a component with a React Profiler
 * component and logs rendering performance metrics to the console.
 *
 * @param {React.Component} Component - The component to wrap.
 * @returns {React.Component} A new component that renders the wrapped component
 * with a React Profiler component and logs performance metrics to the console.
 */

import React, { Profiler } from "react";

import PropTypes from "prop-types";

const onRenderCallbackPropTypes = PropTypes.shape({
  id: PropTypes.string,
  phase: PropTypes.oneOf(["mount", "update"]),
  actualDuration: PropTypes.number,
  baseDuration: PropTypes.number,
  startTime: PropTypes.number,
  commitTime: PropTypes.number,
  interactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any,
      name: PropTypes.string,
      timestamp: PropTypes.number,
    })
  ),
});

const ProfilerLogsPropTypes = (Component) => {
  return (
    <Profiler onRender={onRenderCallbackPropTypes}>
      <Component />
    </Profiler>
  );
};

ProfilerLogsPropTypes.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default ProfilerLogsPropTypes;
