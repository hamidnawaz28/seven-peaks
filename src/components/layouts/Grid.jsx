/**
 * A React component that provides a basic structure for a web app.
 *
 * @param {object} props - The props object for the App component.
 * @param {ReactNode} props.children - The child elements to be rendered within the App component.
 *
 * @return {JSX.Element} The App component.
 */

const Grid = ({ children }) => {
  return <div className="grid">{children}</div>;
};
export default Grid;
