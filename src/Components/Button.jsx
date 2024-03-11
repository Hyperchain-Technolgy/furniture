const Button = ({ corner, content }) => {
  return (
    <button className={`w-24 h-10 text-slate-100 bg-pink ${corner} text-sm hover:bg-lightpink active:border`}>
      {content}
    </button>
  )
}

export default Button