/**
 * An image component that displays an image with an optional alternative text.
 *
 * @function
 * @name Image
 *
 * @param {object} props - The component props.
 * @param {string} [props.src=ThePeaks] - The image source URL.
 * @param {string} [props.alt="peaks-thumbnail"] - The alternative text for the image.
 *
 * @returns {JSX.Element} The JSX element for the image component.
 *
 * @example
 * // Render an Image component with a custom source and alternative text.
 * <Image src="/path/to/image.png" alt="Example Image" />
 */
import PropTypes from "prop-types";
import ThePeaks from "../../assets/images/the_peaks.png";
import "./image.scss";

const Image = ({ src = ThePeaks, alt = "peaks-thumbnail" }) => {
  return (
    <div className="image">
      <img src={src === "" ? ThePeaks : src} alt={alt} className="image__tag" />
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

Image.defaultProps = {
  src: ThePeaks,
  alt: "peaks-thumbnail",
};

export default Image;
