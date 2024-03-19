import { useState } from "react"
import SignUp from "../Components/SignUp"
import { useDispatch } from "react-redux"
import { registerUser } from "../feature/auth/authSlice";
import Warning from "../Components/Warning";
import { useNavigate } from "react-router";

function Register() {
  const [userData, setUserData] = useState({ fullname: '', email: '', password: '' })
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

    dispatch(registerUser(userData)).then(() => {
      setUserData({ fullname: '', email: '', password: '' });
      navigate("/");
    });
  }

  return (
    <main>
      {error && <Warning heading={error} />}
      <SignUp userData={userData} setUserData={setUserData} handleSubmit={handleSubmit} />
    </main>
  )
}

export default Register