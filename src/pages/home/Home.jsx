/**
 * Home component.
 *
 * Renders the top stories and sports articles based on the selected filter.
 *
 * @component
 * @return {JSX.Element}
 */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ArticleCard, Heading1, Loader, Select } from "components";
import { getArticlesListRequest } from "redux/actions";
import { FILTERS } from "utils/constants";

import "./home.scss";

const Home = () => {
  // State variables
  const [filter, setFilter] = useState(FILTERS[0].value);

  // Redux selectors
  const articlesList = useSelector((store) => store.articlesList);
  const getData = (value) => articlesList?.data?.[value]?.response?.results;
  const newsData = getData("newsData");
  const sportsData = getData("sportsData");

  // Redux dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticlesListRequest({ filter }));
  }, [filter]);

  return (
    <Loader>
      <div className="news">
        <div className="top-stories">
          <div className="top-stories__header">
            <Heading1 text="Top stories" />
            <Select value={filter} setValue={setFilter} options={FILTERS} />
          </div>
          <div className="top-stories__content news-card-container">
            {newsData?.map((news, id) => (
              <ArticleCard data={news} key={id} />
            ))}
          </div>
        </div>
        <div className="sports">
          <div className="sports__header">
            <Heading1 text="Sports" />
          </div>
          <div className="card-container">
            {sportsData?.map((news, id) => (
              <ArticleCard data={news} key={id} />
            ))}
          </div>
        </div>
      </div>
    </Loader>
  );
};

Home.propTypes = {};
export default Home;
