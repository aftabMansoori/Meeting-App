import axiosConfig from "./axiosConfig";

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
  const response = await axiosConfig.patch(
    `/${type}/${id}?` +
      new URLSearchParams({
        action: action,
      })
  );

  if (response.status !== 200) throw Error;

  return response;
};

const addMember = async (type, action, id, userId) => {
  const response = await axiosConfig.patch(
    `/${type}/${id}?` +
      new URLSearchParams({
        action: action,
        userId: userId,
      })
  );

  if (response.status !== 200) throw Error;

  return response;
};

export { attendeesStr, registeredUsers, excuseYourSelf, addMember };
