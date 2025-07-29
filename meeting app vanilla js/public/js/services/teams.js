import Config from "../config.js";
import { getToken } from "../services/auth.js";

// Initialize dummy teams data
const initializeDummyTeams = () => {
  const existingTeams = localStorage.getItem(Config.TEAMS_KEY);
  if (!existingTeams) {
    const dummyTeams = [
      {
        _id: "team1",
        name: "Development Team",
        description: "Frontend and backend developers working on core product features",
        members: ["user1", "user2", "user3"],
        createdBy: "user1",
        createdAt: "2024-01-08T14:30:00Z"
      },
      {
        _id: "team2",
        name: "Design Team", 
        description: "UI/UX designers creating user-centered designs",
        members: ["user2", "user4"],
        createdBy: "user2",
        createdAt: "2024-01-10T09:15:00Z"
      },
      {
        _id: "team3",
        name: "Marketing Team",
        description: "Marketing specialists focusing on growth and user acquisition",
        members: ["user3", "user4"], 
        createdBy: "user3",
        createdAt: "2024-01-12T16:45:00Z"
      },
      {
        _id: "team4",
        name: "Management Team",
        description: "Project managers and team leads coordinating cross-functional efforts",
        members: ["user1", "user4"],
        createdBy: "user4", 
        createdAt: "2024-01-14T11:00:00Z"
      }
    ];
    localStorage.setItem(Config.TEAMS_KEY, JSON.stringify(dummyTeams));
  }
};

// Initialize dummy data on load
initializeDummyTeams();

const getAllTeams = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const teams = JSON.parse(localStorage.getItem(Config.TEAMS_KEY) || "[]");
  
  return teams;
};

const addTeam = async (teamDetails) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const teams = JSON.parse(localStorage.getItem(Config.TEAMS_KEY) || "[]");
  const currentUserId = localStorage.getItem("myId");
  
  // Create new team
  const newTeam = {
    _id: `team${Date.now()}`,
    name: teamDetails.name,
    description: teamDetails.description,
    members: teamDetails.members || [],
    createdBy: currentUserId,
    createdAt: new Date().toISOString()
  };
  
  teams.push(newTeam);
  localStorage.setItem(Config.TEAMS_KEY, JSON.stringify(teams));
  
  console.log(newTeam);
  
  return newTeam;
};

export { getAllTeams, addTeam };
