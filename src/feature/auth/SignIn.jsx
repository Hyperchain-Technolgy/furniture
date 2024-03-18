import Button from '../../Components/Button'
import FormContainer from '../../Components/FormContainer'
import FormFooter from '../../Components/FormFooter'
import FormHeading from '../../Components/FormHeading'
import InputField from '../../Components/InputField'

const SignIn = () => {
  return (
    <FormContainer>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <FormHeading content="Sign in to your account" />
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <InputField content="Email address" type="email" />
          <InputField content="Password" forgotPasswordLink="#" />
          <Button content="Sign in" className="flex w-full justify-center rounded-md bg-foreground px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" />
        </form>

        <FormFooter content="Not a member?" type="Create an account" router="register" />
      </div >
    </FormContainer >
  )
}

export default SignIn