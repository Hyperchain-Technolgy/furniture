import { Route, Routes } from "react-router-dom"
import Home from "./Routes/Home"
import Login from './Routes/Login'
import Register from './Routes/Register'
import Cart from "./Components/Cart"
import WishlistPage from "./Routes/WishlistPage"
import CurrentProductPage from "./Routes/CurrentProductPage"
import AdminPage from "./Routes/AdminPage"
import ProtectedRoute from "./Components/ProtectedRoute"
import AboutPage from "./Routes/AboutPage"
import ContactPage from "./Routes/ContactPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/:_id" element={<CurrentProductPage />} />
      <Route path="/admin" element={<ProtectedRoute><AdminPage /></ProtectedRoute>} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}

export default App