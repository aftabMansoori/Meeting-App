import Config from "../config.js";
import { getToken } from "../services/auth.js";

// Initialize dummy meetings data
const initializeDummyMeetings = () => {
  const existingMeetings = localStorage.getItem(Config.MEETINGS_KEY);
  if (!existingMeetings) {
    const dummyMeetings = [
      {
        _id: "meeting1",
        title: "Weekly Team Standup",
        description: "Weekly progress review and planning",
        date: "2024-01-15",
        time: "09:00",
        duration: "60",
        members: ["user1", "user2", "user3"],
        createdBy: "user1",
        createdAt: "2024-01-10T10:00:00Z"
      },
      {
        _id: "meeting2", 
        title: "Project Planning Session",
        description: "Planning for Q1 deliverables",
        date: "2024-01-20",
        time: "14:00", 
        duration: "120",
        members: ["user1", "user2", "user4"],
        createdBy: "user2",
        createdAt: "2024-01-12T15:30:00Z"
      },
      {
        _id: "meeting3",
        title: "Client Presentation",
        description: "Present final design mockups to client",
        date: "2024-01-25", 
        time: "11:00",
        duration: "90",
        members: ["user2", "user3", "user4"],
        createdBy: "user3",
        createdAt: "2024-01-14T09:15:00Z"
      },
      {
        _id: "meeting4",
        title: "Budget Review",
        description: "Monthly budget and expense review",
        date: "2024-01-30",
        time: "16:00",
        duration: "45", 
        members: ["user1", "user4"],
        createdBy: "user4",
        createdAt: "2024-01-16T11:45:00Z"
      }
    ];
    localStorage.setItem(Config.MEETINGS_KEY, JSON.stringify(dummyMeetings));
  }
};

// Initialize dummy data on load
initializeDummyMeetings();

const addMeeting = async (meeting) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const meetings = JSON.parse(localStorage.getItem(Config.MEETINGS_KEY) || "[]");
  const currentUserId = localStorage.getItem("myId");
  
  // Create new meeting
  const newMeeting = {
    _id: `meeting${Date.now()}`,
    title: meeting.title,
    description: meeting.description,
    date: meeting.date,
    time: meeting.time,
    duration: meeting.duration,
    members: meeting.members || [],
    createdBy: currentUserId,
    createdAt: new Date().toISOString()
  };
  
  meetings.push(newMeeting);
  localStorage.setItem(Config.MEETINGS_KEY, JSON.stringify(meetings));
  
  return newMeeting;
};

async function searchMeeting(search, period) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const meetings = JSON.parse(localStorage.getItem(Config.MEETINGS_KEY) || "[]");
  
  if (arguments[0] !== undefined) {
    console.log(search, period);
    
    // Filter meetings based on search criteria
    let filteredMeetings = meetings;
    
    // Filter by search term (title or description)
    if (search && search.trim()) {
      filteredMeetings = filteredMeetings.filter(meeting => 
        meeting.title.toLowerCase().includes(search.toLowerCase()) ||
        meeting.description.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    // Filter by period
    if (period && period !== 'all') {
      const today = new Date();
      const currentDate = today.toISOString().split('T')[0];
      
      filteredMeetings = filteredMeetings.filter(meeting => {
        const meetingDate = new Date(meeting.date);
        const meetingDateStr = meetingDate.toISOString().split('T')[0];
        
        switch (period) {
          case 'today':
            return meetingDateStr === currentDate;
          case 'week':
            const weekFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
            return meetingDate >= today && meetingDate <= weekFromNow;
          case 'month':
            const monthFromNow = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
            return meetingDate >= today && meetingDate <= monthFromNow;
          default:
            return true;
        }
      });
    }
    
    return filteredMeetings;
  } else {
    // Return all meetings
    return meetings;
  }
}

export { addMeeting, searchMeeting };
