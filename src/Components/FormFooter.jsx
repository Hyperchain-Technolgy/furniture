import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

const FormFooter = ({ content, type, router }) => {
  return (
    <p className="mt-10 text-center text-sm text-gray-500">
      <span className="font-medium">{content}{' '}</span>
      <Link to={`/${router}`}>
        <span className="font-semibold leading-6 text-foreground hover:text-indigo-800">
          {type}
        </span>
      </Link>
    </p>
  )
}

FormFooter.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  router: PropTypes.string.isRequired
};

export default FormFooter