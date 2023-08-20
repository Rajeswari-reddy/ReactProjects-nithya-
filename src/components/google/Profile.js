import React, { useState, useEffect } from "react";
import "./Profile.css";
import LastActive from "./LastActive";

const Profile = () => {
  const [profileScore, setProfileScore] = useState(20);
  const [starRating, setStarRating] = useState(1);

  useEffect(() => {
    const newStarRating = Math.floor(profileScore / 20);
    setStarRating(newStarRating);
  }, [profileScore]);

  const handleScoreIncrease = () => {
    if (profileScore < 100) {
      setProfileScore(profileScore + 5);
    }
  };

  const progressStyle = {
    strokeDashoffset: 440 - (350 * profileScore) / 100,
  };

  return (
    <div className="profile-container">
      <button
        onClick={handleScoreIncrease}
        style={{
          backgroundColor: "	#9370DB",
          color: "#fff",
          padding: "10px",
          border: "none",
        }}
      >
        Improve Your Score
      </button>
      <div className="progress">
        <svg className="progress-circle" width="120" height="120">
          <circle
            className="progress-bar"
            cx="60"
            cy="60"
            r="54"
            stroke="#3498db"
            strokeWidth="12"
            fill="transparent"
            style={progressStyle}
          />
        </svg>
        <div className="progress-center">
          <span>{profileScore}%</span>
        </div>
      </div>
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((index) => (
          <span
            key={index}
            className={index <= starRating ? "star filled" : "star"}
          >
            ★
          </span>
        ))}
      </div>
      <LastActive />
    </div>
  );
};

export default Profile;
