import Button from './Button'
import FormHeading from './FormHeading'
import InputField from './InputField'

const SignIn = () => {
  return (
    <div className="flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=pink&shade=600"
          alt="Your Company"
        />
        <FormHeading content="Sign in to your account" />
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <InputField content="Email address" type="email" />
          <InputField content="Password" forgotPasswordLink="#" />
          <Button content="Sign in" className="flex w-full justify-center rounded-md bg-foreground px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" />
        </form>

        <p className="mt-10 text-center  text-sm text-gray-500">
          Not a member?{' '}
          <a href="#" className="font-semibold leading-6 text-foreground hover:text-indigo-800">
            Create an account
          </a>
        </p>
      </div >
    </div >
  )
}

export default SignIn