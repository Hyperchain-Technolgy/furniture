import { useDispatch } from "react-redux";
import SignIn from "../Components/SignIn"
import { useState } from "react";
import { loginUser } from "../feature/auth/authSlice";
import Warning from "../Components/Warning";
import { useNavigate } from "react-router";

function Login() {
  const [userData, setUserData] = useState({ email: '', password: '' })
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(userData.email)) {
      setError('Please enter a valid email address');
      return;
    } else {
      setError('');
    }

    dispatch(loginUser(userData)).then((resp) => {
      if (resp.payload && resp.payload.token) {
        localStorage.setItem('token', resp.payload.token);
        setUserData({ email: '', password: '' });
        navigate("/");
      } else {
        setError('Login failed. Please try again.');
      }
    }).catch((error) => {
      setError('Login failed. Please try again.');
    });
  }

  return (
    <main>
      {error && <Warning heading={error} />}
      <SignIn userData={userData} setUserData={setUserData} handleSubmit={handleSubmit} />
    </main>
  )
}

export default Login  