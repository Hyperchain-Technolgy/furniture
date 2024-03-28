import PropTypes from 'prop-types';

const Button = ({ className, content, handleSubmit }) => {
  return (
    <button className={className} type="submit" onClick={handleSubmit}>
      {content}
    </button>
  )
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func,
  className: PropTypes.string
};

export default Button