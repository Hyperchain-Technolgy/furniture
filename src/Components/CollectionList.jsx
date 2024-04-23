import CollectionCard from "./CollectionCard"

const CollectionList = () => {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
      <CollectionCard title='Corner Table' image='https://images.unsplash.com/photo-1586023492125-27b2c045efd7' style='group relative block' />
      <CollectionCard title='Sofa' image='https://images.unsplash.com/photo-1616693153250-bb03055788eb' style='group relative block' />
      <CollectionCard title='Living Room' image='https://images.unsplash.com/photo-1596900779744-2bdc4a90509a' style='lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1 group relative block' />
    </div>
  )
}

export default CollectionList