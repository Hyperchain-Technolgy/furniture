import ProductsList from "./ProductsList"
import SectionHeading from "./SectionHeading"
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";

const LatestProducts = ({ content }) => {
  const latestData = useSelector(state => state.products.products)

  return (
    <section className="my-10">
      <SectionHeading content={content} />
      <ProductsList data={latestData} />
    </section>
  )
}

LatestProducts.propTypes = {
  content: PropTypes.string.isRequired
};

export default LatestProducts

