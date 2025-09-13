"use client";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Clock,
  MapPin,
  Users,
  X,
} from "lucide-react";
import Sidebar from "@/components/Sidebar/Sidebar";
import MobileNav from "@/components/MobileNav/MobileNav";

const CALENDAR_EVENTS = [
  {
    id: 1,
    title: "Team Standup",
    time: "9:00 AM - 9:30 AM",
    date: "2024-05-01",
    type: "meeting",
    attendees: ["Carlos Martin", "Alan Carrington", "David Goodman"],
    location: "Conference Room A",
  },
  {
    id: 2,
    title: "Project Review",
    time: "2:00 PM - 3:00 PM",
    date: "2024-05-01",
    type: "review",
    attendees: ["Aashima Shah", "Carlos Martin"],
    location: "Online",
  },
  {
    id: 3,
    title: "Sprint Planning",
    time: "4:00 PM - 5:00 PM",
    date: "2024-05-01",
    type: "planning",
    attendees: ["Aashima Shah", "David Goodman", "Alan Carrington"],
    location: "Conference Room B",
  },
  {
    id: 4,
    title: "Design Workshop",
    time: "10:00 AM - 12:00 PM",
    date: "2024-05-02",
    type: "workshop",
    attendees: ["Alan Carrington", "Aashima Shah"],
    location: "Design Studio",
  },
  {
    id: 5,
    title: "Client Presentation",
    time: "3:00 PM - 4:00 PM",
    date: "2024-05-03",
    type: "presentation",
    attendees: ["Carlos Martin", "Aashima Shah", "David Goodman"],
    location: "Main Conference Room",
  },
];

