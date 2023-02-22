/**
 * Filter component.
 *
 * @component
 * @return {JSX.Element}
 */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ArticleCard, Heading1, Loader, Select } from "components";
import { getArticlesListRequest } from "redux/actions";
import { FILTERS } from "utils/constants";
import { useScroll } from "hooks";
import "./filter.scss";

const Filter = () => {
  // State variables
  const [filter, setFilter] = useState(FILTERS[0].value);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  // Redux selectors
  const query = useSelector((state) => state.query);
  const articlesList = useSelector((store) => store.articlesList);
  const searchData = articlesList?.data?.searchData?.response;

  // Redux dispatch
  const dispatch = useDispatch();

  // Custom hook for detecting when user has scrolled to the bottom of the page
  const isAtBottom = useScroll();

  // Fetch articles on initial render or when filter and/or query changes
  useEffect(() => {
    dispatch(getArticlesListRequest({ filter, query, haveQuery: true }));
  }, [filter, query, dispatch]);

  // Fetch next page of articles when user scrolls to the bottom of the page
  useEffect(() => {
    if (isAtBottom && pages !== currentPage) {
      dispatch(
        getArticlesListRequest({
          filter,
          query,
          isAtBottom,
          nextPage: currentPage + 1,
          haveQuery: true,
        })
      );
    }
  }, [isAtBottom, dispatch]);

  // Update page state and currentPage variables when articles data changes
  useEffect(() => {
    const newPage = searchData?.pages || 0;
    const newCurrentPage = searchData?.currentPage || 0;

    setPages(newPage);
    setCurrentPage(newCurrentPage);
  }, [searchData]);

  // Render the Filter component

  return (
    <Loader loadBelowParent={isAtBottom}>
      <div className="filter">
        <div className="filter__header">
          <Heading1 text="Search Results" />
          <Select value={filter} setValue={setFilter} options={FILTERS} />
        </div>
        <div className="filter_card_container">
          {searchData?.results?.map((news, id) => (
            <ArticleCard key={id} data={news} />
          ))}
        </div>
      </div>
    </Loader>
  );
};

Filter.propTypes = {};
export default Filter;
