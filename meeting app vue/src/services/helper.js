import Vue from "vue";
import config from "@/config";

// Updated for dummy data - these functions now work with mock responses
const successHandler = (response) => {
  // Handle both API-style responses and direct dummy data
  if (response && response.data !== undefined) {
    return response.data;
  }
  // For dummy services that return data directly
  return response;
};

const errorHandler = (err) => {
  console.log(err);
  
  // Handle different error types
  let errorMessage = "There was an error";
  
  if (err.response && err.response.data && err.response.data.message) {
    // API-style error
    errorMessage = err.response.data.message;
  } else if (err.message) {
    // Standard JavaScript error
    errorMessage = err.message;
  } else if (typeof err === 'string') {
    // String error
    errorMessage = err;
  }
  
  Vue.$toast.error(errorMessage, {
    duration: config.toastDuration,
  });
};

export { successHandler, errorHandler };
