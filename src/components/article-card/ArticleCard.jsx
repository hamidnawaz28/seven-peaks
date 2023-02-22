/**
 * A React component that displays an article card.
 *
 * @param {object} props - The props object for the ArticleCard component.
 * @param {object} props.data - The article data to be displayed on the card.
 * @param {boolean} [props.showImage=true] - Whether or not to display the article image on the card.
 * @param {boolean} [props.showDetails=true] - Whether or not to display the article details on the card.
 *
 * @return {JSX.Element} The ArticleCard component.
 *
 * @example
 *
 * <ArticleCard data={articleData} showImage={false} showDetails={false} />
 */
import React from "react";
import ReactHtmlParser from "html-react-parser";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Image } from "../image";
import { Heading2, Paragraph } from "../typography";
import { default as allRoutes } from "routes/allRoutes";
import "./article-card.scss";

const ArticleCard = ({ data, showImage = true, showDetails = true }) => {
  const { imageUrl = "", headline = "", trailText = "" } = data?.fields;
  const url = data?.id;
  const navigate = useNavigate();

  /**
   * Handles the click event for the article card and navigates to the article page.
   *
   * @function
   * @private
   */
  const clickHandle = () => {
    navigate(`${allRoutes.article.route}?url=${url}`);
  };

  return (
    <div className="article-card" onClick={() => clickHandle()}>
      {showImage && <Image src={imageUrl} />}
      <div className="article-card__content">
        <div className="article-card__heading">
          <Heading2 text={headline} />
        </div>
        <div className="article-card__trail">
          {showDetails && <Paragraph text={ReactHtmlParser(trailText)} />}
        </div>
      </div>
    </div>
  );
};

ArticleCard.propTypes = {
  data: PropTypes.object.isRequired,
  showImage: PropTypes.bool,
  showDetails: PropTypes.bool,
};

export default ArticleCard;
