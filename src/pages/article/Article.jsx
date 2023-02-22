/**
 * Article component.
 *
 * @component
 * @return {JSX.Element}
 */

import React, { useEffect } from "react";
import ReactHtmlParser from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  Divider,
  Heading1,
  Heading3,
  Image,
  Loader,
  Paragraph,
} from "components";
import { getContentRequest } from "redux/actions";
import "./article.scss";

const Article = () => {
  // Get search parameters from the URL
  let [searchParms] = useSearchParams();
  const url = searchParms.get("url");

  // Redux dispatch
  const dispatch = useDispatch();

  // Redux selectors
  const articleContent = useSelector((store) => store.articleContent);

  const content = articleContent?.data?.response?.content;

  const webTitle = content?.webTitle;
  const webPublicationDate = content?.webPublicationDate;

  const fields = content?.fields;
  const headline = fields?.headline;
  const imageUrl = fields?.imageUrl;
  const bodyText = fields?.body;
  const bodyTextArray = bodyText?.split("•") || [];

  useEffect(() => {
    dispatch(getContentRequest(url));
  }, [url]);

  return (
    <Loader>
      <div className="article">
        <div className="article__content">
          <Paragraph text={webPublicationDate} />
          <Heading1 text={headline} />
          <Heading3 text={webTitle} />
          <Divider />
          <div className="article__body">
            {bodyTextArray.map((text) => ReactHtmlParser(text))}
          </div>
        </div>
        <div className="article__media">
          <Image src={imageUrl} />
          <Paragraph text={headline} opacity={0.5} />
        </div>
      </div>
    </Loader>
  );
};

Article.propTypes = {};
export default Article;
