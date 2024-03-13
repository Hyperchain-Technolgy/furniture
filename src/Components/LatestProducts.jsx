import ProductsList from "./ProductsList"
import SectionHeading from "./SectionHeading"
import { data as furnituresData } from '../furnituresData'

const LatestProducts = ({ content }) => {
  return (
    <section className="my-10">
      <SectionHeading content={content} />
      <ProductsList />
    </section>
  )
}

export default LatestProducts 