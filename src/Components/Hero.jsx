import furniture from "../assets/oneseater.png";

const Hero = () => {
  return (
    <div className="h-[34rem] flex items-center container mx-auto font-medium">
      <section className="flex flex-col gap-4">
        <p className="text-pink capitalize">Best furniture for your castle...</p>
        <h1 className="text-6xl font-bold text w-9/12 capitalize">New furniture collection trends in 2024 </h1>
        <p className="w-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus illum quisquam autem tenetur fugiat ea atque odit, voluptatum porro id!</p>
        <button className="w-24 h-10 text-slate-100 bg-pink rounded-md text-sm hover:bg-lightpink active:border">Shop Now</button>
      </section>
      <img src={furniture} alt="furniture" className="size-96" />
    </div>
  )
}

export default Hero