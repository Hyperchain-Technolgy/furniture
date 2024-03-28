import ProductsList from "./ProductsList"
import SectionHeading from "./SectionHeading"
import { data as furnituresData } from '../furnituresData'
import PropTypes from 'prop-types';

const Featured = ({ content }) => {
  const featuredData = furnituresData.filter(data => data.featured)

  return (
    <section className="my-16">
      <SectionHeading content={content} />
      <ProductsList data={featuredData} />
    </section>
  )
}

Featured.propTypes = {
  content: PropTypes.string.isRequired
};

export default Featured