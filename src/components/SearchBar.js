const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-container">
      <h2>Expenses</h2>
      <input
        type="text"
        placeholder="Search expenses..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;  // Fixed the typo here