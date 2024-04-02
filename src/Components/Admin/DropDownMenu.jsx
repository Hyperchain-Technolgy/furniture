import { useState } from "react";

const list = [
  'Yesterday',
  'Today',
  'Last 7 days',
  'Last 30 days',
  'Last 90 days',
]

const DropDownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Last 7 days");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  }

  return (
    <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
      <div className="flex justify-between items-center pt-5">
        <div className="relative">
          <button
            id="dropdownDefaultButton"
            onClick={toggleDropdown}
            className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
            type="button"
          >
            {selectedOption}
            <svg className="w-2.5 m-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>
          {isOpen && (
            <div id="lastDaysdropdown" className="z-10 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute bottom-8">
              <ul className="text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                {list.map((item, index) => (
                  <li key={index} onClick={() => handleOptionClick(item)} className="cursor-pointer">
                    <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DropDownMenu