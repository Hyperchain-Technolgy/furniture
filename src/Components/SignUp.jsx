import Button from "./Button";
import FormContainer from "./FormContainer";
import FormHeading from "./FormHeading";
import FormFooter from "./FormFooter";

export const formFieldStyle = {
  input: 'block w-full font-medium rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-foreground sm:leading-6',
  label: 'block text-sm font-medium leading-6 text-gray-900'
}

const SignUp = ({ userData, setUserData, handleSubmit }) => {
  const handleName = (e) => {
    setUserData({ ...userData, fullname: e.target.value });
  }

  const handleEmail = (e) => {
    setUserData({ ...userData, email: e.target.value });
  }

  const handlePassword = (e) => {
    setUserData({ ...userData, password: e.target.value });
  }

  return (
    <>
      <FormContainer FormContainer >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <FormHeading content="Create your account" />
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div className="grid gap-5">
              <div className="grid gap-1">
                <label htmlFor="name" className={formFieldStyle.label}>Full Name</label>
                <input type="text" id="name" className={formFieldStyle.input} value={userData.fullname} onChange={handleName} required />
              </div>
              <div className="grid gap-1">
                <label htmlFor="email" className={formFieldStyle.label}>Email</label>
                <input type="email" id="email" className={formFieldStyle.input} value={userData.email} onChange={handleEmail} required />
              </div>
              <div className="grid gap-1">
                <label htmlFor="password" className={formFieldStyle.label}>Password</label>
                <input type="password" id="password" className={formFieldStyle.input} value={userData.password} onChange={handlePassword} required />
              </div>
            </div>

            <Button
              content="Create an account"
              className="flex w-full justify-center rounded-md bg-foreground px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              handleSubmit={handleSubmit}
            />

            <FormFooter
              content="Already have an account?"
              type="Login"
              router="login"
            />
          </form>
        </div>
      </FormContainer >
    </>
  );
};

export default SignUp;
