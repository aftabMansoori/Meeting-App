// Dummy authentication service - no API calls needed
const DUMMY_USERS = [
  {
    email: "admin@meeting.com",
    password: "Admin@123",
    name: "Admin User",
    token: "dummy-token-admin-123"
  },
  {
    email: "user@meeting.com", 
    password: "user123",
    name: "Regular User",
    token: "dummy-token-user-456"
  },
  {
    email: "demo@meeting.com",
    password: "demo123", 
    name: "Demo User",
    token: "dummy-token-demo-789"
  }
];

const login = async (credentials) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const user = DUMMY_USERS.find(u => 
    u.email === credentials.email && u.password === credentials.password
  );

  if (!user) {
    throw new Error("Invalid credentials");
  }

  return {
    status: 200,
    data: {
      email: user.email,
      name: user.name,
      token: user.token
    }
  };
};

const register = async (user) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));

  // Simple validation
  if (!user.email || !user.password || !user.name) {
    return {
      message: "All fields are required"
    };
  }

  // Check if user already exists
  const existingUser = DUMMY_USERS.find(u => u.email === user.email);
  if (existingUser) {
    return {
      message: "User already exists"
    };
  }

  // Add to dummy users array (in real app, this would persist)
  DUMMY_USERS.push({
    email: user.email,
    password: user.password,
    name: user.name,
    token: `dummy-token-${Date.now()}`
  });

  return "success";
};

export { login, register };
