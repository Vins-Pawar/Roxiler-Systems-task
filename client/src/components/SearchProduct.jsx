import React from "react";

const SearchProduct = ({ searchInput, setSearchInput, handleSearch }) => {
    return (
        <div className=" ">
            <input
                className=" px-4 py-1.5 rounded-2xl border border-black w-72 focus:outline-none"
                type="text"
                id="search"
                placeholder="Mens Casual or 100-999"
                value={searchInput}
                onChange={(e) => {
                    setSearchInput(e.target.value);
                }}
            />
            <button
                className="bg-green-300 px-4 py-1.5 mx-2 rounded-2xl font-bold border border-black"
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    );
};

export default SearchProduct;
