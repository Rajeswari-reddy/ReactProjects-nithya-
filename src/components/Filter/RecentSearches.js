import React from "react";
import SaveReference from "./SavedPreferences";
import "../CSS/filter.css";
const RecentSearches = ({ searches }) => {
  return (
    <div>
      <h2>Recent Searches</h2>

      <ul className="searches">
        {searches.map((search, index) => (
          <li key={index}>
            <img
              src={search.image}
              alt={search.job}
              style={{ height: "90px", width: "50px" }}
            />{" "}
            <br />
            {search.job} in {search.location}
            <br />
            <div> {search.skills}</div>
            <div>{search.postedDate}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentSearches;
