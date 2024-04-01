import { Route, Routes } from "react-router-dom"
import Home from "./Routes/Home"
import Login from './Routes/Login'
import Register from './Routes/Register'
import Cart from "./Components/Cart"
import WishlistPage from "./Routes/WishlistPage"
import CurrentProductPage from "./Routes/CurrentProductPage"
import AdminPage from "./Routes/AdminPage"
import ProtectedRoute from "./Components/ProtectedRoute"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/:slug" element={<CurrentProductPage />} />
      <Route path="/admin" element={<ProtectedRoute><AdminPage /></ProtectedRoute>} />
    </Routes>
  )
}

export default App
