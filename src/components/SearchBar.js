import { MdSearch } from "react-icons/md";

const SearchBar = ({ handleSearchNote }) => {
  return (
    <div className="searchBar">
      <MdSearch className="search-ico" size="1.3em" />
      <input
        type="text"
        onChange={(event) => handleSearchNote(event.target.value)}
        placeholder="What are you looking for?"
      ></input>
    </div>
  );
};

export default SearchBar;
