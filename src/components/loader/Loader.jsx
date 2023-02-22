import { useSelector } from "react-redux";
import "./loader.scss";

/**
 * Component that displays the loading spinner.
 */

const LoaderContainer = () => {
  return (
    <div className="loader">
      <div className="loader__bar"></div>;
    </div>
  );
};

/**
 * Higher-order component that wraps the child components and shows the loading spinner if data is loading.
 * @param {Object} props - The component props.
 * @param {Boolean} [props.loadBelowParent=false] - If `true`, the loader is displayed below the child components.
 * @param {React.ReactNode} props.children - The child components to be rendered.
 * @returns {React.ReactNode} The wrapped components with the loader.
 */

const Loader = ({ children, loadBelowParent = false }) => {
  const loading = useSelector((store) => store.loading);
  const onlyLoader = loading && !loadBelowParent;

  return onlyLoader ? (
    <LoaderContainer />
  ) : (
    <div>
      {children}
      {loadBelowParent && <LoaderContainer />}
    </div>
  );
};
export default Loader;
