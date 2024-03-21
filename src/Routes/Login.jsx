import { useDispatch, useSelector } from "react-redux";
import SignIn from "../Components/SignIn"
import { useState } from "react";
import { loginUser, setCredentials } from "../feature/auth/authSlice";
import Warning from "../Components/Warning";
import { useNavigate } from "react-router";

function Login() {
  const [userData, setUserData] = useState({ email: '', password: '' })
  const error = useSelector(state => state.auth.error)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await dispatch(loginUser(userData)).unwrap()
    localStorage.setItem('userData', JSON.stringify(response))
    dispatch(setCredentials(response))

    setUserData({ email: '', password: '' });
    navigate('/')
  }

  return (
    <main>
      {error && <Warning heading={error} />}
      <SignIn userData={userData} setUserData={setUserData} handleSubmit={handleSubmit} />
    </main>
  )
}

export default Login  