import PropTypes from 'prop-types';

const FormField = ({ label, type, name, value = '', onChange, placeholder, rows }) => {
  return (
    <div>
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          rows={rows}
          value={value}
          onChange={onChange}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          required
        />
      )}
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
};

FormField.defaultProps = {
  value: '',
  placeholder: '',
  rows: 4,
};

export default FormField;