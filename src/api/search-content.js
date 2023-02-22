import { SEARCH_URL } from "./urls";
import { get } from "./http-methods";
import * as dotenv from "dotenv";
dotenv.config();

const guardianAccessKey =
  process.env.REACT_APP_SECRET_KEY || "cec30bc4-5b61-4f6c-8b85-81e8dcd76ad6";

const searchContent = async (
  section,
  orderBy = "newest",
  pageSize = 10,
  query = "",
  haveQuery = false,
  page = 1
) => {
  return await get(
    `${SEARCH_URL}?api-key=${guardianAccessKey}&${
      haveQuery ? `q=${query}` : `section=${section}`
    }&page=${page}&page-size=${pageSize}&order-by=${orderBy}&show-fields=headline,trailText,bodyText&show-elements=all`
  );
};

const searchItem = async (url) => {
  return await get(
    `${url}?api-key=${guardianAccessKey}&show-fields=headline,trailText,bodyText,body&show-elements=all`
  );
};
export { searchContent, searchItem };
