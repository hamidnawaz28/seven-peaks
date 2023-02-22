import { useEffect, useState } from "react";

/**
 * Custom hook that detects whether the user has scrolled to the bottom of the page.
 *
 * @returns {boolean} Whether the user has scrolled to the bottom of the page.
 */
const useScroll = () => {
  // Initialize state to false since user has not yet scrolled to bottom
  const [atBottom, setAtBottom] = useState(false);

  // Handler function that checks whether user has scrolled to bottom
  const handleScroll = () => {
    // Get references to body and html elements
    const { scrollHeight: bodyScrollHeight, offsetHeight: bodyOffsetHeight } =
      document.body;
    const { clientHeight, scrollHeight, offsetHeight } =
      document.documentElement;

    // Get height of viewport and entire document
    const windowHeight =
      "innerHeight" in window ? window.innerHeight : clientHeight;

    const docHeight = Math.max(
      bodyScrollHeight,
      bodyOffsetHeight,
      clientHeight,
      scrollHeight,
      offsetHeight
    );

    // Check if user has scrolled to bottom of page
    const windowBottom = windowHeight + window.pageYOffset;
    windowBottom >= docHeight ? setAtBottom(true) : setAtBottom(false);
  };

  // Add scroll event listener when component mounts and remove it when component unmounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Return whether user has scrolled to bottom of page
  return atBottom;
};

export default useScroll;
