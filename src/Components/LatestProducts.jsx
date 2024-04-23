import CollectionList from "./CollectionList";
import SectionHeading from "./SectionHeading"
import PropTypes from 'prop-types';

const LatestProducts = ({ content }) => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <SectionHeading content={content} />
      <CollectionList />
    </div>
  )
}

LatestProducts.propTypes = {
  content: PropTypes.string.isRequired
};

export default LatestProducts

