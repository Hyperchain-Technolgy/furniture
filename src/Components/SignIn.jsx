import Button from './Button'
import FormContainer from './FormContainer'
import FormFooter from './FormFooter'
import FormHeading from './FormHeading'
import { formFieldStyle } from './SignUp'
import PropTypes from 'prop-types';

const SignIn = ({ userData, setUserData, handleSubmit }) => {
  const handleEmail = (e) => {
    setUserData({ ...userData, email: e.target.value });
  }

  const handlePassword = (e) => {
    setUserData({ ...userData, password: e.target.value });
  }

  return (
    <FormContainer>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <FormHeading content="Sign in to your account" />
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div className="grid gap-5">
            <div className="grid gap-1">
              <label htmlFor="email" className={formFieldStyle.label}>Email</label>
              <input type="email" id="email" className={formFieldStyle.input} value={userData.email} onChange={handleEmail} required />
            </div>
            <div className="grid gap-1">
              <label htmlFor="password" className={formFieldStyle.label}>Password</label>
              <input type="password" id="password" className={formFieldStyle.input} value={userData.password} onChange={handlePassword} required />
            </div>
          </div>
          <Button handleSubmit={handleSubmit} content="Sign in" className="flex w-full justify-center rounded-md bg-foreground px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" />
        </form>

        <FormFooter content="Not a member?" type="Create an account" router="register" />
      </div >
    </FormContainer >
  )
}

SignIn.propTypes = {
  userData: PropTypes.object.isRequired,
  setUserData: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default SignIn