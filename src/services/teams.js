import axiosConfig from "./axiosConfig";
import { errorHandler, successHandler } from "./helper";

const getTeams = async () => {
  try {
    const response = await axiosConfig.get("/teams");
    return successHandler(response);
  } catch (err) {
    errorHandler(err);
  }
};

const addTeam = async (team) => {
  try {
    const response = await axiosConfig.post("/teams", team);
    return successHandler(response);
  } catch (err) {
    errorHandler(err);
  }
};

export { getTeams, addTeam };
