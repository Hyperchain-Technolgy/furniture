const Button = ({ className, content, handleSubmit }) => {
  return (
    <button className={className} type="submit" onClick={handleSubmit}>
      {content}
    </button>
  )
}

export default Button