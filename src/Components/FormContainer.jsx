import PropTypes from 'prop-types';

const FormContainer = ({ children }) => {
  return (
    <div className="flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      {children}
    </div>
  )
}

FormContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default FormContainer