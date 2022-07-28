import axiosConfig from "./axiosConfig";
import { errorHandler, successHandler } from "./helper";

const getCalenderMeetings = async (date) => {
  try {
    const response = await axiosConfig.get(`calendar?date=${date}`);
    return successHandler(response);
  } catch (err) {
    errorHandler(err);
  }
};

export { getCalenderMeetings };
