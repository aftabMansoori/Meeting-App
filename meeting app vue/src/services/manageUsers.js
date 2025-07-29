// Dummy user management service - no API calls needed
const DUMMY_REGISTERED_USERS = [
  {
    id: 1,
    name: "John Doe",
    email: "john@meeting.com",
    role: "Developer",
    department: "Engineering",
    joinedAt: "2023-01-15T10:00:00Z",
    status: "active"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@meeting.com",
    role: "Senior Developer",
    department: "Engineering",
    joinedAt: "2023-02-20T14:30:00Z",
    status: "active"
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@meeting.com",
    role: "Backend Developer",
    department: "Engineering",
    joinedAt: "2023-03-10T09:15:00Z",
    status: "active"
  },
  {
    id: 4,
    name: "Alice Wilson",
    email: "alice@meeting.com",
    role: "UI/UX Designer",
    department: "Design",
    joinedAt: "2023-01-25T11:45:00Z",
    status: "active"
  },
  {
    id: 5,
    name: "Charlie Brown",
    email: "charlie@meeting.com",
    role: "Graphic Designer",
    department: "Design",
    joinedAt: "2023-04-05T16:20:00Z",
    status: "active"
  },
  {
    id: 6,
    name: "Eva Davis",
    email: "eva@meeting.com",
    role: "Marketing Manager",
    department: "Marketing",
    joinedAt: "2023-02-14T13:30:00Z",
    status: "active"
  },
  {
    id: 7,
    name: "Frank Miller",
    email: "frank@meeting.com",
    role: "Content Strategist",
    department: "Marketing",
    joinedAt: "2023-03-22T10:45:00Z",
    status: "active"
  },
  {
    id: 8,
    name: "Grace Lee",
    email: "grace@meeting.com",
    role: "Digital Marketing Specialist",
    department: "Marketing",
    joinedAt: "2023-05-10T12:00:00Z",
    status: "active"
  },
  {
    id: 9,
    name: "Admin User",
    email: "admin@meeting.com",
    role: "System Administrator",
    department: "IT",
    joinedAt: "2023-01-01T08:00:00Z",
    status: "active"
  },
  {
    id: 10,
    name: "Demo User",
    email: "demo@meeting.com",
    role: "Demo Account",
    department: "Demo",
    joinedAt: "2024-01-01T12:00:00Z",
    status: "active"
  }
];

const attendeesStr = (attendees) => {
  let attendeesStr = "";
  attendees.forEach((attendee) => {
    attendeesStr += attendee.email + ", ";
  });
  return attendeesStr;
};

const registeredUsers = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 400));
  
  return DUMMY_REGISTERED_USERS;
};

const excuseYourSelf = async (type, action, id) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Simulate removing user from meeting or team
  const message = action === "leave" 
    ? `Successfully left the ${type}` 
    : `Successfully joined the ${type}`;
  
  return {
    success: true,
    message: message,
    data: {
      type: type,
      action: action,
      id: id,
      timestamp: new Date().toISOString()
    }
  };
};

const addMember = async (type, action, id, userId) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 600));
  
  // Find the user being added
  const user = DUMMY_REGISTERED_USERS.find(u => u.id === parseInt(userId));
  
  if (!user) {
    throw new Error("User not found");
  }
  
  const message = action === "add" 
    ? `Successfully added ${user.name} to the ${type}` 
    : `Successfully removed ${user.name} from the ${type}`;
  
  return {
    success: true,
    message: message,
    data: {
      type: type,
      action: action,
      id: id,
      userId: userId,
      user: user,
      timestamp: new Date().toISOString()
    }
  };
};

export { attendeesStr, registeredUsers, excuseYourSelf, addMember };
