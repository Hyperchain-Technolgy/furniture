import PropTypes from 'prop-types';

const ChartHeader = ({ total, heading, percent }) => {
  return (
    <div className="flex justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center">
        <div>
          <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-1">{total}</h5>
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">{heading}</p>
        </div>
      </div>
      <div className="flex items-center text-base font-semibold text-green-500 dark:text-green-500 text-center">
        {percent}%
        <svg className="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4" />
        </svg>
      </div>
    </div>
  )
}

ChartHeader.propTypes = {
  total: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  percent: PropTypes.string.isRequired,
};

export default ChartHeader