import axiosConfig from "./axiosConfig";
import { successHandler, errorHandler } from "./helper";

const attendeesStr = (attendees) => {
  let attendeesStr = "";
  attendees.forEach((attendee) => {
    attendeesStr += attendee.email + ", ";
  });
  return attendeesStr;
};

const registeredUsers = async () => {
  const response = await axiosConfig.get("/users");

  if (response.status !== 200) throw Error;

  return response.data;
};

const excuseYourSelf = async (type, action, id) => {
  try {
    const response = await axiosConfig.patch(
      `/${type}/${id}?` +
        new URLSearchParams({
          action: action,
        })
    );

    return successHandler(response);
  } catch (err) {
    errorHandler(err);
  }
};

const addMember = async (type, action, id, userId) => {
  try {
    const response = await axiosConfig.patch(
      `/${type}/${id}?` +
        new URLSearchParams({
          action: action,
          userId: userId,
        })
    );

    return successHandler(response);
  } catch (err) {
    errorHandler(err);
  }
};

export { attendeesStr, registeredUsers, excuseYourSelf, addMember };
