import ProductsList from "./ProductsList"
import SectionHeading from "./SectionHeading"
import { data as furnituresData } from '../furnituresData'

const LatestProducts = ({ content }) => {
  const latestData = furnituresData.filter(data => data.latest)

  return (
    <section className="my-10">
      <SectionHeading content={content} />
      <ProductsList data={latestData} />
    </section>
  )
}

export default LatestProducts 