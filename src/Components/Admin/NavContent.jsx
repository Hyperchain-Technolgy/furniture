import PropTypes from 'prop-types';

const NavContent = ({ list, svg }) => {
  return (
    <li>
      <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        <span>{svg}</span>
        <span className="ms-3">{list}</span>
      </a>
    </li>
  )
}

NavContent.propTypes = {
  list: PropTypes.string.isRequired,
  svg: PropTypes.element.isRequired,
};

export default NavContent