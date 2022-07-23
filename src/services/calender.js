import axiosConfig from "./axiosConfig";

const getCalenderMeetings = async (date) => {
  const response = await axiosConfig.get(`calendar?date=${date}`);

  if (response.status !== 200) {
    throw Error();
  }

  return response.data;
};

export { getCalenderMeetings };
