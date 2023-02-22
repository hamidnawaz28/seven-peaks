import axios from "axios";
import { BASE_URL } from "./urls";
import * as dotenv from "dotenv";

dotenv.config();

axios.defaults.baseURL = BASE_URL;

export const get = async (url, config = {}) => {
  try {
    let res = null;
    res = await axios.get(url, { ...config });
    return {
      success: res.status,
      data: res.data,
      message: res.statusText,
    };
  } catch (error) {
    return parseErrors(error.response);
  }
};

const errorMessage = "An error occured while processing your request.";
const parseErrors = (errObj) => {
  try {
    let message = "";
    const { errors } = errObj.data;
    switch (errObj.status) {
      case 400:
        errors.map((obj, index) => {
          message = `${message + obj.param.toUpperCase()}: ${obj.msg}`;
          message = index === errors.length - 1 ? message : `${message} ,`;
          return message;
        });
        return {
          success: false,
          message,
        };
      case 401:
        return {
          success: false,
          message:
            errObj.data && errObj.statusText
              ? errObj.statusText
              : "You are not authorized. Please login",
        };
      case 403:
      case 404:
      case 409:
      case 422:
        return {
          success: false,
          message: errObj.data
            ? errObj.statusText
            : errObj.message
            ? errObj.message
            : errorMessage,
        };
      default:
        return {
          success: false,
          message: errorMessage,
        };
    }
  } catch (error) {
    return {
      success: false,
      message: errorMessage,
    };
  }
};
