import { getAllUsers } from "./auth.js";
import Config from "../config.js";
import { getToken } from "../services/auth.js";

const getAllRegisterUsers = async () => {
  let registeredUsers = await getAllUsers();

  const membersListEmails = registeredUsers.map((user) => {
    return `<option value="${user.email}">${user.email}</option>`;
  });

  const membersListId = registeredUsers.map((user) => {
    return `<option value="${user._id}">${user.email}</option>`;
  });

  return { membersListEmails, membersListId };
};

const excuseYourSelf = async (type, action, id) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const currentUserId = localStorage.getItem("myId");
  
  if (type === "meetings") {
    const meetings = JSON.parse(localStorage.getItem(Config.MEETINGS_KEY) || "[]");
    const meetingIndex = meetings.findIndex(meeting => meeting._id === id);
    
    if (meetingIndex !== -1) {
      if (action === "leave") {
        // Remove current user from meeting members
        meetings[meetingIndex].members = meetings[meetingIndex].members.filter(
          memberId => memberId !== currentUserId
        );
      } else if (action === "join") {
        // Add current user to meeting members if not already present
        if (!meetings[meetingIndex].members.includes(currentUserId)) {
          meetings[meetingIndex].members.push(currentUserId);
        }
      }
      
      localStorage.setItem(Config.MEETINGS_KEY, JSON.stringify(meetings));
      return meetings[meetingIndex];
    }
  } else if (type === "teams") {
    const teams = JSON.parse(localStorage.getItem(Config.TEAMS_KEY) || "[]");
    const teamIndex = teams.findIndex(team => team._id === id);
    
    if (teamIndex !== -1) {
      if (action === "leave") {
        // Remove current user from team members
        teams[teamIndex].members = teams[teamIndex].members.filter(
          memberId => memberId !== currentUserId
        );
      } else if (action === "join") {
        // Add current user to team members if not already present
        if (!teams[teamIndex].members.includes(currentUserId)) {
          teams[teamIndex].members.push(currentUserId);
        }
      }
      
      localStorage.setItem(Config.TEAMS_KEY, JSON.stringify(teams));
      return teams[teamIndex];
    }
  }
  
  throw new Error("Item not found or invalid type");
};

const addUser = async (type, action, id, userId) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  if (type === "meetings") {
    const meetings = JSON.parse(localStorage.getItem(Config.MEETINGS_KEY) || "[]");
    const meetingIndex = meetings.findIndex(meeting => meeting._id === id);
    
    if (meetingIndex !== -1) {
      if (action === "add") {
        // Add user to meeting members if not already present
        if (!meetings[meetingIndex].members.includes(userId)) {
          meetings[meetingIndex].members.push(userId);
        }
      } else if (action === "remove") {
        // Remove user from meeting members
        meetings[meetingIndex].members = meetings[meetingIndex].members.filter(
          memberId => memberId !== userId
        );
      }
      
      localStorage.setItem(Config.MEETINGS_KEY, JSON.stringify(meetings));
      return meetings[meetingIndex];
    }
  } else if (type === "teams") {
    const teams = JSON.parse(localStorage.getItem(Config.TEAMS_KEY) || "[]");
    const teamIndex = teams.findIndex(team => team._id === id);
    
    if (teamIndex !== -1) {
      if (action === "add") {
        // Add user to team members if not already present
        if (!teams[teamIndex].members.includes(userId)) {
          teams[teamIndex].members.push(userId);
        }
      } else if (action === "remove") {
        // Remove user from team members
        teams[teamIndex].members = teams[teamIndex].members.filter(
          memberId => memberId !== userId
        );
      }
      
      localStorage.setItem(Config.TEAMS_KEY, JSON.stringify(teams));
      return teams[teamIndex];
    }
  }
  
  throw new Error("Item not found or invalid type");
};

export { getAllRegisterUsers, excuseYourSelf, addUser };
