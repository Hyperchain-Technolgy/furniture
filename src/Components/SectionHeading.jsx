import PropTypes from 'prop-types';

const SectionHeading = ({ content }) => {
  return (
    <h2 className="text-center text-3xl font-semibold lg:my-8 tracking-tight">{content}
    </h2>
  )
}

SectionHeading.propTypes = {
  content: PropTypes.string.isRequired
};

export default SectionHeading