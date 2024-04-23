import { useDispatch, useSelector } from "react-redux"
import Featured from "../Components/Featured"
import Hero from "../Components/Hero"
import LatestProducts from "../Components/LatestProducts"
import Navbar from "../Components/Navigation/Navbar"
import { useEffect } from "react"
import { fetchUserInfo } from "../feature/auth/userInfoSlice"

function Home() {
  const loginUser = useSelector(state => state.auth.user)
  const dispatch = useDispatch()

  useEffect(() => {
    if (loginUser) {
      dispatch(fetchUserInfo({ id: loginUser._id, token: loginUser.token }));
    }
  }, [dispatch, loginUser])

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <LatestProducts content="Discover Our Newest Arrivals" />
        <Featured content="Featured Products" />
      </main>
      <footer></footer>
    </>
  )
}

export default Home