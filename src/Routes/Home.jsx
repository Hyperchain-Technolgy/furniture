import Featured from "../Components/Featured"
import Hero from "../Components/Hero"
import LatestProducts from "../Components/LatestProducts"
import Navbar from "../Components/Navigation/Navbar"

function Home() {
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