import PropTypes from "prop-types";
import React from "react";
import "./typography.scss";

/**
 * A React component that displays a top-level heading (H1).
 *
 * @param {object} props - The props object for the Heading1 component.
 * @param {string} props.text - The text to be displayed in the heading.
 * @param {number} [props.padding=0] - The padding around the heading.
 *
 * @return {JSX.Element} The Heading1 component.
 *
 * @example
 *
 * <Heading1 text="Main Heading" padding={10} />
 */
const Heading1 = ({ text, padding = 0 }) => {
  return (
    <h1 className="text-h1 text" style={{ padding: `0 ${padding}px` }}>
      {text}
    </h1>
  );
};

Heading1.propTypes = {
  text: PropTypes.string.isRequired,
  padding: PropTypes.number,
};

/**
 * A React component that displays a second-level heading (H2).
 *
 * @param {object} props - The props object for the Heading2 component.
 * @param {string} props.text - The text to be displayed in the heading.
 * @param {number} [props.padding=0] - The padding around the heading.
 *
 * @return {JSX.Element} The Heading2 component.
 *
 * @example
 *
 * <Heading2 text="Sub Heading" padding={5} />
 */
const Heading2 = ({ text, padding = 0 }) => {
  return (
    <h2 className="text-h2 text" style={{ padding: `0 ${padding}px` }}>
      {text}
    </h2>
  );
};

Heading2.propTypes = {
  text: PropTypes.string.isRequired,
  padding: PropTypes.number,
};

/**
 * A React component that displays a third-level heading (H3).
 *
 * @param {object} props - The props object for the Heading3 component.
 * @param {string} props.text - The text to be displayed in the heading.
 * @param {number} [props.padding=0] - The padding around the heading.
 *
 * @return {JSX.Element} The Heading3 component.
 *
 * @example
 *
 * <Heading3 text="Sub Sub Heading" />
 */
const Heading3 = ({ text, padding = 0 }) => {
  return (
    <h3 className="text-h3 text" style={{ padding: `0 ${padding}px` }}>
      {text}
    </h3>
  );
};

Heading3.propTypes = {
  text: PropTypes.string.isRequired,
  padding: PropTypes.number,
};

/**
 * A React component that displays a paragraph.
 *
 * @param {object} props - The props object for the Paragraph component.
 * @param {string} props.text - The text to be displayed in the paragraph.
 * @param {number} [props.padding=0] - The padding around the paragraph.
 * @param {number} [props.opacity=1] - The opacity of the paragraph.
 *
 * @return {JSX.Element} The Paragraph component.
 *
 * @example
 *
 * <Paragraph text="Lorem ipsum dolor sit amet" padding={5} opacity={0.8} />
 */
const Paragraph = ({ text, padding = 0, opacity = 1 }) => {
  return (
    <p
      className="text-paragraph text"
      style={{ padding: `0 ${padding}px`, opacity }}
    >
      {text}
    </p>
  );
};

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
  padding: PropTypes.number,
  opacity: PropTypes.number,
};

export { Heading1, Heading2, Heading3, Paragraph };
