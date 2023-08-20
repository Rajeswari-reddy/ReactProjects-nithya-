// JobSearch.js
import React, { useState } from "react";
import RecentSearches from "./RecentSearches";

const JobSearch = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const handleSearch = () => {
    const simulatedResults = [
      { id: 1, title: "ReactJs", location: "Hyderabad" },
      { id: 2, title: "React", location: "Banglore " },
      { id: 3, title: "Node Js", location: "Hyderabad" },
      { id: 4, title: "mern", location: "Banglore " },
      { id: 5, title: "ReactJs", location: "Chennai" },
      { id: 6, title: "php", location: "Banglore " },
    ];

    const filteredResults = simulatedResults.filter((result) => {
      return (
        result.title.toLowerCase().includes(jobTitle.toLowerCase()) &&
        result.location.toLowerCase().includes(location.toLowerCase())
      );
    });

    setSearchResults(filteredResults);
  };

  return (
    <div>
      <h1>Job Search</h1>
      <div>
        <input
          type="text"
          placeholder="Job Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {searchResults.map((result) => (
          <div key={result.id}>
            <h3>{result.title}</h3>
            <p>{result.location}</p>
          </div>
        ))}
      </div>
      <div>
        <RecentSearches searches={recentSearches} />
      </div>
    </div>
  );
};

export default JobSearch;
