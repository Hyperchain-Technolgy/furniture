const SecondaryButton = ({ src, alt }) => {
  return (
    <div className="rounded-full hover:bg-white size-7 flex items-center justify-center duration-300 active:bg-violet active:duration-100">
      <img src={src} alt={alt} />
    </div>
  )
}

export default SecondaryButton