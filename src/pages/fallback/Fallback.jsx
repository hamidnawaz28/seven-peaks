/**
 * Fallback component.
 *
 * @component
 * @return {JSX.Element}
 */

import React from "react";
import "./fallback.scss";

const Fallback = () => {
  return (
    <div className="fallback">
      400 Error, page don't exists or have to access permissions.
    </div>
  );
};

Fallback.propTypes = {};
export default Fallback;
