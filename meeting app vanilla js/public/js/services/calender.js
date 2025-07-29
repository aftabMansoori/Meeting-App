import Config from "../config.js";
import { getToken } from "../services/auth.js";

const getCalenderMeets = async (selectedDate) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Get meetings from localStorage
  const meetings = JSON.parse(localStorage.getItem(Config.MEETINGS_KEY) || "[]");
  
  // Filter meetings by the selected date
  const meetingsForDate = meetings.filter(meeting => {
    return meeting.date === selectedDate;
  });
  
  // Sort meetings by time
  meetingsForDate.sort((a, b) => {
    return a.time.localeCompare(b.time);
  });
  
  return meetingsForDate;
};

export { getCalenderMeets };
