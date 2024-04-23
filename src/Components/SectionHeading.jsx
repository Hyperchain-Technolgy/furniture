import PropTypes from 'prop-types';

const SectionHeading = ({ content }) => {
  return (
    <div className='lg:my-8 text-center'>
      <h2 className="mb-4 text-3xl font-semibold tracking-tight">{content}
      </h2>
      <p className="mx-auto max-w-md text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
        dicta incidunt est ipsam, officia dolor fugit natus?
      </p>
    </div>
  )
}

SectionHeading.propTypes = {
  content: PropTypes.string.isRequired
};

export default SectionHeading