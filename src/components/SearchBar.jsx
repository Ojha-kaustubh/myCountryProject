import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";

function SearchBar(  ) {
  const [query, setQuery] = useState("");
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        placeholder="Search For The Key"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
