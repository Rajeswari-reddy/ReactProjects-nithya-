import React, { useState } from "react";
import "../CSS/filter.css";
const SearchForm = ({ onSearch }) => {
  const [job, setJob] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    onSearch(job, location);
  };

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Search Keyword"
        value={job}
        onChange={(e) => setJob(e.target.value)}
        style={{
          marginTop: "20px",
          textAlign: "center",
        }}
      />

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={{
          marginTop: "20px",
          textAlign: "center",
        }}
      />
      <button
        style={{
          backgroundColor: "#FD6A02",
          color: "white",
          marginTop: "20px",
        }}
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchForm;
