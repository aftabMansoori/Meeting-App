import config from "@/config";
import axios from "axios";

const login = async (credentials) => {
  let res = await axios.post(`${config.baseUrl}/auth/login`, credentials, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.status !== 200) throw Error;

  return res;
};

const register = async (user) => {
  let response = await axios
    .post(`${config.baseUrl}/auth/register`, user, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(() => {
      return "success";
    })
    .catch((err) => {
      return err.response.data;
    });

  return response;
  // try {
  //   let res = await axios.post(`${config.baseUrl}/auth/register`, user, {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   return "success";
  // } catch (err) {
  //   console.log(err);
  //   return err.response.data;
  // }
};

export { login, register };
