import { useState, useMemo } from "react";
import { SAMPLE_DATA } from "@/data/tasks";

export function useTaskManager() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterBy, setFilterBy] = useState("All");
  const [sortBy, setSortBy] = useState("date");

  // Filter and sort tasks
  const filteredTasks = useMemo(() => {
    let filtered = SAMPLE_DATA.tasks.filter((task) => {
      const matchesSearch =
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.tag.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter =
        filterBy === "All" ||
        task.status === filterBy ||
        task.priority === filterBy ||
        task.tag === filterBy;
      return matchesSearch && matchesFilter;
    });

    // Sort tasks
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "title":
          return a.title.localeCompare(b.title);
        case "priority":
          const priorityOrder = {
            "High priority": 3,
            "Medium priority": 2,
            "Low priority": 1,
          };
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        case "status":
          return a.status.localeCompare(b.status);
        case "date":
        default:
          return new Date(b.created) - new Date(a.created);
      }
    });

    return filtered;
  }, [searchQuery, filterBy, sortBy]);

  // Calculate summary stats
  const stats = useMemo(() => {
    const completed = SAMPLE_DATA.tasks.filter(
      (t) => t.status === "Completed"
    ).length;
    const inProgress = SAMPLE_DATA.tasks.filter(
      (t) => t.status === "In Progress"
    ).length;
    const upcoming = SAMPLE_DATA.tasks.filter(
      (t) => t.status === "Upcoming"
    ).length;
    return {
      icedbox: 35,
      upcoming: upcoming,
      inProgress: inProgress,
      completed: completed,
    };
  }, []);

  return {
    searchQuery,
    setSearchQuery,
    filterBy,
    setFilterBy,
    sortBy,
    setSortBy,
    filteredTasks,
    stats,
  };
}
