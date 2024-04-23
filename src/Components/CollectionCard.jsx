import PropTypes from 'prop-types';

const CollectionCard = ({ title, image, style }) => {
  return (
    <div className={style}>
      <img
        src={image}
        alt={title}
        className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 h-full"
      />
      <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
        <h3 className="text-xl font-medium text-white">{title}</h3>
        <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
          Shop Now
        </span>
      </div>
    </div >
  )
}

CollectionCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  style: PropTypes.string,
};

export default CollectionCard