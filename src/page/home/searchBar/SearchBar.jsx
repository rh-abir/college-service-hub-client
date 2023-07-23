import { FaSearch } from "react-icons/fa";

const SearchBar = () => {

    const handleSearch = (event) => {
        event.preventDefault()
        const text = event.target.text.value;
        console.log(text)
        
    }

  return (
    <div className="w-80 mx-auto">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-full max-w-xs "
        />
        <button className=" -ml-7 "> 
            <FaSearch></FaSearch>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
