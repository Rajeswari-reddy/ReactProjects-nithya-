import React, { useState } from "react";
import RecentSearches from "../Filter/RecentSearches";
import data from "../../data.json";
import SearchForm from "../Filter/SearchForm";

const RecentSearchesManager = ({ initialSearches }) => {
  const [recentSearches, setRecentSearches] = useState(initialSearches);

  return (
    <div>
      <RecentSearches searches={recentSearches} />
    </div>
  );
};

export default RecentSearchesManager;
