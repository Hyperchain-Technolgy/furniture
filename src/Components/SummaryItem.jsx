import PropTypes from 'prop-types';

const SummaryItem = ({
  title, amount,
  font = 'text-sm',
  border = 'border-t border-gray-200 pt-4',
  color = 'text-gray-600'
}) => {
  return (
    <div className={`flex items-center justify-between ${border}`}>
      <dt className={`${font} ${color}`}>{title}</dt >
      <dd className={`${font} font-medium text-gray-900`}>{amount}</dd>
    </div>
  )
}

SummaryItem.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  font: PropTypes.string,
  border: PropTypes.string,
  color: PropTypes.string
};

export default SummaryItem