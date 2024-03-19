import { useState } from "react"
import SignUp from "../Components/SignUp"
import { useDispatch } from "react-redux"
import { registerUser } from "../feature/auth/authSlice";
import Warning from "../Components/Warning";

function Register() {
  const [userData, setUserData] = useState({ fullname: '', email: '', password: '' })
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

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
      setUserData({ name: '', email: '', password: '' });
    });;
  }

  return (
    <main>
      {error && <Warning heading={error} />}
      <SignUp userData={userData} setUserData={setUserData} handleSubmit={handleSubmit} error={error} />
    </main>
  )
}

export default Register