const EVENT_COLORS = {
  meeting: "#6A70E3",
  review: "#F59E0B",
  planning: "#059669",
  workshop: "#DC2626",
  presentation: "#7C3AED",
};

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const NewEventModal = ({ isOpen, onClose, onSave, selectedDate }) => {
  const [eventTitle, setEventTitle] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventType, setEventType] = useState("meeting");

  const handleSave = () => {
    if (eventTitle.trim()) {
      onSave({
        title: eventTitle,
        time: eventTime,
        location: eventLocation,
        type: eventType,
        date: selectedDate.toISOString().split("T")[0],
        attendees: ["Aashima Shah"],
      });
      setEventTitle("");
      setEventTime("");
      setEventLocation("");
      setEventType("meeting");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-[#111827]">New Event</h3>
          <button
            onClick={onClose}
            className="text-[#6B7280] hover:text-[#111827]"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#111827] mb-2">
              Event Title
            </label>
            <input
              type="text"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
              className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#6A70E3]"
              placeholder="Enter event title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#111827] mb-2">
              Time
            </label>
            <input
              type="text"
              value={eventTime}
              onChange={(e) => setEventTime(e.target.value)}
              className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#6A70E3]"
              placeholder="e.g., 10:00 AM - 11:00 AM"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#111827] mb-2">
              Location
            </label>
            <input
              type="text"
              value={eventLocation}
              onChange={(e) => setEventLocation(e.target.value)}
              className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#6A70E3]"
              placeholder="Enter location"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#111827] mb-2">
              Event Type
            </label>
            <select
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#6A70E3]"
            >
              <option value="meeting">Meeting</option>
              <option value="review">Review</option>
              <option value="planning">Planning</option>
              <option value="workshop">Workshop</option>
              <option value="presentation">Presentation</option>
            </select>
          </div>
        </div>

        <div className="flex items-center space-x-3 mt-6">
          <button
            onClick={handleSave}
            className="flex-1 bg-[#6A70E3] text-white py-3 rounded-lg font-medium hover:bg-[#5B63D3] transition-colors"
          >
            Create Event
          </button>
          <button
            onClick={onClose}
            className="px-6 py-3 border border-[#E5E7EB] text-[#6B7280] rounded-lg font-medium hover:bg-[#F9FAFB] transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 4, 1)); // May 2024
  const [selectedDate, setSelectedDate] = useState(new Date(2024, 4, 1));
  const [viewMode, setViewMode] = useState("month");
  const [activeNav, setActiveNav] = useState("calendar");
  const [showNewEventModal, setShowNewEventModal] = useState(false);
  const [events, setEvents] = useState(CALENDAR_EVENTS);

  const handleShowProfile = () => {
    console.log("Show profile clicked");
  };

  const handleNewEvent = (newEvent) => {
    const eventWithId = { ...newEvent, id: Date.now() };
    setEvents([...events, eventWithId]);
  };

  const getEventsForDate = (date) => {
    const dateString = date.toISOString().split("T")[0];
    return events.filter((event) => event.date === dateString);
  };

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const EventCard = ({ event }) => (
    <div
      className="p-3 rounded-lg mb-2 cursor-pointer hover:shadow-sm transition-shadow"
      style={{
        backgroundColor: `${EVENT_COLORS[event.type]}20`,
        borderLeft: `4px solid ${EVENT_COLORS[event.type]}`,
      }}
    >
      <h4 className="font-medium text-[#111827] text-sm mb-1">{event.title}</h4>
      <div className="flex items-center text-xs text-[#6B7280] mb-1">
        <Clock size={12} className="mr-1" />
        <span>{event.time}</span>
      </div>
      <div className="flex items-center text-xs text-[#6B7280] mb-1">
        <MapPin size={12} className="mr-1" />
        <span>{event.location}</span>
      </div>
      <div className="flex items-center text-xs text-[#6B7280]">
        <Users size={12} className="mr-1" />
        <span>{event.attendees.length} attendees</span>
      </div>
    </div>
  );

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day,
      );
      const events = getEventsForDate(date);
      const isSelected = selectedDate.toDateString() === date.toDateString();
      const isToday = new Date().toDateString() === date.toDateString();

      days.push(
        <div
          key={day}
          className={`h-24 p-2 border border-[#F3F4F6] cursor-pointer hover:bg-[#F9FAFB] transition-colors ${
            isSelected ? "bg-[#6A70E3] bg-opacity-10 border-[#6A70E3]" : ""
          } ${isToday ? "ring-2 ring-[#6A70E3] ring-opacity-50" : ""}`}
          onClick={() => setSelectedDate(date)}
        >
          <div
            className={`text-sm font-medium mb-1 ${
              isSelected
                ? "text-[#6A70E3]"
                : isToday
                  ? "text-[#6A70E3]"
                  : "text-[#111827]"
            }`}
          >
            {day}
          </div>
          <div className="space-y-1">
            {events.slice(0, 2).map((event) => (
              <div
                key={event.id}
                className="text-xs px-2 py-1 rounded truncate"
                style={{
                  backgroundColor: EVENT_COLORS[event.type],
                  color: "white",
                }}
              >
                {event.title}
              </div>
            ))}
            {events.length > 2 && (
              <div className="text-xs text-[#6B7280] px-2">
                +{events.length - 2} more
              </div>
            )}
          </div>
        </div>,
      );
    }

    return days;
  };

  const todayEvents = getEventsForDate(selectedDate);

  return (
    <div className="min-h-screen bg-[#F0F2F5] font-inter">
      <Sidebar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        onShowProfile={handleShowProfile}
      />

      <main className="md:ml-20 flex-1">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-[#111827] mb-2">
                Calendar
              </h1>
              <p className="text-[#6B7280]">Manage your schedule and events</p>
            </div>
            <button
              onClick={() => setShowNewEventModal(true)}
              className="px-6 py-3 bg-[#6A70E3] text-white rounded-2xl font-medium flex items-center space-x-2 hover:bg-[#5B63D3] transition-colors"
            >
              <Plus size={20} />
              <span>New Event</span>
            </button>
          </div>

          {/* Calendar */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-6 shadow-sm">
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-[#111827]">
                {MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1 bg-[#F3F4F6] rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("month")}
                    className={`px-3 py-1 rounded text-sm transition-colors ${
                      viewMode === "month"
                        ? "bg-white text-[#111827] shadow-sm"
                        : "text-[#6B7280]"
                    }`}
                  >
                    Month
                  </button>
                  <button
                    onClick={() => setViewMode("week")}
                    className={`px-3 py-1 rounded text-sm transition-colors ${
                      viewMode === "week"
                        ? "bg-white text-[#111827] shadow-sm"
                        : "text-[#6B7280]"
                    }`}
                  >
                    Week
                  </button>
                </div>
                <button
                  onClick={() => navigateMonth(-1)}
                  className="p-2 hover:bg-[#F9FAFB] rounded-lg transition-colors"
                >
                  <ChevronLeft size={20} className="text-[#6B7280]" />
                </button>
                <button
                  onClick={() => navigateMonth(1)}
                  className="p-2 hover:bg-[#F9FAFB] rounded-lg transition-colors"
                >
                  <ChevronRight size={20} className="text-[#6B7280]" />
                </button>
              </div>
            </div>

            {/* Days of Week */}
            <div className="grid grid-cols-7 gap-px bg-[#F3F4F6] rounded-t-lg">
              {DAYS.map((day) => (
                <div
                  key={day}
                  className="bg-white p-3 text-center text-sm font-medium text-[#6B7280] first:rounded-tl-lg last:rounded-tr-lg"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-px bg-[#F3F4F6] rounded-b-lg">
              {renderCalendar()}
            </div>
          </div>

          {/* Events Sidebar */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#111827] mb-4">
              Events for {selectedDate.toLocaleDateString()}
            </h3>

            <div className="space-y-3">
              {todayEvents.length > 0 ? (
                todayEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#F3F4F6] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock size={24} className="text-[#6B7280]" />
                  </div>
                  <p className="text-[#6B7280] text-sm">No events scheduled</p>
                  <button className="mt-3 text-[#6A70E3] text-sm font-medium hover:underline">
                    Add Event
                  </button>
                </div>
              )}
            </div>

            {/* Upcoming Events */}
            <div className="mt-8 pt-6 border-t border-[#F3F4F6]">
              <h4 className="text-md font-medium text-[#111827] mb-3">
                Upcoming Events
              </h4>
              <div className="space-y-2">
                {CALENDAR_EVENTS.slice(0, 3).map((event) => (
                  <div
                    key={event.id}
                    className="flex items-center space-x-3 p-2 hover:bg-[#F9FAFB] rounded-lg cursor-pointer"
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: EVENT_COLORS[event.type] }}
                    ></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[#111827]">
                        {event.title}
                      </p>
                      <p className="text-xs text-[#6B7280]">
                        {event.date} • {event.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <MobileNav activeNav={activeNav} setActiveNav={setActiveNav} />

      <NewEventModal
        isOpen={showNewEventModal}
        onClose={() => setShowNewEventModal(false)}
        onSave={handleNewEvent}
        selectedDate={selectedDate}
      />
    </div>
  );
}
