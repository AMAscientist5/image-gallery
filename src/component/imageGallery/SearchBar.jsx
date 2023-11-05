// eslint-disable-next-line react/prop-types
function SearchBar({ filter, searchText }) {
  return (
    <div className="m-4 flex flex-col text-center sm:flex-row md:flex-row lg:flex-row">
      <label className="text-xl mr-2 font-semibold text-gray-400">Search</label>
      <input
        className="border border-black text-sm p-1 text-gray-400"
        type="text"
        value={filter}
        placeholder="search name with color"
        onChange={searchText}
      />
    </div>
  );
}

export default SearchBar;
