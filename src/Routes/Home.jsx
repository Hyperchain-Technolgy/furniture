import { useEffect } from "react"
import Featured from "../Components/Featured"
import Hero from "../Components/Hero"
import LatestProducts from "../Components/LatestProducts"
import Navbar from "../Components/Navigation/Navbar"
import { useDispatch } from "react-redux"
import { getProducts } from "../feature/products/productSlice"

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
  })

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Featured content="Featured Products" />
        <LatestProducts content="Latest Products" />
      </main>
      <footer></footer>
    </>
  )
}

export default Home