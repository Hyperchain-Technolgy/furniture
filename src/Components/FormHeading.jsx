import { Link } from "react-router-dom"

const FormHeading = ({ content, router = "/" }) => {
  return (
    <>
      <Link to={router}>
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=pink&shade=600"
          alt="Your Company"
        />
      </Link>
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        {content}
      </h2>
    </>
  )
}

export default FormHeading