import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

const FormHeading = ({ content, router = "/" }) => {
  return (
    <>
      <Link to={router}>
        <img
          className="mx-auto h-10 w-auto"
          src="/Artivo.png"
          alt="Your Company"
        />
      </Link>
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        {content}
      </h2>
    </>
  )
}

FormHeading.propTypes = {
  content: PropTypes.string.isRequired,
  router: PropTypes.string,
};

export default FormHeading