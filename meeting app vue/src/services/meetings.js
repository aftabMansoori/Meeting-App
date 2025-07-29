// Dummy meetings service - no API calls needed
const DUMMY_MEETINGS = [
  {
    id: 1,
    title: "Weekly Standup",
    description: "Team sync meeting",
    date: "2024-01-15",
    startTime: "09:00",
    endTime: "10:00",
    location: "Conference Room A",
    organizer: { name: "John Doe", email: "john@meeting.com" },
    attendees: [
      { id: 1, name: "John Doe", email: "john@meeting.com" },
      { id: 2, name: "Jane Smith", email: "jane@meeting.com" },
      { id: 3, name: "Bob Johnson", email: "bob@meeting.com" }
    ],
    team: "Development Team",
    status: "scheduled"
  },
  {
    id: 2,
    title: "Design Review",
    description: "Review new UI mockups",
    date: "2024-01-16",
    startTime: "14:00",
    endTime: "15:30",
    location: "Meeting Room B",
    organizer: { name: "Alice Wilson", email: "alice@meeting.com" },
    attendees: [
      { id: 4, name: "Alice Wilson", email: "alice@meeting.com" },
      { id: 5, name: "Charlie Brown", email: "charlie@meeting.com" },
      { id: 1, name: "John Doe", email: "john@meeting.com" }
    ],
    team: "Design Team",
    status: "scheduled"
  },
  {
    id: 3,
    title: "Marketing Strategy",
    description: "Q1 marketing campaign planning",
    date: "2024-01-17",
    startTime: "11:00",
    endTime: "12:30",
    location: "Virtual Meeting",
    organizer: { name: "Eva Davis", email: "eva@meeting.com" },
    attendees: [
      { id: 6, name: "Eva Davis", email: "eva@meeting.com" },
      { id: 7, name: "Frank Miller", email: "frank@meeting.com" },
      { id: 8, name: "Grace Lee", email: "grace@meeting.com" }
    ],
    team: "Marketing Team",
    status: "scheduled"
  },
  {
    id: 4,
    title: "Sprint Planning",
    description: "Plan tasks for next sprint",
    date: "2024-01-22",
    startTime: "10:00",
    endTime: "12:00",
    location: "Conference Room A",
    organizer: { name: "Jane Smith", email: "jane@meeting.com" },
    attendees: [
      { id: 1, name: "John Doe", email: "john@meeting.com" },
      { id: 2, name: "Jane Smith", email: "jane@meeting.com" },
      { id: 3, name: "Bob Johnson", email: "bob@meeting.com" }
    ],
    team: "Development Team",
    status: "completed"
  }
];

let nextMeetingId = 5;

const searchMeetings = async (period = "all", search = "") => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 400));

  let filteredMeetings = [...DUMMY_MEETINGS];

  // Filter by search term
  if (search && search.trim()) {
    const searchLower = search.toLowerCase();
    filteredMeetings = filteredMeetings.filter(meeting =>
      meeting.title.toLowerCase().includes(searchLower) ||
      meeting.description.toLowerCase().includes(searchLower) ||
      meeting.team.toLowerCase().includes(searchLower) ||
      meeting.location.toLowerCase().includes(searchLower)
    );
  }

  // Filter by period
  const today = new Date();
  const currentDate = today.toISOString().split('T')[0];

  switch (period) {
    case "today":
      filteredMeetings = filteredMeetings.filter(meeting => meeting.date === currentDate);
      break;
    case "week": {
      const weekFromNow = new Date(today);
      weekFromNow.setDate(today.getDate() + 7);
      filteredMeetings = filteredMeetings.filter(meeting =>
        meeting.date >= currentDate && meeting.date <= weekFromNow.toISOString().split('T')[0]
      );
      break;
    }
    case "month": {
      const monthFromNow = new Date(today);
      monthFromNow.setMonth(today.getMonth() + 1);
      filteredMeetings = filteredMeetings.filter(meeting =>
        meeting.date >= currentDate && meeting.date <= monthFromNow.toISOString().split('T')[0]
      );
      break;
    }
    case "past":
      filteredMeetings = filteredMeetings.filter(meeting => meeting.date < currentDate);
      break;
    default:
      // "all" - no additional filtering
      break;
  }

  return {
    success: true,
    data: filteredMeetings
  };
};

const addMeeting = async (meeting) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 600));

  const newMeeting = {
    id: nextMeetingId++,
    title: meeting.title,
    description: meeting.description || "",
    date: meeting.date,
    startTime: meeting.startTime,
    endTime: meeting.endTime,
    location: meeting.location || "TBD",
    organizer: meeting.organizer,
    attendees: meeting.attendees || [],
    team: meeting.team || "",
    status: "scheduled",
    createdAt: new Date().toISOString()
  };

  DUMMY_MEETINGS.push(newMeeting);

  return {
    success: true,
    data: newMeeting
  };
};

export { searchMeetings, addMeeting };
