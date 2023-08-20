import React from "react";
import SaveReference from "./SavedPreferences";
import "../CSS/filter.css";

const SearchResults = ({ results, onSave }) => {
  return (
    <div>
      <h2>Search Results</h2>
      <ul className="results">
        {results.map((result, index) => (
          <li key={index}>
            <img
              src={result.image}
              alt={result.job}
              style={{ height: "30px", width: "50px" }}
            />{" "}
            {/* Display the image */}
            {result.job} - {result.location}
            <div>{result.skills}</div> {/* Display skills */}
            <div>{result.postedDate}</div> {/* Display posted date */}
            <SaveReference result={result} onSave={onSave} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
