const Button = ({ className, content }) => {
  return (
    <button className={className} type="submit">
      {content}
    </button>
  )
}

export default Button