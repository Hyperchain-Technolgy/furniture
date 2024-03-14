const InputField = ({ content, type, forgotPasswordLink }) => {
  return (
    <section>
      <div className="flex items-center justify-between">
        <label htmlFor={type} className="block text-sm font-medium leading-6 text-gray-900">
          {content}
        </label>
        {forgotPasswordLink && (
          <div className="text-sm">
            <a href={forgotPasswordLink} className="font-semibold text-foreground hover:text-indigo-500">
              Forgot password?
            </a>
          </div>
        )}
      </div>
      <div className="mt-2">
        <input
          id={type}
          name={type}
          type={type}
          autoComplete={type}
          required
          className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-foreground sm:text-sm sm:leading-6"
        />
      </div>
    </section>
  )
}

export default InputField