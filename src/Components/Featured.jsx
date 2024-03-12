import ProductsList from "./ProductsList"
import SectionHeading from "./SectionHeading"

const Featured = ({ content }) => {
  return (
    <section className="my-16">
      <SectionHeading content={content} />
      <ProductsList />
    </section>
  )
}

export default Featured