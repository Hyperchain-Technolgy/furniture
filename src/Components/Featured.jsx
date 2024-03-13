import ProductsList from "./ProductsList"
import SectionHeading from "./SectionHeading"
import { data as furnituresData } from '../furnituresData'

const Featured = ({ content }) => {
  return (
    <section className="my-16">
      <SectionHeading content={content} />
      <ProductsList />
    </section>
  )
}

export default Featured