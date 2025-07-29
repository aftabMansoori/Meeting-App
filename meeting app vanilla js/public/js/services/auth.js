import Config from "../config.js";

// Initialize dummy users data
const initializeDummyUsers = () => {
  const existingUsers = localStorage.getItem(Config.USERS_KEY);
  if (!existingUsers) {
    const dummyUsers = [
      {
        _id: "user1",
        name: "John Doe",
        email: "john@example.com",
        password: "password123"
      },
      {
        _id: "user2", 
        name: "Jane Smith",
        email: "jane@example.com",
        password: "password123"
      },
      {
        _id: "user3",
        name: "Mike Johnson", 
        email: "mike@example.com",
        password: "password123"
      },
      {
        _id: "user4",
        name: "Sarah Wilson",
        email: "sarah@example.com", 
        password: "password123"
      }
    ];
    localStorage.setItem(Config.USERS_KEY, JSON.stringify(dummyUsers));
  }
};

// Initialize dummy data on load
initializeDummyUsers();

const registerUser = async (user) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const users = JSON.parse(localStorage.getItem(Config.USERS_KEY) || "[]");
  
  // Check if user already exists
  const existingUser = users.find(u => u.email === user.email);
  if (existingUser) {
    return "User already exists with this email";
  }
  
  // Add new user
  const newUser = {
    _id: `user${Date.now()}`,
    name: user.name,
    email: user.email,
    password: user.password
  };
  
  users.push(newUser);
  localStorage.setItem(Config.USERS_KEY, JSON.stringify(users));
  
  return "success";
};

const loginUser = async (user) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const users = JSON.parse(localStorage.getItem(Config.USERS_KEY) || "[]");
  
  // Find user by email and password
  const foundUser = users.find(u => u.email === user.email && u.password === user.password);
  
  if (!foundUser) {
    throw new Error("Invalid email or password");
  }
  
  // Generate dummy token
  const token = `dummy_token_${foundUser._id}_${Date.now()}`;
  
  // Store user data in localStorage
  localStorage.setItem(Config.TOKEN_KEY, token);
  localStorage.setItem(Config.EMAIL_KEY, foundUser.email);
  localStorage.setItem(Config.NAME_KEY, foundUser.name);
  localStorage.setItem("myId", foundUser._id);
  
  return {
    token: token,
    email: foundUser.email,
    name: foundUser.name,
    _id: foundUser._id
  };
};

const getAllUsers = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const users = JSON.parse(localStorage.getItem(Config.USERS_KEY) || "[]");
  
  // Return users without passwords for security
  return users.map(user => ({
    _id: user._id,
    name: user.name,
    email: user.email
  }));
};

const getMyId = async () => {
  var executed = false;

  if (!executed) {
    const users = await getAllUsers();
    const currentUserName = localStorage.getItem("name");
    
    if (currentUserName) {
      let result = users.find(user => user.name === currentUserName);
      if (result) {
        localStorage.setItem("myId", result._id);
      }
    }
    
    executed = true;
  } else return;
};

const getToken = () => localStorage.getItem(Config.TOKEN_KEY);

getMyId();

export { registerUser, loginUser, getToken, getAllUsers };
