import PropTypes from 'prop-types';

const ChartContainer = ({ children, style = '' }) => {
  return (
    <div className={`w-full rounded-lg shadow dark:bg-gray-800 ${style}`}>
      {children}
    </div>
  )
}

ChartContainer.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.string
};

export default ChartContainer