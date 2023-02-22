/**
 *
 * The Header component displays a header with a logo and search bar.
 * @return {JSX.Element} The Header component.
 * @example
 * <Header />
 */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Input } from "../input";
import ThePeaks from "../../assets/images/the_peaks.png";
import { updateQuery } from "../../redux/actions";
import {
  default as allRoutes,
  default as routes,
} from "../../routes/allRoutes";
import "./layout/header.scss";

const Header = () => {
  const query = useSelector((state) => state.query);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /**
   *
   * Handle query change event.
   * Navigate to the filter route and update the query in the store.
   * @param {string} value - The new query value.
   */
  const queryChangeHandle = (value) => {
    navigate(value === "" ? -1 : allRoutes.filter.route);
    dispatch(updateQuery(value));
  };
  return (
    <div className="header">
      <a href={routes.home.route} className="header__logo">
        <img src={ThePeaks} alt="the-peaks-logo" />
      </a>
      <div className="header__search">
        <Input
          value={query}
          setValue={queryChangeHandle}
          placeholder="Search all news"
        />
      </div>
    </div>
  );
};

export default Header;
