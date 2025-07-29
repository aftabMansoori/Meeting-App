// Dummy teams service - no API calls needed
const DUMMY_TEAMS = [
  {
    id: 1,
    name: "Development Team",
    description: "Frontend and Backend Developers",
    members: [
      { id: 1, name: "John Doe", email: "john@meeting.com" },
      { id: 2, name: "Jane Smith", email: "jane@meeting.com" },
      { id: 3, name: "Bob Johnson", email: "bob@meeting.com" }
    ],
    createdAt: "2024-01-15T10:00:00Z"
  },
  {
    id: 2,
    name: "Design Team",
    description: "UI/UX Designers and Creative Team",
    members: [
      { id: 4, name: "Alice Wilson", email: "alice@meeting.com" },
      { id: 5, name: "Charlie Brown", email: "charlie@meeting.com" }
    ],
    createdAt: "2024-01-20T14:30:00Z"
  },
  {
    id: 3,
    name: "Marketing Team",
    description: "Digital Marketing and Content Strategy",
    members: [
      { id: 6, name: "Eva Davis", email: "eva@meeting.com" },
      { id: 7, name: "Frank Miller", email: "frank@meeting.com" },
      { id: 8, name: "Grace Lee", email: "grace@meeting.com" }
    ],
    createdAt: "2024-01-25T09:15:00Z"
  }
];

let nextTeamId = 4;

const getTeams = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return {
    success: true,
    data: [...DUMMY_TEAMS]
  };
};

const addTeam = async (team) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const newTeam = {
    id: nextTeamId++,
    name: team.name,
    description: team.description || "",
    members: team.members || [],
    createdAt: new Date().toISOString()
  };
  
  DUMMY_TEAMS.push(newTeam);
  
  return {
    success: true,
    data: newTeam
  };
};

export { getTeams, addTeam };
