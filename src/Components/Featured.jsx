import ProductsList from "./ProductsList"
import SectionHeading from "./SectionHeading"
import { data as furnituresData } from '../furnituresData'

const Featured = ({ content }) => {
  const featuredData = furnituresData.filter(data => data.featured)

  return (
    <section className="my-16">
      <SectionHeading content={content} />
      <ProductsList data={featuredData} />
    </section>
  )
}

export default Featured