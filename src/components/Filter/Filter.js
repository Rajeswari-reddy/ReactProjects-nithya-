import React, { useState } from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import RecentSearches from "./RecentSearches";
import SavedPreferences from "./SavedPreferences"; // Make sure to import this component
import data from "../../data.json";
import "../CSS/filter.css";

const Filter = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [savedPreferences, setSavedPreferences] = useState([]);

  const handleSavePreference = (result) => {
    const newPreference = { job: result.job, location: result.location };
    setSavedPreferences([...savedPreferences, newPreference]);
  };

  const handleSearch = (job, location) => {
    const filteredResults = data.filter((result) => {
      return (
        result.job.toLowerCase().includes(job.toLowerCase()) &&
        result.location.toLowerCase().includes(location.toLowerCase())
      );
    });
    console.log(data);
    console.log("filteredResults", filteredResults);

    setSearchResults(filteredResults);

    // const newRecentSearch = { job, location };
    setRecentSearches([...recentSearches, ...filteredResults]);
  };

  return (
    <div className="filter">
      <SearchForm onSearch={handleSearch} />
      <SearchResults results={searchResults} onSave={handleSavePreference} />
      <RecentSearches searches={recentSearches} />
    </div>
  );
};

export default Filter;
