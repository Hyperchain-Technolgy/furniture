const SearchBar = () => {
  return (
    <div
      className="relative flex">
      <input
        type="text"
        className="bg-background p-2"
        // style={{ outlineOffset: 0 }}
        placeholder='Search' />
      <button
        className="bg-pink p-3"
        type="button"
      >
        <span className="[&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </span>
      </button>
    </div>
  )
}

export default SearchBar