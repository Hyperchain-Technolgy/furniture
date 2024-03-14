import Button from "./Button";
import furniture from "../assets/oneseater.png";

const BannerComponent = ({ parentStyle, para, title }) => {
  return (
    <section className="bg-background">
      <div className={parentStyle}>
        <section className="flex flex-col gap-4 md:items-start">
          <p className="text-pink capitalize">{para}</p>
          <h1 className="text-4xl font-bold text w-auto lg:w-2/4 capitalize tracking-tight">{title}</h1>
          <p className="w-auto lg:w-3/4 xl:w-2/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus illum quisquam autem tenetur fugiat ea atque odit, voluptatum porro id!</p>
          <Button content="Shop Now" className="w-24 h-10 text-slate-100 bg-pink rounded-md text-sm hover:bg-lightpink active:border" />
        </section>
        <img src={furniture} alt="furniture" className="size-72 lg:size-96 sm:mt-0 mt-10" />
      </div>
    </section>
  )
}

export default BannerComponent