// Dummy calendar service - no API calls needed
const DUMMY_CALENDAR_MEETINGS = [
  {
    id: 1,
    title: "Daily Standup",
    date: "2024-01-15",
    startTime: "09:00",
    endTime: "09:30",
    location: "Conference Room A",
    attendees: ["john@meeting.com", "jane@meeting.com", "bob@meeting.com"],
    type: "recurring"
  },
  {
    id: 2,
    title: "Client Presentation",
    date: "2024-01-15",
    startTime: "14:00",
    endTime: "15:00",
    location: "Meeting Room B",
    attendees: ["alice@meeting.com", "charlie@meeting.com"],
    type: "meeting"
  },
  {
    id: 3,
    title: "Team Lunch",
    date: "2024-01-16",
    startTime: "12:00",
    endTime: "13:00",
    location: "Cafeteria",
    attendees: ["all@meeting.com"],
    type: "social"
  },
  {
    id: 4,
    title: "Sprint Review",
    date: "2024-01-17",
    startTime: "10:00",
    endTime: "11:30",
    location: "Conference Room A",
    attendees: ["john@meeting.com", "jane@meeting.com", "bob@meeting.com"],
    type: "meeting"
  },
  {
    id: 5,
    title: "Design Workshop",
    date: "2024-01-18",
    startTime: "14:00",
    endTime: "16:00",
    location: "Creative Space",
    attendees: ["alice@meeting.com", "charlie@meeting.com", "eva@meeting.com"],
    type: "workshop"
  },
  {
    id: 6,
    title: "Weekly Planning",
    date: "2024-01-19",
    startTime: "09:00",
    endTime: "10:00",
    location: "Virtual Meeting",
    attendees: ["frank@meeting.com", "grace@meeting.com"],
    type: "planning"
  },
  {
    id: 7,
    title: "Code Review Session",
    date: "2024-01-22",
    startTime: "11:00",
    endTime: "12:00",
    location: "Dev Room",
    attendees: ["john@meeting.com", "bob@meeting.com"],
    type: "review"
  }
];

const getCalenderMeetings = async (date) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // If no date provided, return meetings for today
  const targetDate = date || new Date().toISOString().split('T')[0];
  
  // Filter meetings by the requested date
  const meetingsForDate = DUMMY_CALENDAR_MEETINGS.filter(meeting => 
    meeting.date === targetDate
  );
  
  // Group meetings by hour for calendar display
  const calendarData = {};
  const hours = Array.from({length: 24}, (_, i) => i); // 0-23 hours
  
  hours.forEach(hour => {
    const hourString = hour.toString().padStart(2, '0');
    calendarData[hourString] = {
      hour: hourString,
      meetings: []
    };
  });
  
  // Add meetings to their respective hours
  meetingsForDate.forEach(meeting => {
    const startHour = meeting.startTime.split(':')[0];
    if (calendarData[startHour]) {
      calendarData[startHour].meetings.push(meeting);
    }
  });
  
  return {
    success: true,
    data: {
      date: targetDate,
      meetings: meetingsForDate,
      calendar: calendarData,
      totalMeetings: meetingsForDate.length
    }
  };
};

export { getCalenderMeetings };
