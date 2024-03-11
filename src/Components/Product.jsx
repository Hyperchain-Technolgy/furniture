import cart from '../assets/cart.svg'
import heart from '../assets/heart.svg'

const Product = () => {
  return (
    <section className="border h-96 w-72">
      <div>
        <img src={cart} alt="cart icon" />
        <img src={heart} alt="heart icon" />
      </div>
      <div></div>
      <div></div>
    </section>
  )
}

export default Product