import React, { useState, useEffect } from "react";

const LastActive = () => {
  const [lastActive, setLastActive] = useState(null);

  useEffect(() => {
    const updateLastActiveTimestamp = () => {
      const timestamp = new Date();
      setLastActive(timestamp);
    };

    updateLastActiveTimestamp();
    const intervalId = setInterval(updateLastActiveTimestamp, 60000); // Update every minute

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatTimeAgo = (time) => {
    const now = new Date();
    const difference = now - time;

    if (difference < 60000) {
      return "Just now";
    } else if (difference < 3600000) {
      return `${Math.floor(difference / 60000)} min ago`;
    } else if (difference < 86400000) {
      return `${Math.floor(difference / 3600000)} hr ago`;
    } else {
      return `${Math.floor(difference / 86400000)} days ago`;
    }
  };

  return (
    <div>
      <p>Last active: {lastActive ? formatTimeAgo(lastActive) : "N/A"}</p>
    </div>
  );
};

export default LastActive;
