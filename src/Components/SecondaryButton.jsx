const SecondaryButton = ({ src, alt }) => {
  return (
    <div className="rounded-full bg-slate-50 hover:bg-white bg-opacity-30 size-7 flex items-center justify-center duration-300 active:bg-violet active:duration-100">
      <img src={src} alt={alt} />
    </div>
  )
}

export default SecondaryButton