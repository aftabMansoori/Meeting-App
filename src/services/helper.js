import Vue from "vue";
import config from "@/config";

const successHandler = (response) => response.data;

const errorHandler = (err) => {
  console.log(err);
  Vue.$toast.error(err.response.data.message || "There was an error", {
    duration: config.toastDuration,
  });
};

export { successHandler, errorHandler };
