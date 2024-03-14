import { Link } from "react-router-dom"
import Button from "./Button"
import FormContainer from "./FormContainer"
import FormHeading from './FormHeading'
import InputField from "./InputField"
import FormFooter from "./FormFooter"

const SignUp = () => {
  return (
    <FormContainer>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <FormHeading content="Create your account" />
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <InputField content="Full Name" type="text" />
          <InputField content="Email address" type="email" />
          <InputField content="Password" type="password" />

          <Button content="Create an account" className="flex w-full justify-center rounded-md bg-foreground px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" />

          <FormFooter content="Already have an account?" type="Login" router="login" />
        </form>
      </div>
    </FormContainer >
  )
}

export default SignUp