import axiosConfig from "./axiosConfig";

const getTeams = async () => {
  const response = await axiosConfig.get("/teams");

  if (response.status !== 200) throw Error;

  return response.data;
};

const addTeam = async (team) => {
  const response = await axiosConfig.post("/teams", team);

  if (response.status !== 200) throw Error;

  return response;
};

export { getTeams, addTeam };
