import furniture from "../assets/oneseater.png";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="bg-background">
      <div className="h-[44rem] sm:h-[34rem] flex items-center container mx-auto px-10 flex-col md:flex-row px-4 py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <section className="flex flex-col gap-4 md:items-start">
          <p className="text-pink capitalize">Best furniture for your castle...</p>
          <h1 className="text-4xl font-bold text w-auto lg:w-2/4 capitalize tracking-tight">New furniture collection trends in 2024 </h1>
          <p className="w-auto lg:w-3/4 xl:w-2/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus illum quisquam autem tenetur fugiat ea atque odit, voluptatum porro id!</p>
          <Button content="Shop Now" className="w-24 h-10 text-slate-100 bg-pink rounded-md text-sm hover:bg-lightpink active:border" />
        </section>
        <img src={furniture} alt="furniture" className="size-72 lg:size-96 sm:mt-0 mt-10" />
      </div>
    </section>
  )
}

export default Hero