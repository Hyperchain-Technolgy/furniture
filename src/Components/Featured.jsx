import { useSelector } from "react-redux";
import ProductsList from "./ProductsList"
import SectionHeading from "./SectionHeading"
import PropTypes from 'prop-types';

const Featured = ({ content }) => {
  const featuredData = useSelector(state => state.products.products)

  return (
    <section className="mt-16">
      <SectionHeading content={content} />
      <ProductsList data={featuredData} />
    </section>
  )
}

Featured.propTypes = {
  content: PropTypes.string.isRequired
};

export default Featured