
const SearchBox = () => {
    return (
        <div className="relative Searchbox">
            <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
                type="text"
                placeholder="搜索..."
                className="pl-10 pr-4 py-2 rounded-full bg-gray-200 h-10 shadow-sm
                w-40 focus:w-64 transition-all duration-300 ease-in-out
                focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white
                placeholder:font-roboto
                "
            />
        </div>
    )
}

export default SearchBox