import axiosConfig from "./axiosConfig";
import { errorHandler, successHandler } from "./helper";

const searchMeetings = async (period, search) => {
  try {
    const response = await axiosConfig.get(
      "/meetings?" +
        new URLSearchParams({
          period,
          search,
        })
    );

    return successHandler(response);
  } catch (err) {
    errorHandler(err);
  }
};

const addMeeting = async (meeting) => {
  try {
    const response = await axiosConfig.post("/meetings", meeting);
    return successHandler(response);
  } catch (err) {
    errorHandler(err);
  }
};

export { searchMeetings, addMeeting };
