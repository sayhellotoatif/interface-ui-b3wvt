export const SAMPLE_DATA = {
  tasks: [
    {
      id: "43029",
      title: "Develop the structure and content of the new site",
      status: "Completed",
      assignee: {
        name: "Carlos Martin",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      },
      date: "Today",
      tag: "Marketing",
      priority: "High priority",
      created: "May 1, 2024",
      description:
        "Create a detailed sitemap, wireframes, and draft initial content for the homepage, about us, and services pages.",
      tags: ["Marketing", "Website", "Content"],
    },
    {
      id: "43031",
      title: "Change color palette to more bright",
      status: "Completed",
      assignee: {
        name: "Alan Carrington",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      },
      date: "Today",
      tag: "Design",
      priority: "High priority",
      created: "May 1, 2024",
      description:
        "Research and propose a new, brighter color palette that aligns with modern design trends and brand identity.",
      tags: ["Design", "Branding", "Colors"],
    },
    {
      id: "43030",
      title: "Finish new landing page",
      status: "In Progress",
      assignee: {
        name: "David Goodman",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
      },
      date: "May 1, 2024",
      tag: "Development",
      priority: "High priority",
      created: "Apr 20, 2024",
      description:
        "Complete the final implementation and testing of the new marketing landing page.",
      tags: ["Development", "Frontend", "Marketing"],
    },
    {
      id: "41048",
      title: "Test a new hypothesis with a separate landing page",
      status: "Upcoming",
      assignee: {
        name: "Aashima Shah",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      },
      date: "Apr 25, 2024",
      tag: "Research",
      priority: "Medium priority",
      created: "Apr 25, 2024",
      description:
        "The goal is to gather insights and evidence to support or refute the new hypothesis, helping in making informed decisions for future strategies.",
      image:
        "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=280&h=160&fit=crop",
      tags: ["Research", "Testing", "Analytics"],
    },
    {
      id: "41049",
      title: "Getting user feedback",
      status: "In Progress",
      assignee: {
        name: "Aashima Shah",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      },
      date: "Apr 30, 2024",
      tag: "Research",
      priority: "Medium priority",
      created: "Apr 25, 2024",
      description:
        "Conduct user interviews and surveys to gather feedback on the current user experience and new feature concepts.",
      tags: ["Research", "UX", "Feedback"],
    },
    {
      id: "43028",
      title: "Draw interfaces about profile section",
      status: "Upcoming",
      assignee: {
        name: "Alan Carrington",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      },
      date: "May 2, 2024",
      tag: "Design",
      priority: "Low priority",
      created: "May 1, 2024",
      description:
        "Create wireframes and mockups for the new user profile section, focusing on an intuitive and clean layout.",
      tags: ["Design", "UI", "Profile"],
    },
  ],
};

export const STATUS_COLORS = {
  Completed: { bg: "#D1FAE5", text: "#059669" },
  "In Progress": { bg: "#FEF9C3", text: "#F59E0B" },
  Upcoming: { bg: "#E0E7FF", text: "#4F46E5" },
};

export const PRIORITY_COLORS = {
  "High priority": "#EF4444",
  "Medium priority": "#F59E0B",
  "Low priority": "#6B7280",
};

export const TAG_COLORS = {
  Marketing: { bg: "#FEE2E2", text: "#DC2626" },
  Design: { bg: "#E0E7FF", text: "#4F46E5" },
  Development: { bg: "#D1FAE5", text: "#059669" },
  Research: { bg: "#FEF3C7", text: "#D97706" },
  Website: { bg: "#F3E8FF", text: "#7C3AED" },
  Content: { bg: "#FEF3C7", text: "#D97706" },
  Branding: { bg: "#F0FDF4", text: "#166534" },
  Colors: { bg: "#FFF7ED", text: "#C2410C" },
  Frontend: { bg: "#ECFDF5", text: "#065F46" },
  Testing: { bg: "#FEF2F2", text: "#B91C1C" },
  Analytics: { bg: "#EFF6FF", text: "#1D4ED8" },
  UX: { bg: "#F5F3FF", text: "#6D28D9" },
  Feedback: { bg: "#ECFDF5", text: "#047857" },
  UI: { bg: "#EFF6FF", text: "#1E40AF" },
  Profile: { bg: "#FEF3C7", text: "#92400E" },
};

export const TEAM_MEMBERS = [
  {
    name: "Carlos Martin",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    role: "Frontend Developer",
  },
  {
    name: "Alan Carrington",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    role: "UI/UX Designer",
  },
  {
    name: "David Goodman",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
    role: "Backend Developer",
  },
  {
    name: "Aashima Shah",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
    role: "Project Manager",
  },
];
